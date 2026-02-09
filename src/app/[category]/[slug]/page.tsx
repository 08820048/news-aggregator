import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNewsItem, getCategories, type Category } from '@/lib/news'

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

export default async function DetailPage({ params }: PageProps) {
  const { category: rawCategory, slug } = await params
  const category = rawCategory as Category
  const categories = getCategories()
  if (!categories.includes(category)) notFound()

  const item = getNewsItem(category, slug)
  if (!item) notFound()

  return (
    <article className="detail">
      <Link className="back" href={`/${category}`}>
        ← 返回
      </Link>
      <h1>{item.title}</h1>
      <div className="meta">
        <span>来源: {item.source || 'N/A'}</span>
        <time>{new Date(item.published).toLocaleString()}</time>
      </div>
      <p className="summary">{item.summary}</p>
      <div className="content">{item.content}</div>
      {item.url && (
        <a className="cta" href={item.url} target="_blank" rel="noopener noreferrer">
          阅读原文
        </a>
      )}
    </article>
  )
}
