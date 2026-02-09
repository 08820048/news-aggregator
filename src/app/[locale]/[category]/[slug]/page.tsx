import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNewsItem, getCategories, type Category } from '@/lib/news'
import { getDict, type Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: Locale; category: Category; slug: string }>
}

export default async function DetailPage({ params }: PageProps) {
  const { locale, category, slug } = await params
  const categories = getCategories()
  if (!categories.includes(category)) notFound()

  const item = getNewsItem(category, slug)
  if (!item) notFound()

  const dict = getDict(locale)

  return (
    <article className="detail">
      <Link className="back" href={`/${locale}/${category}`}>
        ← {dict.back}
      </Link>
      <h1>{item.title}</h1>
      <div className="meta">
        <span>{dict.source}: {item.source || 'N/A'}</span>
        <time>{new Date(item.published).toLocaleString()}</time>
      </div>
      <p className="summary">{item.summary}</p>
      {item.url && (
        <a className="cta" href={item.url} target="_blank" rel="noopener noreferrer">
          {dict.read}
        </a>
      )}
    </article>
  )
}
