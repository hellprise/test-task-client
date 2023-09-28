import clsx from 'clsx'

import { IProduct } from '@/types/products.interface'

import { ProductCard } from '../card/Card'

import './catalog.scss'

export const Catalog = ({ items, className }: { items: IProduct[]; className?: string }) => {
	return (
		<section className={clsx('catalog', className)}>
			{items.map(item => (
				<ProductCard item={item} key={item.id} />
			))}
		</section>
	)
}
