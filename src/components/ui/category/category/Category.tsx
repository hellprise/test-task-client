// import { ICategory } from './category.interface'
import clsx from 'clsx'

import { useActions } from '@/hooks/useActions'
import { useCategory } from '@/hooks/useCategory'

import { ICategory } from '@/types/categories.interface'

import '../list/CategoriesList.scss'

export const Category = ({ category }: { category: ICategory }) => {
	const { currentCategory } = useCategory()

	// TODO: sort in redux by category slug
	const { toggleCategory } = useActions()

	return (
		<p
			role='button'
			onClick={() => toggleCategory(category.attributes.slug)}
			className={clsx('categories-list__item', {
				'categories-list__item--active': category.attributes.slug === currentCategory
			})}
			key={category.id}
		>
			{category.attributes.name}
		</p>
	)
}
