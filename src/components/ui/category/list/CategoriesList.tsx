import { useQuery } from '@apollo/client'

import { useLocale } from '@/hooks/useLocale'

import GET_CATEGORIES from '@/graphql/queries/getCategories.graphql'

import { CategoriesResponse } from '@/types/categories.interface'

import { Loader } from '../../loader/Loader'
import { Category } from '../category/Category'

import './CategoriesList.scss'

export const CategoriesList = () => {
	const { locale } = useLocale()

	const { loading, error, data } = useQuery<CategoriesResponse>(GET_CATEGORIES, {
		variables: {
			locale
		}
	})

	const categories = data?.categories.data

	if (loading) return <Loader />

	if (error) return <p>{error.message}</p>

	return (
		<section className='categories-list'>
			<div>
				{categories && categories?.length > 1 ? (
					categories.map(category => <Category category={category} key={category.id} />)
				) : (
					<span className='categories-list--not-found'>Categories not found</span>
				)}
			</div>
		</section>
	)
}
