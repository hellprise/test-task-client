export function getNavbarData(t: any) {
	return [
		{
			id: 1,
			// name: 'Home',
			name: t('home.name'),
			slug: '/'
		},
		{
			id: 2,
			name: t('products.name'),
			submenu: [
				{
					id: 1,
					// name: 'Product 1',
					name: t('products.submenu.name1'),
					slug: '/product-1'
				},
				{
					id: 2,
					// name: 'Product 2',
					name: t('products.submenu.name2'),
					slug: '/product-2'
				},
				{
					id: 3,
					// name: 'Product 3',
					name: t('products.submenu.name3'),
					slug: '/product-3'
				},
				{
					id: 4,
					// name: 'Product 4',
					name: t('products.submenu.name4'),
					slug: '/product-4'
				}
			]
		},
		{
			id: 3,
			name: t('entertainment.name'),
			slug: '/entertainment'
		},
		{
			id: 4,
			name: t('support.name'),
			slug: '/support'
		}
	]
}

export function getFooterData(t: any) {
	return {
		shop_learn: {
			// title: 'Shop & Learn',
			title: t('shop_learn.title'),
			items: [
				{
					// name: 'Store',
					name: t('shop_learn.items.name1'),
					slug: 'store'
				},
				{
					// name: 'Mac',
					name: t('shop_learn.items.name2'),
					slug: 'mac'
				},
				{
					// name: 'iPad',
					name: t('shop_learn.items.name3'),
					slug: 'ipad'
				},
				{
					// name: 'iPhone',
					name: t('shop_learn.items.name4'),
					slug: 'iphone'
				},
				{
					// name: 'Watch',
					name: t('shop_learn.items.name5'),
					slug: 'watch'
				},
				{
					// name: 'Vision',
					name: t('shop_learn.items.name6'),
					slug: 'vision'
				},
				{
					// name: 'AirPods',
					name: t('shop_learn.items.name7'),
					slug: 'airpods'
				},
				{
					// name: 'TV & Home',
					name: t('shop_learn.items.name8'),
					slug: 'tv'
				},
				{
					// name: 'Airtag',
					name: t('shop_learn.items.name9'),
					slug: 'airtag'
				},
				{
					// name: 'Accessories',
					name: t('shop_learn.items.name10'),
					slug: 'accessories'
				},
				{
					// name: 'Gift Cards',
					name: t('shop_learn.items.name11'),
					slug: 'gift-cards'
				}
			]
		},
		apple_store: {
			// title: 'Apple Store',
			title: t('apple_store.title'),
			items: [
				{
					// name: 'Find a Store',
					name: t('apple_store.items.name1'),
					slug: 'find-store'
				},
				{
					// name: 'Genius Bar',
					name: t('apple_store.items.name2'),
					slug: 'genius-bar'
				},
				{
					// name: 'Today at Apple',
					name: t('apple_store.items.name3'),
					slug: 'today-at-apple'
				},
				{
					// name: 'Apple Camp',
					name: t('apple_store.items.name4'),
					slug: 'apple-camp'
				},
				{
					// name: 'Apple Store App',
					name: t('apple_store.items.name5'),
					slug: 'apple-store-app'
				},
				{
					// name: 'Certified Refurbished',
					name: t('apple_store.items.name6'),
					slug: 'certified-refurbished'
				},
				{
					// name: 'Apple Trade In',
					name: t('apple_store.items.name7'),
					slug: 'apple-trade-in'
				},
				{
					// name: 'Financing',
					name: t('apple_store.items.name8'),
					slug: 'financing'
				},
				{
					// name: 'Carrier Deals at Apple',
					name: t('apple_store.items.name9'),
					slug: 'carrier-deals-at-apple'
				},
				{
					// name: 'Order Status',
					name: t('apple_store.items.name10'),
					slug: 'order-status'
				},
				{
					// name: 'Shopping Help',
					name: t('apple_store.items.name11'),
					slug: 'shopping-help'
				}
			]
		},
		for_business: {
			// title: 'For Business',
			title: t('for_business.title'),
			items: [
				{
					// name: 'Apple and Business',
					name: t('for_business.items.name1'),
					slug: 'apple-and-business'
				},
				{
					// name: 'Shop for Business',
					name: t('for_business.items.name2'),
					slug: 'shop-for-business'
				}
			]
		},
		for_education: {
			// title: 'For Education',
			title: t('for_education.title'),
			items: [
				{
					// name: 'Apple and Education',
					name: t('for_education.items.name1'),
					slug: 'apple-and-education'
				},
				{
					// name: 'Shop for K-12',
					name: t('for_education.items.name2'),
					slug: 'shop-for-k-12'
				},
				{
					// name: 'Shop for College',
					name: t('for_education.items.name3'),
					slug: 'shop-for-college'
				}
			]
		},
		for_healthcare: {
			// title: 'For Healthcare',
			title: t('for_healthcare.title'),
			items: [
				{
					// name: 'Apple in Healthcare',
					name: t('for_healthcare.items.name1'),
					slug: 'apple-in-healthcare'
				},
				{
					// name: 'Health on Apple Watch',
					name: t('for_healthcare.items.name2'),
					slug: 'health-on-apple-watch'
				},
				{
					// name: 'Health Records on iPhone',
					name: t('for_healthcare.items.name3'),
					slug: 'health-records-on-iphone'
				}
			]
		},
		entertainment: {
			// title: 'Entertainment',
			title: t('entertainment.title'),
			items: [
				{
					// name: 'Apple One',
					name: t('entertainment.items.name1'),
					slug: 'apple-one'
				},
				{
					// name: 'Apple TV+',
					name: t('entertainment.items.name2'),
					slug: 'apple-tv'
				},
				{
					// name: 'Apple Music',
					name: t('entertainment.items.name3'),
					slug: 'apple-music'
				},
				{
					// name: 'Apple Arcade',
					name: t('entertainment.items.name4'),
					slug: 'apple-arcade'
				},
				{
					// name: 'Apple Fitness+',
					name: t('entertainment.items.name5'),
					slug: 'apple-fitness'
				},
				{
					// name: 'Apple News+',
					name: t('entertainment.items.name6'),
					slug: 'apple-news'
				},
				{
					// name: 'Apple Podcasts',
					name: t('entertainment.items.name7'),
					slug: 'apple-podcasts'
				},
				{
					// name: 'Apple Books',
					name: t('entertainment.items.name8'),
					slug: 'apple-books'
				},
				{
					// name: 'App Store',
					name: t('entertainment.items.name9'),
					slug: 'app-store'
				}
			]
		},
		apple_wallet: {
			// title: 'Apple Wallet',
			title: t('apple_wallet.title'),
			items: [
				{
					// name: 'Wallet',
					name: t('apple_wallet.items.name1'),
					slug: 'wallet'
				},
				{
					// name: 'Apple Card',
					name: t('apple_wallet.items.name2'),
					slug: 'apple-card'
				},
				{
					// name: 'Apple Pay',
					name: t('apple_wallet.items.name3'),
					slug: 'apple-pay'
				},
				{
					// name: 'Apple Cash',
					name: t('apple_wallet.items.name4'),
					slug: 'apple-cash'
				}
			]
		},
		account: {
			// title: 'Account',
			title: t('account.title'),
			items: [
				{
					// name: 'Manage Your Apple ID',
					name: t('account.items.name1'),
					slug: 'manage-your-apple-id'
				},
				{
					// name: 'Apple Store Account',
					name: t('account.items.name2'),
					slug: 'apple-store-account'
				},
				{
					// name: 'iCloud.com',
					name: t('account.items.name3'),
					slug: 'https://icloud.com'
				}
			]
		},
		bottomList: [
			{
				id: 1,
				// name: 'Privacy Policy',
				name: t('bottomList.name1'),
				slug: 'privacy-policy'
			},
			{
				id: 2,
				// name: 'Terms of Use',
				name: t('bottomList.name2'),
				slug: 'terms-of-use'
			},
			{
				id: 3,
				// name: 'Sales and Refunds',
				name: t('bottomList.name3'),
				slug: 'sales-and-refunds'
			},
			{
				id: 4,
				// name: 'Legal',
				name: t('bottomList.name4'),
				slug: 'legal'
			},
			{
				id: 5,
				// name: 'Site Map',
				name: t('bottomList.name5'),
				slug: 'site-map'
			}
		]
	}
}
