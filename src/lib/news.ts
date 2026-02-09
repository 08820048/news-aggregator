import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type NewsItem = {
  slug: string
  title: string
  source: string
  url: string
  published: string
  category: string
  summary: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

export const getCategories = () => ['tech', 'ai', 'finance', 'gaming'] as const
export type Category = (typeof getCategories)[number]

const readMarkdown = (filePath: string, category: string): NewsItem | null => {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  if (!data.title || !data.published) return null

  const slug = path.basename(filePath, '.md')
  return {
    slug,
    title: String(data.title),
    source: String(data.source || ''),
    url: String(data.url || ''),
    published: String(data.published),
    category,
    summary: content.trim(),
  }
}

export const getNewsByCategory = (category: Category) => {
  const dir = path.join(CONTENT_DIR, category)
  if (!fs.existsSync(dir)) return [] as NewsItem[]
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  const items = files
    .map((file) => readMarkdown(path.join(dir, file), category))
    .filter((item): item is NewsItem => Boolean(item))
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
  return items
}

export const getLatestNews = () => {
  const categories = getCategories()
  const items = categories.flatMap((cat) => getNewsByCategory(cat))
  return items.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
}

export const getNewsItem = (category: Category, slug: string) => {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return readMarkdown(filePath, category)
}
