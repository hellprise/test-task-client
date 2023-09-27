'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Mark } from '../mark/mark.component'

import { useQuery } from '@apollo/client'

import GET_CAROUSEL from '@/graphql/queries/getCarousel.graphql'

import { useActions } from '@/hooks/useActions'
import { useCarousel } from '@/hooks/useCarousel'
import { useLocale } from '@/hooks/useLocale'
import { CarouselResponse } from '@/types/carousel.interface'
import { useTranslations } from 'next-intl'
import { Loader } from '../loader/Loader'
import './carousel.scss'

export const MovieCarousel = () => {
	const { locale } = useLocale()

	const { currentIndex } = useCarousel()

	const { selectIndex } = useActions()

	const { data, loading, error } = useQuery<CarouselResponse>(GET_CAROUSEL, {
		variables: {
			locale,
		},
	})

	const t = useTranslations('carousel')

	const toggleActiveSlide = (id: number) => {
		if (id !== currentIndex) {
			selectIndex(id)
		} else return
	}

	if (loading) return <Loader />

	if (error) return <p>{error.message}</p>

	return (
		<section role='slider' className='carousel'>
			{data && data.carousel.data.attributes.Slide.length > 0 ? (
				data?.carousel.data.attributes.Slide.map((slide, index) => (
					<div
						key={slide.id}
						aria-hidden={index + 1 !== currentIndex}
						aria-labelledby={`carousel-item-${index + 1}`}
						tabIndex={index + 1 !== currentIndex ? -1 : undefined}
						role='button'
						onClick={() => toggleActiveSlide(index + 1)}
						className={clsx('carousel-item', {
							'carousel-item--active': index + 1 === currentIndex,
						})}
					>
						<Mark
							className='carousel-item__mark'
							title={slide.title}
							subtitle={slide.category}
							icon='play'
							buttonChildren={<Link href={slide.slug}>{t('button')}</Link>}
						/>

						<h2 className='carousel-item__title'>{slide.title}</h2>

						<Image
							src={slide.image.data.attributes.url}
							alt={slide.title}
							fill
							quality={100}
							// loading='lazy'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
						<section className='carousel-item--blur' />
					</div>
				))
			) : (
				<span className='carousel--not-found'>Carousel not found</span>
			)}
		</section>
	)
}
