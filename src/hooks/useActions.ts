import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { rootActions } from '../store/root-actions'

import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}
