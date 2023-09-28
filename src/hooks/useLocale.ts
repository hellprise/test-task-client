import { useParams } from 'next/navigation'

export const useLocale = () => {
	const params = useParams()

	return { locale: params.locale }
}
