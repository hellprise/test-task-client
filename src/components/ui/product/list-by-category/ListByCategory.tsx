'use client'

import { useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useLocale } from '@/hooks/useLocale'

import GET_PRODUCTS from '@/graphql/queries/getProducts.graphql'

import { ProductsResponse } from '@/types/products.interface'

import { Button } from '../../button/Button'
import { Heading } from '../../heading/Heading'
import { Loader } from '../../loader/Loader'
import { Catalog } from '../catalog/Catalog'

import { IListByCategoryProps } from './ListByCategory.interface'
import './ListByCategory.scss'

export const ListByCategory: FC<IListByCategoryProps> = ({ category, title }) => {
	const { locale } = useLocale()

	const { data, loading, error } = useQuery<ProductsResponse>(GET_PRODUCTS, {
		variables: {
			category: category,
			locale
		}
	})

	const t = useTranslations('sectionByCategory')

	if (loading) return <Loader />

	if (error) return <p>{error.message}</p>

	return (
		<div className='list-wrapper'>
			<section className='list-header'>
				<Heading>
					{t('title')} <span>{title}</span>
				</Heading>

				<Button variant='transparent' icon='arrow-right'>
					<Link href='/'>{t('button')}</Link>
				</Button>
			</section>

			<Image src='/images/background-element.png' fill alt='background catalog element' />

			{data && data.products.data.length > 0 ? (
				<Catalog items={data?.products.data} />
			) : (
				<span className='list--not-found'>Products not found</span>
			)}
		</div>
	)
}
