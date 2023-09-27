import { ChangeEvent, FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button/button.component'
import { Icon } from '@/components/ui/icon/icon.component'
import { Loader } from '@/components/ui/loader/Loader'
import GET_PRODUCTS_BY_SEARCH from '@/graphql/queries/getProductsBySearch.graphql'
import { useLocale } from '@/hooks/useLocale'
import { useOutside } from '@/hooks/useOutside'
import { IProduct, ProductsResponse } from '@/types/products.interface'
import { convertPrice } from '@/utils/convert-price'
import { useLazyQuery } from '@apollo/client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import '../header.scss'

export const Search: FC<{ className: string }> = ({ className }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState<IProduct[] | []>([])

	const { locale } = useLocale()

	// const debouncedSearchValue = useDebounce(searchTerm, 1000)

	// const [getSearchProducts, { loading, error, data }] = useLazyQuery<ProductsResponse>(GET_PRODUCTS_BY_SEARCH, {
	// 	variables: {
	// 		search: debouncedSearchValue,
	// 	},
	// })

	// const { data, loading, error } = useQuery<ProductsResponse>(GET_PRODUCTS_BY_SEARCH, {
	// 	variables: {
	// 		category: 'all-products',
	// 		search: debouncedSearchValue,
	// 	},
	// })

	// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setSearchTerm(e.target.value)

	// 	if (e.target.value.length > 0) {
	// 		getSearchProducts()

	// 		if (data?.products.data) setSearchResults(data?.products.data)
	// 	} else {
	// 		setSearchResults([])
	// 	}
	// }

	const [getSearchProducts, { loading, error, data }] = useLazyQuery<ProductsResponse>(GET_PRODUCTS_BY_SEARCH)

	const { isShow, ref, setIsShow } = useOutside(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setSearchTerm(value)
		setIsShow(true)

		if (value === '') {
			setSearchResults([])
			return
		}

		setTimeout(() => {
			getSearchProducts({ variables: { search: value, locale } })
		}, 1000)
	}

	useEffect(() => {
		if (data) {
			setSearchResults(data.products.data)
		}
	}, [data])

	if (error) return <p>{error.message}</p>

	return (
		<section ref={ref} className={clsx('header__right-col', className)}>
			<div className='search-wrapper'>
				<input placeholder='Search' onChange={handleChange} />
				<Icon icon='search' />

				<section
					className={clsx('search-dropdown', {
						'search-dropdown--opened': searchTerm.length > 0 && isShow,
					})}
					role='dialog'
				>
					{loading && <Loader />}

					{data && data.products.data.length > 0 ? (
						<section>
							{searchResults.map(product => (
								<Link href={product.attributes.slug} key={product.id}>
									<Image
										src={product.attributes.image.data.attributes.url}
										alt={product.attributes.name}
										width={50}
										height={50}
									/>

									<h3>{product.attributes.name}</h3>
									<p>{convertPrice(product.attributes.price)}</p>
								</Link>
							))}
						</section>
					) : (
						<span className='search-dropdown--not-found'>Products not found</span>
					)}
				</section>
			</div>

			<Button variant='blur'>
				<Icon icon='bag' />
			</Button>

			<Button variant='blur'>
				<Icon icon='person' />
			</Button>
		</section>
	)
}
