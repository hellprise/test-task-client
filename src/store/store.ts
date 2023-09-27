import { carouselSlice } from '@/features/carousel/carousel.slice'
import { filtersSlice } from '@/features/filters/filters.slice'
import { localeSlice } from '@/features/locale/locale.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as categoryReducer } from '../features/category/category.slice'

const reducers = combineReducers({
	category: categoryReducer,
	carousel: carouselSlice.reducer,
	filters: filtersSlice.reducer,
	locale: localeSlice.reducer,
})

export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
