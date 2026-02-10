#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import Parser from 'rss-parser'
import { JSDOM } from 'jsdom'
import { Readability } from '@mozilla/readability'
import TurndownService from 'turndown'
import { format } from 'date-fns'

const parser = new Parser({
  timeout: 20000,
  customFields: {
    item: ['language', 'media:content', 'media:thumbnail'],
  },
})

const ROOT = process.cwd()
const CONTENT_DIR = path.join(ROOT, 'content')

const YOUDAO_APP_KEY = process.env.YOUDAO_APP_KEY
const YOUDAO_APP_SECRET = process.env.YOUDAO_APP_SECRET

const CATEGORIES = {
  tech: [
    'https://techcrunch.com/feed/',
    'https://www.theverge.com/rss/index.xml',
    'https://arstechnica.com/feed/',
  ],
  ai: [
    'https://openai.com/blog/rss.xml',
    'https://www.technologyreview.com/topic/artificial-intelligence/feed/',
    'https://venturebeat.com/category/ai/feed/',
  ],
  finance: [
    'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    'https://feeds.a.dj.com/rss/RSSMarketsMain.xml',
    'https://www.ft.com/?format=rss',
  ],
  gaming: [
    'https://www.gamesindustry.biz/feed',
    'https://feeds.ign.com/ign/all?format=rss',
    'https://www.polygon.com/rss/index.xml',
  ],
}

const MAX_ITEMS_PER_CATEGORY = 12

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80)

const cleanText = (html = '') =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

const truncate = (q) => {
  if (!q) return ''
  const len = q.length
  if (len <= 20) return q
  return q.slice(0, 10) + len + q.slice(len - 10)
}

const youdaoTranslate = async (text) => {
  if (!text) return ''
  if (!YOUDAO_APP_KEY || !YOUDAO_APP_SECRET) return text

  const url = 'https://openapi.youdao.com/api'
  const salt = String(Math.floor(Math.random() * 100000))
  const curtime = String(Math.floor(Date.now() / 1000))
  const signStr = YOUDAO_APP_KEY + truncate(text) + salt + curtime + YOUDAO_APP_SECRET
  const sign = crypto.createHash('sha256').update(signStr).digest('hex')

  const body = new URLSearchParams({
    q: text,
    from: 'auto',
    to: 'zh-CHS',
    appKey: YOUDAO_APP_KEY,
    salt,
    sign,
    signType: 'v3',
    curtime,
  })

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  const data = await res.json().catch(() => null)
  if (!data || !data.translation) return text
  return Array.isArray(data.translation) ? data.translation.join('\n') : String(data.translation)
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
})

const fetchFullContent = async (url) => {
  if (!url) return ''
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NewsAggregator/1.0)'
      }
    })
    const html = await res.text()
    const dom = new JSDOM(html, { url })
    const reader = new Readability(dom.window.document)
    const article = reader.parse()
    if (!article?.content) return ''
    const markdown = turndown.turndown(article.content)
    return markdown.trim()
  } catch (err) {
    console.error(`Failed to fetch full content: ${url}`, err.message)
    return ''
  }
}

const writeMarkdown = async (category, item) => {
  const published = item.isoDate ? new Date(item.isoDate) : new Date()
  const stamp = format(published, 'yyyyMMddHHmm')
  const titleRaw = item.title?.trim() || 'Untitled'
  const slug = slugify(`${stamp}-${titleRaw}`) || `${stamp}-item`
  const filename = `${slug}.md`
  const targetDir = path.join(CONTENT_DIR, category)
  ensureDir(targetDir)

  const filePath = path.join(targetDir, filename)
  if (fs.existsSync(filePath)) return null

  const summaryRaw = cleanText(item.contentSnippet || item.content || item.summary || '')
  const contentRaw = cleanText(item.content || item['content:encoded'] || summaryRaw || '')
  const source = item.creator || item.author || item.source || item.itunes?.author || 'Unknown'
  const link = item.link || ''

  const fullContent = await fetchFullContent(link)
  const baseContent = fullContent || contentRaw

  const title = await youdaoTranslate(titleRaw)
  const summary = await youdaoTranslate(summaryRaw)
  const content = await youdaoTranslate(baseContent)

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `source: "${String(source).replace(/"/g, '\\"')}"`,
    `url: "${String(link).replace(/"/g, '\\"')}"`,
    `published: "${published.toISOString()}"`,
    `category: "${category}"`,
    `summary: "${summary.replace(/"/g, '\\"')}"`,
    '---',
    '',
  ].join('\n')

  const body = content ? `${content}\n` : '暂无正文内容。\n'
  fs.writeFileSync(filePath, frontmatter + body, 'utf-8')
  return filePath
}

const fetchCategory = async (category, feeds) => {
  const items = []
  for (const feedUrl of feeds) {
    try {
      const feed = await parser.parseURL(feedUrl)
      for (const item of feed.items || []) {
        items.push(item)
      }
    } catch (err) {
      console.error(`[${category}] Failed to fetch ${feedUrl}:`, err.message)
    }
  }

  const unique = new Map()
  for (const item of items) {
    const key = item.link || item.guid || item.title
    if (!key) continue
    if (!unique.has(key)) unique.set(key, item)
  }

  const sorted = Array.from(unique.values()).sort((a, b) => {
    const da = a.isoDate ? new Date(a.isoDate).getTime() : 0
    const db = b.isoDate ? new Date(b.isoDate).getTime() : 0
    return db - da
  })

  let count = 0
  for (const item of sorted) {
    if (count >= MAX_ITEMS_PER_CATEGORY) break
    const written = await writeMarkdown(category, item)
    if (written) count += 1
  }

  return count
}

const run = async () => {
  ensureDir(CONTENT_DIR)
  let total = 0
  for (const [category, feeds] of Object.entries(CATEGORIES)) {
    const added = await fetchCategory(category, feeds)
    total += added
    console.log(`[${category}] added ${added}`)
  }
  console.log(`Done. Total added: ${total}`)
}

run().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
