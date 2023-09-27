import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFiltersActionsPayload, IFiltersInitialState } from './filters.types'

const initialState: IFiltersInitialState = {
	isFilterUpdated: false,
	queryParams: {
		searchTerm: '',
	},
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
			const { key, value } = action.payload

			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		},
	},
})
