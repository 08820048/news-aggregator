#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import Parser from 'rss-parser'
import { format } from 'date-fns'

const parser = new Parser({
  timeout: 20000,
  customFields: {
    item: ['language', 'media:content', 'media:thumbnail'],
  },
})

const ROOT = process.cwd()
const CONTENT_DIR = path.join(ROOT, 'content')

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

const writeMarkdown = (category, item) => {
  const published = item.isoDate ? new Date(item.isoDate) : new Date()
  const stamp = format(published, 'yyyyMMddHHmm')
  const title = item.title?.trim() || 'Untitled'
  const slug = slugify(`${stamp}-${title}`) || `${stamp}-item`
  const filename = `${slug}.md`
  const targetDir = path.join(CONTENT_DIR, category)
  ensureDir(targetDir)

  const filePath = path.join(targetDir, filename)
  if (fs.existsSync(filePath)) return null

  const summary = cleanText(item.contentSnippet || item.content || item.summary || '')
  const source = item.creator || item.author || item.source || item.itunes?.author || 'Unknown'
  const link = item.link || ''

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `source: "${String(source).replace(/"/g, '\\"')}"`,
    `url: "${String(link).replace(/"/g, '\\"')}"`,
    `published: "${published.toISOString()}"`,
    `category: "${category}"`,
    '---',
    '',
  ].join('\n')

  const body = summary ? `${summary}\n` : 'No summary available.\n'
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
    const written = writeMarkdown(category, item)
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
