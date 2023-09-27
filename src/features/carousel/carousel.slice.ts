import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICarouselInitialState } from './carousel.types'

const initialState: ICarouselInitialState = {
	selectedItemIndex: 1
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		selectIndex: (state, action: PayloadAction<number>) => {
			state.selectedItemIndex = action.payload
		}
	}
})
