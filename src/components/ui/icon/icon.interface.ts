import { SVGAttributes } from 'react'

export type IconName = 'chevron-down' | 'search' | 'bag' | 'person' | 'arrow-right' | 'play' | 'planet' | 'hamburger' | 'close'

export interface IIconProps extends SVGAttributes<SVGElement> {
	icon?: IconName
}
