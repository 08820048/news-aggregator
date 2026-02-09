import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNewsByCategory, getCategories, type Category } from '@/lib/news'
import { getDict, type Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string; category: string }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { locale: rawLocale, category: rawCategory } = await params
  const locale = (rawLocale as Locale) ?? 'zh'
  const category = rawCategory as Category
  const categories = getCategories()
  if (!categories.includes(category)) notFound()

  const dict = getDict(locale)
  const items = getNewsByCategory(category)

  return (
    <section>
      <h1>{dict[category] ?? category}</h1>
      <div className="list">
        {items.map((item) => (
          <article key={item.slug} className="card">
            <div className="meta">
              <time>{new Date(item.published).toLocaleString()}</time>
              <span>{dict.source}: {item.source || 'N/A'}</span>
            </div>
            <h2>
              <Link href={`/${locale}/${category}/${item.slug}`}>{item.title}</Link>
            </h2>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
