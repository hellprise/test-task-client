import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICategoryInitialState, INITIAL_CATEGORY } from './category.types'

const initialState: ICategoryInitialState = {
	category: INITIAL_CATEGORY
}

export const favoritesSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		toggleCategory: (state, { payload: category }: PayloadAction<string>) => {
			state.category = category
		}
	}
})

export const { actions, reducer } = favoritesSlice
