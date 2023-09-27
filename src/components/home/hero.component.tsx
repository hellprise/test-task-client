'use client'

import Image from 'next/image'

import { replaceString } from '@/utils/replace-string'

import { Button } from '@/components/ui/button/button.component'
import { useTranslations } from 'next-intl'
import './hero.scss'

export const Hero = () => {
	// const dict = await getDictionary(locale)
	const t = useTranslations('hero');

	return (
		<section className='hero'>
			<div className='hero__content'>
				<section className='hero__text'>
					<Image src='/images/hero-text-top.png' alt='hero text element #1' width={211} height={75} quality={100} />

					<h1>
						{replaceString(t('title')).map((str, index) => {
							return <span key={index}>{str}</span>
						})}
					</h1>

					<Image src='/images/hero-text-bottom.png' alt='hero text element #2' width={169} height={75} />
				</section>

				<p>
					{t('subtitle')}
				</p>

				<Button className='hero__button' variant='dark'>
					{t('button')}
				</Button>
			</div>

			<div className='hero__image'>
				<Image src='/images/hero.png' alt='Hero' width={683} height={888} />
			</div>
		</section>
	)
}
