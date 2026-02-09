import { notFound } from 'next/navigation'
import { getNewsByCategory, getCategories, type Category } from '@/lib/news'
import { NewsList } from '@/components/news-list'

interface PageProps {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: rawCategory } = await params
  const category = rawCategory as Category
  const categories = getCategories()
  if (!categories.includes(category)) notFound()

  const items = getNewsByCategory(category)
  const labelMap: Record<Category, string> = {
    tech: '科技',
    ai: 'AI',
    finance: '金融',
    gaming: '游戏',
  }

  return (
    <section>
      <h1>{labelMap[category]}</h1>
      <NewsList items={items} />
    </section>
  )
}
