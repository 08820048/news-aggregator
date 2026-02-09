'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { NewsItem } from '@/lib/news'

export type SortMode = 'latest' | 'oldest'

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname
  } catch {
    return ''
  }
}

const faviconUrl = (url: string) => {
  const domain = getDomain(url)
  if (!domain) return ''
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
}

export function NewsList({ items, locale }: { items: NewsItem[]; locale: string }) {
  const [sort, setSort] = useState<SortMode>('latest')

  const sorted = useMemo(() => {
    return [...items].sort((a, b) => {
      const da = new Date(a.published).getTime()
      const db = new Date(b.published).getTime()
      return sort === 'latest' ? db - da : da - db
    })
  }, [items, sort])

  return (
    <div>
      <div className="sort">
        <button
          type="button"
          className={sort === 'latest' ? 'active' : ''}
          onClick={() => setSort('latest')}
        >
          最新
        </button>
        <button
          type="button"
          className={sort === 'oldest' ? 'active' : ''}
          onClick={() => setSort('oldest')}
        >
          最旧
        </button>
      </div>
      <ul className="list">
        {sorted.map((item) => {
          const icon = faviconUrl(item.url)
          return (
            <li key={item.slug} className="list-item">
              <div className="meta">
                <div className="source">
                  {icon ? (
                    <img src={icon} alt="" className="favicon" />
                  ) : null}
                  <span>{item.source || 'N/A'}</span>
                </div>
                <time>{new Date(item.published).toLocaleString()}</time>
              </div>
              <Link href={`/${locale}/${item.category}/${item.slug}`} className="title">
                {item.title}
              </Link>
              <p className="summary">{item.summary}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
