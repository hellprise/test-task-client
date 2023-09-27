import clsx from 'clsx'
import { FC } from 'react'
import { IHeadingProps } from './heading.interface'

import './heading.scss'

export const Heading: FC<IHeadingProps> = ({ children, className, align = 'left', ...props }) => {
	return (
		<h1
			className={clsx('heading', className, {
				'heading--left': align === 'left',
				'heading--center': align === 'center',
			})}
			{...props}
		>
			{children}
		</h1>
	)
}
