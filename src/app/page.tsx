import { getNewsByCategory } from '@/lib/news'
import { NewsList } from '@/components/news-list'

export default function HomePage() {
  const items = getNewsByCategory('tech').slice(0, 30)

  return (
    <section>
      <h1>科技</h1>
      <NewsList items={items} />
    </section>
  )
}
