'use client'

import { Icon } from '@/components/ui/icon/icon.component'

import { Select } from '@/components/ui/select/Select'
import { ISelectItem } from '@/components/ui/select/select.interface'
import { SELECT_DATA } from '@/data/select.data'
import { useActions } from '@/hooks/useActions'
import { useLocale } from '@/hooks/useLocale'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import './LanguageSelector.scss'

export const LanguageSelector = () => {
	const { locale } = useLocale()
	const params = useParams()

	const INITIAL_STATE = SELECT_DATA.find(item => item.key === params.locale)

	const [language, setLanguage] = useState<ISelectItem>(INITIAL_STATE as ISelectItem)

	const { switchLocale } = useActions()


	return (
		<section className='language-selector'>
			<Icon icon='planet' />

			<Select
				data={SELECT_DATA}
				value={SELECT_DATA.find(item => item.key === language.key)}
				onChange={(item: ISelectItem) => {
					setLanguage(item)
					switchLocale(item.key)
				}}
				setValue={setLanguage}
			/>
		</section>
	)
}
