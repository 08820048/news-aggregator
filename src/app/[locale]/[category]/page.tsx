import { notFound } from 'next/navigation'
import { getNewsByCategory, getCategories, type Category } from '@/lib/news'
import { getDict, type Locale } from '@/lib/i18n'
import { NewsList } from '@/components/news-list'

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
      <NewsList items={items} locale={locale} />
    </section>
  )
}
