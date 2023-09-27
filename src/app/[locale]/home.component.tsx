
import { Hero } from '@/components/home/hero.component'
import { BottomList } from '@/components/ui/bottom-list/BottomList'
import { MovieCarousel } from '@/components/ui/carousel/Carousel'
import { ProductExplorer } from '@/components/ui/product/explorer/product-explorer.component'
import { ListByCategory } from '@/components/ui/product/list-by-category/ListByCategory'


export const Home = async () => {
	// TODO: remove locale from redux if not needed
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
