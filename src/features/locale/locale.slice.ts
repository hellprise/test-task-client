import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { Locale } from '../../../i18n-config'
import { ILocaleInitialState } from './locale.types'

const initialState: ILocaleInitialState = {
	locale: 'en',
}

export const localeSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		switchLocale: (state, action: PayloadAction<'en' | 'uk'>) => {
			state.locale = action.payload
		},
	},
})
