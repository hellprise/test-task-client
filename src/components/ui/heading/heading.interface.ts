import { DetailedHTMLProps } from 'react'

type HeadingAlign = 'left' | 'center' | 'right'

export interface IHeadingProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	align?: HeadingAlign
}
