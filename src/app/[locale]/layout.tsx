import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'

import { MainProvider } from '@/providers/MainProvider'

// import { Locale, i18n } from '../../../i18n-config'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import './styles/globals.scss'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin-ext'],
	display: 'swap'
})

// export async function generateStaticParams() {
// 	return i18n.locales.map(locale => ({ locale: locale }))
// }
export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'uk' }]
}

export const metadata: Metadata = {
	title: 'Test task',
	description: 'Test task for the Frontend Developer position'
}

export default async function RootLayout({
	children,
	params: { locale }
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	let messages
	try {
		messages = (await import(`../../../dictionaries/${locale}.json`)).default
	} catch (error) {
		notFound()
	}

	return (
		<MainProvider>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<html lang={locale}>
					<body className={roboto.className}>
						<Header />
						<main>{children}</main>
						<Footer />
					</body>
				</html>
			</NextIntlClientProvider>
		</MainProvider>
	)
}
