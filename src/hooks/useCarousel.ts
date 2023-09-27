import { useTypedSelector } from './useTypedSelector'

export const useCarousel = () => {
	const currentIndex = useTypedSelector(({ carousel }) => carousel)

	return { currentIndex: currentIndex.selectedItemIndex }
}
