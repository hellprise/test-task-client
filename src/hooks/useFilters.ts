import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { TypeProductDataFilters } from '@/features/filters/filters.types'

import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const { replace } = useRouter()

	const { updateQueryParam } = useActions()

	const { isFilterUpdated, queryParams } = useTypedSelector(({ filters }) => filters)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({ key: key as keyof TypeProductDataFilters, value })
		})
	}, [])

	const updateUrl = (key: keyof TypeProductDataFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) newParams.set(key, String(value))
		else newParams.delete(key)

		replace(`${pathname}?${newParams.toString()}`)

		updateQueryParam({ key, value })
	}

	return { isFilterUpdated, queryParams, updateUrl }
}
