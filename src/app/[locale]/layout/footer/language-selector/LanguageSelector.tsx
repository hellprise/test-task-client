'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Select } from '@/components/ui/select/Select'
import { ISelectItem } from '@/components/ui/select/Select.interface'

import { SELECT_DATA } from '@/data/select.data'

import './LanguageSelector.scss'

export const LanguageSelector = () => {
	const params = useParams()

	const INITIAL_STATE = SELECT_DATA.find(item => item.key === params.locale)

	const [language, setLanguage] = useState<ISelectItem>(INITIAL_STATE as ISelectItem)

	return (
		<section className='language-selector'>
			<Icon icon='planet' />

			<Select
				data={SELECT_DATA}
				value={SELECT_DATA.find(item => item.key === language.key)}
				onChange={(item: ISelectItem) => setLanguage(item)}
				setValue={setLanguage}
			/>
		</section>
	)
}
