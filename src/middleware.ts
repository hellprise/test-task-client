// import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
// import { i18n } from './i18n-config'
// import { match as matchLocale } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'
// function getLocale(request: NextRequest): string | undefined {
//   const negotiatorHeaders: Record<string, string> = {}
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   )
//   const locale = matchLocale(languages, locales, i18n.defaultLocale)
//   return locale
// }
// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )
//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)
//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//         request.url
//       )
//     )
//   }
// }
// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }
// At the top of this file I create middlware that will be used by Next.js. It's use in Server Components
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'uk'],

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: 'en'
	// localePrefix: 'never',
	// localeDetection: true,
})

export const config = {
	// Skip all paths that should not be internationalized. This example skips
	// certain folders and all pathnames with a dot (e.g. favicon.ico)
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
