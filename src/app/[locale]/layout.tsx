import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/globals.css'
import { getDict, locales, type Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'News Hub',
  description: 'Global news aggregation platform',
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  const dict = getDict(locale)

  return (
    <div className="container">
      <header className="header">
        <Link href={`/${locale}`} className="brand">
          {dict.title}
        </Link>
        <nav className="nav">
          <Link href={`/${locale}/tech`}>{dict.tech}</Link>
          <Link href={`/${locale}/ai`}>{dict.ai}</Link>
          <Link href={`/${locale}/finance`}>{dict.finance}</Link>
          <Link href={`/${locale}/gaming`}>{dict.gaming}</Link>
        </nav>
        <div className="lang">
          {locales.map((lng) => (
            <Link key={lng} href={`/${lng}`} className={lng === locale ? 'active' : ''}>
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">© {new Date().getFullYear()} News Hub</footer>
    </div>
  )
}
