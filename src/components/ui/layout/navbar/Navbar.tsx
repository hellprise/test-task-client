'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { Icon } from '@/components/ui/icon/Icon'

import { useOutside } from '@/hooks/useOutside'

import { getNavbarData } from '@/data/layout.data'

import { INavbarProps } from './Navbar.interface'
import './Navbar.scss'

export const Navbar: FC<INavbarProps> = ({ className }) => {
	const pathname = usePathname()

	const { isShow, ref, setIsShow } = useOutside(false)

	const t = useTranslations('header')

	const navbarData = getNavbarData(t)

	const toggleOpen = () => setIsShow(prev => !prev)

	return (
		<nav className={clsx('navbar', className)}>
			<ul>
				{navbarData.map((link: any) => {
					return (
						<li
							className={clsx('navbar__item', {
								'navbar__item--active': link.slug === pathname
							})}
							key={link.id}
						>
							{link.slug ? (
								<Link href={link.slug}>{link.name}</Link>
							) : (
								<p ref={ref} role='button' onClick={toggleOpen}>
									<span>{link.name}</span>

									<Icon
										className={clsx('navbar__chevron', {
											'navbar__chevron--active': isShow
										})}
										icon='chevron-down'
									/>
								</p>
							)}

							{link.submenu && (
								<ul
									className={clsx('navbar__submenu', {
										'navbar__submenu--opened': isShow
									})}
								>
									{link.submenu.map((sublink: any) => {
										return (
											<li key={sublink.id}>
												<Link href={sublink.slug}>{sublink.name}</Link>
											</li>
										)
									})}
								</ul>
							)}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
