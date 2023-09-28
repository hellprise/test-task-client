import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Navbar } from '@/components/ui/layout/navbar/Navbar'

import '../header.scss'
import { Search } from '../search/Search'

import './MobileMenu.scss'

export const MobileMenu = () => {
	const [isShow, setIsShow] = useState(false)
	const [currentWidth, setCurrentWidth] = useState(0)

	const toggleShow = () => setIsShow(prev => !prev)

	useEffect(() => {
		if (isShow) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'unset'
	}, [isShow])

	useEffect(() => {
		setCurrentWidth(window.innerWidth)

		window.addEventListener('resize', () => setCurrentWidth(window.innerWidth))
	}, [])

	return (
		currentWidth < 1024 && (
			<>
				<Icon onClick={toggleShow} className='mobile-menu__icon' icon='hamburger' />

				<section
					className={clsx('mobile-menu', {
						'mobile-menu--opened': isShow
					})}
				>
					<div className='mobile-menu__head'>
						<Image className='header__logo' src='/images/apple-logo.svg' alt='logo' width={48} height={48} />

						<Icon onClick={toggleShow} className='mobile-menu__close' icon='close' />
					</div>

					<Navbar className='mobile-menu__nav' />

					<Search className='mobile-search' />
				</section>
			</>
		)
	)
}
