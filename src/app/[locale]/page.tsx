import { getNewsByCategory } from '@/lib/news'
import { getDict, type Locale } from '@/lib/i18n'
import { NewsList } from '@/components/news-list'

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
      <NewsList items={items} locale={locale} />
    </section>
  )
}
