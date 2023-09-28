export const replaceString = (str: string, symbol: string = ' | '): string[] => {
	const strArr = str.split(symbol)

	return strArr
}
