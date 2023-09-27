'use client'

import GET_PRODUCTS from '@/graphql/queries/getProducts.graphql'
import { ProductsResponse } from '@/types/products.interface'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from '../../button/button.component'
import { Heading } from '../../heading/heading.component'
import { Loader } from '../../loader/Loader'
import { Catalog } from '../catalog/catalog.component'
import { IListByCategoryProps } from './ListByCategory.interface'

import { useLocale } from '@/hooks/useLocale'
import { useTranslations } from 'next-intl'
import './ListByCategory.scss'

export const ListByCategory: FC<IListByCategoryProps> = ({ category, title }) => {
	const { locale } = useLocale()

	const { data, loading, error } = useQuery<ProductsResponse>(GET_PRODUCTS, {
		variables: {
			category: category,
			locale,
		},
	})


	const t = useTranslations('sectionByCategory');

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
