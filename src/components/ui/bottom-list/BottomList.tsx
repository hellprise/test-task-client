'use client'

import { useQuery } from '@apollo/client'
import Link from 'next/link'

import { useLocale } from '@/hooks/useLocale'

import GET_BOTTOM_LINKS from '@/graphql/queries/getBottomLinks.graphql'

import { Loader } from '../loader/Loader'

import './BottomList.scss'

export const BottomList = () => {
	const { locale } = useLocale()

	const { data, loading, error } = useQuery<BottomListResponse>(GET_BOTTOM_LINKS, {
		variables: {
			locale
		}
	})

	if (loading) return <Loader />

	if (error) return <p>Error: {error.message}</p>

	const list = data && data.linksList.data.attributes.List.Link

	return (
		<section className='bottom-links'>
			<div>
				{list && list.length > 1 ? (
					list.map(item => (
						<Link href={`/${item.slug}`} key={item.id}>
							{item.name}
						</Link>
					))
				) : (
					<span className='bottom-links--not-found'>List of links not found</span>
				)}
			</div>
		</section>
	)
}
