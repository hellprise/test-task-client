interface BottomListResponse {
	linksList: LinksList
}

interface LinksList {
	data: Data
}

interface Data {
	attributes: Attributes
}

interface Attributes {
	List: List
}

interface List {
	Link: Link[]
}

interface Link {
	id: string
	name: string
	slug: string
}
