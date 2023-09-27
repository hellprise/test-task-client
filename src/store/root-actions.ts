import { carouselSlice } from '@/features/carousel/carousel.slice'
import { actions as categoryActions } from '@/features/category/category.slice'
import { filtersSlice } from '@/features/filters/filters.slice'
import { localeSlice } from '@/features/locale/locale.slice'

export const rootActions = {
	...categoryActions,
	...carouselSlice.actions,
	...filtersSlice.actions,
	...localeSlice.actions,
}
