'use client'

// import { gql, useQuery } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { CategoriesList } from '@/components/ui/category/list/CategoriesList'

import { useCategory } from '@/hooks/useCategory'
import { useLocale } from '@/hooks/useLocale'

import GET_PRODUCTS from '@/graphql/queries/getProducts.graphql'

import { ProductsResponse } from '@/types/products.interface'

import { Heading } from '../../heading/Heading'
import { Loader } from '../../loader/Loader'
import { Catalog } from '../catalog/Catalog'

import './ProductExplorer.scss'

export const ProductExplorer = () => {
	const { locale } = useLocale()

	const { currentCategory } = useCategory()

	const { loading, error, data } = useQuery<ProductsResponse>(GET_PRODUCTS, {
		variables: {
			category: currentCategory,
			locale
		}
	})

	const t = useTranslations('explorer')

	if (loading) return <Loader />

	if (error) return <p>{error.message}</p>

	return (
		<section className='explorer-wrapper'>
			<Image src='/images/background-element.png' fill alt='background catalog element' />

			<Heading dangerouslySetInnerHTML={{ __html: t.raw('title') }} align='center' />

			<CategoriesList />

			{data && data.products.data.length > 0 ? (
				<Catalog className='explorer-catalog' items={data?.products.data} />
			) : (
				<span className='explorer--not-found'>Products not found</span>
			)}
		</section>
	)
}
