'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { getFooterData } from '@/data/layout.data'

import { formatExternalLink } from '@/utils/format-external-link'

import './footer.scss'
import { LanguageSelector } from './language-selector/LanguageSelector'

export const Footer = () => {
	const t = useTranslations('footer')

	const footerData = getFooterData(t)

	return (
		<footer className='footer'>
			<nav role='navigation' aria-label='Apple Footer' className='footer-columns'>
				<Column column={footerData.shop_learn} />
				<Column column={footerData.apple_store} />

				<section className='footer-columns__section'>
					<Column column={footerData.for_business} />
					<Column column={footerData.for_education} />
					<Column column={footerData.for_healthcare} />
				</section>

				<Column column={footerData.entertainment} />

				<section className='footer-columns__section'>
					<Column column={footerData.apple_wallet} />
					<Column column={footerData.account} />
				</section>
			</nav>

			<section className='footer-bottom'>
				<p>Copyright © 2023 Apple Inc. All rights reserved.</p>

				<ul className='footer-bottom__links'>
					{footerData.bottomList.map(item => (
						<li key={item.slug}>
							<Link href={formatExternalLink(item.slug)}>{item.name}</Link>
						</li>
					))}
				</ul>

				<LanguageSelector />
			</section>
		</footer>
	)
}

const Column = ({ column }: any) => {
	return (
		<div key={column.id} className='footer-columns__item'>
			<h3>{column.title}</h3>

			<ul>
				{column.items.map((item: any) => (
					<li key={item.slug}>
						<Link href={formatExternalLink(item.slug)}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
