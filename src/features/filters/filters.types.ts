export interface TypeProductDataFilters {
	searchTerm?: string
}

export interface IFiltersInitialState {
	isFilterUpdated: boolean
	queryParams: TypeProductDataFilters
}

export interface IFiltersActionsPayload {
	key: keyof TypeProductDataFilters
	value: string
}
