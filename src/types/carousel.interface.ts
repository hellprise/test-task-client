export interface CarouselResponse {
	carousel: Carousel
}

interface Carousel {
	data: Data
}

interface Data {
	attributes: Attributes
}

interface Attributes {
	Slide: Slide[]
}

interface Slide {
	id: string
	title: string
	category: string
	slug: string
	image: Image
}

interface Image {
	data: { attributes: ImageAttributes }
}

interface ImageAttributes {
	url: string
}
