import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { carouselSlice } from '@/features/carousel/carousel.slice'
import { filtersSlice } from '@/features/filters/filters.slice'

import { reducer as categoryReducer } from '../features/category/category.slice'

const reducers = combineReducers({
	category: categoryReducer,
	carousel: carouselSlice.reducer,
	filters: filtersSlice.reducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
