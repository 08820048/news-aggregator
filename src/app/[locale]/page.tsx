import Link from 'next/link'
import { getNewsByCategory } from '@/lib/news'
import { getDict, type Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params
  const locale = (rawLocale as Locale) ?? 'zh'
  const dict = getDict(locale)
  const items = getNewsByCategory('tech').slice(0, 30)

  return (
    <section>
      <h1>{dict.tech}</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.slug} className="list-item">
            <div className="meta">
              <time>{new Date(item.published).toLocaleString()}</time>
              <span>{dict.source}: {item.source || 'N/A'}</span>
            </div>
            <Link href={`/${locale}/${item.category}/${item.slug}`} className="title">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
