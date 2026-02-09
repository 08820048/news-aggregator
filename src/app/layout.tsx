import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: '资讯整合平台',
  description: '全球资讯聚合平台',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body>
        <div className="container">
          <header className="header">
            <Link href="/" className="brand">资讯整合平台</Link>
            <nav className="nav">
              <Link href="/tech">科技</Link>
              <Link href="/ai">AI</Link>
              <Link href="/finance">金融</Link>
              <Link href="/gaming">游戏</Link>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">© {new Date().getFullYear()} News Hub</footer>
        </div>
      </body>
    </html>
  )
}
