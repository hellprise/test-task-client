export const convertPrice = (price: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'usd',
		minimumFractionDigits: 0,
		useGrouping: false
	}).format(price)
