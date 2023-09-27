import { FC, ReactNode } from 'react'

import { Button } from '../button/button.component'
import { IconName } from '../icon/icon.interface'

import './mark.scss'

interface IMarkProps {
	title: string
	subtitle: string
	buttonChildren: ReactNode
	icon?: IconName
	className?: string
}

export const Mark: FC<IMarkProps> = ({ title, subtitle, icon, className, buttonChildren }) => {
	return (
		<div className={className}>
			<section className='mark__info'>
				<h3>{title}</h3>

				<p>{subtitle}</p>
			</section>

			<section className='mark__btn'>
				<Button className='self-end' icon={icon} variant='dark'>
					{buttonChildren}
				</Button>
			</section>
		</div>
	)
}
