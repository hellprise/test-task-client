'use client'

// import { gql, useQuery } from '@apollo/client'
import Image from 'next/image'

import { CategoriesList } from '../../category/list/categories-list.component'
import { Catalog } from '../catalog/catalog.component'

import { Heading } from '../../heading/heading.component'

import GET_PRODUCTS from '@/graphql/queries/getProducts.graphql'

import { useCategory } from '@/hooks/useCategory'
import { useLocale } from '@/hooks/useLocale'
import { ProductsResponse } from '@/types/products.interface'
import { useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import { Loader } from '../../loader/Loader'
import './product-explorer.scss'

export const ProductExplorer = () => {
	const { locale } = useLocale()

	const { currentCategory } = useCategory()

	const { loading, error, data } = useQuery<ProductsResponse>(GET_PRODUCTS, {
		variables: {
			category: currentCategory,
			locale,
		},
	})

	const t = useTranslations('explorer')

	if (loading) return <Loader />

	if (error) return <p>{error.message}</p>

	return (
		<section className='explorer-wrapper'>
			<Image src='/images/background-element.png' fill alt='background catalog element' />

			<Heading dangerouslySetInnerHTML={{__html: t.raw('title')}} align='center' />

			<CategoriesList />

			{data && data.products.data.length > 0 ? (
				<Catalog className='explorer-catalog' items={data?.products.data} />
			) : (
				<span className='explorer--not-found'>Products not found</span>
			)}
		</section>
	)
}
