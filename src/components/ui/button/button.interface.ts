import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { IconName } from '../icon/icon.interface'

type ButtonVariant = 'blur' | 'dark' | 'transparent'

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: ButtonVariant
	icon?: IconName
}
