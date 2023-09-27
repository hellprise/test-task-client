'use client'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { convertPrice } from '@/utils/convert-price'

import { IProduct } from '@/types/products.interface'
import { useTranslations } from 'next-intl'
import { Mark } from '../../mark/mark.component'
import './card.scss'

export const ProductCard = ({ item }: { item: IProduct }) => {
	const [isVisible, setIsVisible] = useState(false)

	const cardRef = useRef<HTMLDivElement>(null)

	const t = useTranslations('sectionByCategory');

	useEffect(() => {
		const checkVisibility = () => {
			if (cardRef.current === null) return

			const top = cardRef.current.getBoundingClientRect().top
			const windowHeight = window.innerHeight

			if (top + 100 < windowHeight) setIsVisible(true)
			else setIsVisible(false)
		}

		window.addEventListener('scroll', checkVisibility)
		checkVisibility()

		return () => window.removeEventListener('scroll', checkVisibility)
	}, [])

	return (
		<div
			className={clsx('catalog-card', {
				'catalog-card--visible': isVisible,
			})}
			key={item.id}
			ref={cardRef}
		>
			<section>
				<Mark
					className='catalog-card__mark'
					title={item.attributes.name}
					subtitle={`${t('product.priceFrom')} ${convertPrice(item.attributes.price)}`}
					buttonChildren={<Link href='/'>{t('product.button')}</Link>}
				/>

				{/* <Image src={item.image} alt={item.name} fill /> */}
				<Image src={item.attributes.image.data.attributes.url} alt={item.attributes.name} width={264} height={344} />
			</section>
		</div>
	)
}
