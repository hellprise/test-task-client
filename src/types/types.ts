export type Link = {
	id?: number
	name: string
	slug: string
}

export type LinkWithSubmenu = Link & {
	submenu: Link[]
}
