import Link from 'next/link'
import { getLatestNews } from '@/lib/news'
import { getDict, type Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params
  const locale = (rawLocale as Locale) ?? 'zh'
  const dict = getDict(locale)
  const items = getLatestNews().slice(0, 30)

  return (
    <section>
      <h1>{dict.latest}</h1>
      <div className="list">
        {items.map((item) => (
          <article key={item.slug} className="card">
            <div className="meta">
              <span className="tag">{dict[item.category as keyof typeof dict] ?? item.category}</span>
              <time>{new Date(item.published).toLocaleString()}</time>
            </div>
            <h2>
              <Link href={`/${locale}/${item.category}/${item.slug}`}>{item.title}</Link>
            </h2>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
