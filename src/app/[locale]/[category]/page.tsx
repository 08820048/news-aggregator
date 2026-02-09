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

  const categoryLabel = dict[category as keyof typeof dict] ?? category

  return (
    <section>
      <h1>{categoryLabel}</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.slug} className="list-item">
            <div className="meta">
              <time>{new Date(item.published).toLocaleString()}</time>
              <span>{dict.source}: {item.source || 'N/A'}</span>
            </div>
            <Link href={`/${locale}/${category}/${item.slug}`} className="title">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
