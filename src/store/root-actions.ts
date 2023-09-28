import { carouselSlice } from '@/features/carousel/carousel.slice'
import { actions as categoryActions } from '@/features/category/category.slice'
import { filtersSlice } from '@/features/filters/filters.slice'

export const rootActions = {
	...categoryActions,
	...carouselSlice.actions,
	...filtersSlice.actions
}
