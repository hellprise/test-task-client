import { useTypedSelector } from './useTypedSelector'

export const useCategory = () => {
	const currentCategory = useTypedSelector(({ category }) => category)

	return { currentCategory: currentCategory.category }
}
