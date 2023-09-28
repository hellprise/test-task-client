import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { IconName } from '../icon/Icon.interface'

type ButtonVariant = 'blur' | 'dark' | 'transparent'

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: ButtonVariant
	icon?: IconName
}
