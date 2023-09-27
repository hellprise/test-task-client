'use client'

import { ApolloProvider } from '@apollo/client'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { apolloClient } from '@/api/apollo-client'
import { store } from '@/store/store'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Provider store={store}>
				<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
			</Provider>
		</>
	)
}
