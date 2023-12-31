import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
	// uri: 'https://task-strapi.onrender.com/graphql',
	uri: process.env.NEXT_PUBLIC_API_URL,
	cache: new InMemoryCache()
	// ssrMode: typeof window === 'undefined',
})
