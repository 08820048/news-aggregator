import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/' || pathname === '') {
    const url = request.nextUrl.clone()
    url.pathname = '/zh'
    return NextResponse.redirect(url)
  }

  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`))
  if (!hasLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/zh${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
