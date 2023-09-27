'use client'

import Image from 'next/image'

import { Navbar } from '../../../../components/ui/layout/navbar/Navbar'
import './header.scss'
import { MobileMenu } from './mobile/MobileMenu'
import { Search } from './search/Search'

export const Header = () => {
	return (
		<header className='header'>
			<MobileMenu />

			<div className='header-content'>
				<Navbar />

				<Image className='header__logo' src='/images/apple-logo.svg' alt='logo' width={48} height={48} />

				<Search />
			</div>
		</header>
	)
}
