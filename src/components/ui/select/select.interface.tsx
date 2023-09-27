// import { Locale } from '../../../../i18n-config'

export interface ISelectItem {
	key: 'en' | 'uk'
	label: string
}

export interface ISelect {
	data: ISelectItem[]
	// data: typeof i18n.locales
	onChange: (item: ISelectItem) => void
	value?: ISelectItem
	setValue: (item: ISelectItem) => void
	title?: string
}
