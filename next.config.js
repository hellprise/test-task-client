/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL
	},
	images: {
		domains: ['res.cloudinary.com']
	},
	webpack(config) {
		// config.module.rules.push({
		// 	test: /\.svg$/i,
		// 	issuer: /\.[jt]sx?$/,
		// 	use: ['@svgr/webpack'],
		// })

		config.module.rules.push({
			test: /\.(graphql|gql)/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader'
		})

		return config
	}
}

module.exports = nextConfig
