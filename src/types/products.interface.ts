// export enum ProductCategory {
// 	All = 'all-products',
// 	iPhone = 'iphone',
// 	iPad = 'ipad',
// 	Mac = 'mac',
// 	Watch = 'watch',
// 	Vision = 'vision',
// 	AirPods = 'airpods',
// 	TVHome = 'tv-home',
// 	Entertainment = 'entertainment',
// 	Accessory = 'accessory',
// }

export interface ProductsResponse {
	products: IProducts
}

export interface IProducts {
	data: IProduct[]
}

export interface IProduct {
	id: string
	attributes: ProductAttributes
}

interface ProductAttributes {
	__typename: string
	slug: string
	name: string
	price: number
	image: Image
	updatedAt: string
}

interface Image {
	__typename: string
	data: { attributes: Attributes }
}

interface Attributes {
	url: string
}
