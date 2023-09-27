export const formatExternalLink = (link: string) => {
	if (link.startsWith('https')) return `https://${link}`

	return `/${link}`
}
