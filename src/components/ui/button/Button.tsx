import clsx from 'clsx'
import { FC } from 'react'

import { Icon } from '../icon/Icon'

import { IButtonProps } from './Button.interface'
import './button.scss'

export const Button: FC<IButtonProps> = ({ children, className, icon, onClick, variant = 'transparent', ...props }) => {
	return (
		<button
			onClick={onClick}
			className={clsx('button', className, {
				'button--blur': variant === 'blur',
				'button--dark': variant === 'dark',
				'button--transparent': variant === 'transparent',
				'button--has-icon': icon
			})}
			{...props}
		>
			<span>{children}</span>

			{icon && <Icon icon={icon} />}
		</button>
	)
}
