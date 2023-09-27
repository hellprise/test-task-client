import { useParams } from 'next/navigation'
import { useTypedSelector } from './useTypedSelector'

export const useLocale = () => {
	const locale = useTypedSelector(({ locale }) => locale)

	const params = useParams()

	// if (pathname.includes(locale.locale)) return { locale: locale.locale }
	// else return { locale: 'en', pathname }

	if (params.locale === locale.locale) return { locale: locale.locale }
	else return { locale: params.locale }

	return { locale: locale.locale }
}
