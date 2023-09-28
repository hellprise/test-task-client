import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useOutside } from '@/hooks/useOutside'

import { Icon } from '../icon/Icon'

import { ISelect, ISelectItem } from './Select.interface'
import './Select.scss'

export function Select({ data, value, setValue, onChange }: ISelect) {
	const { isShow, ref, setIsShow } = useOutside(false)

	const pathName = usePathname()

	const toggleOpen = () => setIsShow(prev => !prev)

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/'
		const segments = pathName.split('/')
		segments[1] = locale
		return segments.join('/')
	}

	const toggleSelectItem = (item: ISelectItem) => {
		onChange(item)
		setIsShow(false)
	}

	return (
		<section
			role='combobox'
			aria-haspopup='listbox'
			aria-expanded='true'
			aria-owns='language-selector'
			className='select'
			ref={ref}
		>
			<button onClick={toggleOpen}>
				<p>{value?.label}</p>

				<Icon
					className={clsx('select__icon', {
						'select__icon--active': isShow
					})}
				/>
			</button>

			<ul
				className={clsx('select__options', {
					'select__options--active': isShow
				})}
			>
				{data.map(item => (
					<li
						onClick={() => toggleSelectItem(item)}
						key={item.key?.toString()}
						className={clsx('select__item', {
							'select__item--active': item.key === value?.key
						})}
					>
						<Link href={redirectedPathName(item.key)}>{item.label}</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
