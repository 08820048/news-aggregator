#!/usr/bin/env node
import fs from 'node:fs'
import dns from 'node:dns/promises'
import nodemailer from 'nodemailer'

const CONFIG_PATH = new URL('./domain-health-config.json', import.meta.url)
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const SMTP_TO = process.env.SMTP_TO

const timeoutFetch = (url, ms = 10000) =>
  Promise.race([
    fetch(url, { method: 'GET', headers: { 'User-Agent': 'DomainHealth/1.0' } }),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
  ])

const checkDns = async (domain) => {
  try {
    const records = await dns.resolveAny(domain)
    return { ok: true, records }
  } catch (err) {
    return { ok: false, error: err.message }
  }
}

const checkHttp = async (domain) => {
  const result = {
    https: null,
    http: null,
  }

  for (const scheme of ['https', 'http']) {
    try {
      const res = await timeoutFetch(`${scheme}://${domain}`, 10000)
      result[scheme] = { ok: res.status < 400, status: res.status }
    } catch (err) {
      result[scheme] = { ok: false, error: err.message }
    }
  }

  return result
}

const checkContent = async (domain, badKeywords = []) => {
  if (!badKeywords.length) return { checked: false, hits: [] }
  try {
    const res = await timeoutFetch(`https://${domain}`, 12000)
    const html = await res.text()
    const hits = badKeywords.filter((k) => html.includes(k))
    return { checked: true, hits }
  } catch (err) {
    return { checked: true, error: err.message, hits: [] }
  }
}

const formatResult = (domain, dnsRes, httpRes, contentRes) => {
  const lines = []
  lines.push(`- ${domain}`)
  lines.push(`  DNS: ${dnsRes.ok ? 'OK' : `FAIL (${dnsRes.error})`}`)
  lines.push(
    `  HTTPS: ${httpRes.https?.ok ? 'OK' : `FAIL (${httpRes.https?.error || httpRes.https?.status})`}`
  )
  lines.push(
    `  HTTP: ${httpRes.http?.ok ? 'OK' : `FAIL (${httpRes.http?.error || httpRes.http?.status})`}`
  )
  if (contentRes.checked) {
    if (contentRes.error) {
      lines.push(`  内容检查: FAIL (${contentRes.error})`)
    } else if (contentRes.hits?.length) {
      lines.push(`  内容检查: 命中关键词 -> ${contentRes.hits.join(', ')}`)
    } else {
      lines.push('  内容检查: 未发现关键词')
    }
  } else {
    lines.push('  内容检查: 未启用')
  }
  return lines.join('\n')
}

const sendEmail = async (subject, body) => {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
    throw new Error('Missing SMTP env vars')
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
  await transporter.sendMail({
    from: SMTP_USER,
    to: SMTP_TO,
    subject,
    text: body,
  })
}

const run = async () => {
  const results = []
  for (const domain of config.domains) {
    const dnsRes = await checkDns(domain)
    const httpRes = await checkHttp(domain)
    const contentRes = await checkContent(domain, config.badKeywords)
    results.push(formatResult(domain, dnsRes, httpRes, contentRes))
  }

  const body = `域名健康监测报告\n\n${results.join('\n\n')}`
  const subject = `域名健康监测｜${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}`
  await sendEmail(subject, body)
  console.log('Report sent')
}

run().catch((err) => {
  console.error('Failed:', err)
  process.exit(1)
})
