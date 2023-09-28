import { Hero } from '@/components/home/Hero'
import { BottomList } from '@/components/ui/bottom-list/BottomList'
import { MovieCarousel } from '@/components/ui/carousel/Carousel'
import { ProductExplorer } from '@/components/ui/product/explorer/ProductExplorer'
import { ListByCategory } from '@/components/ui/product/list-by-category/ListByCategory'

export const Home = async () => {
	return (
		<>
			<Hero />

			<ListByCategory category='iphone' title='iPhone' />

			<ProductExplorer />

			<MovieCarousel />

			<BottomList />
		</>
	)
}
