export interface ShoeInterface {
	id: string
	title: string
	colorsAvailable: {
		title: string
		color: { name: string; color: string; link: string }[]
	}[]
	color: string
	sizes: number[]
	line: string
	stars: number
	commnets: number
	price: number
	pricePrev?: number
	urlImg: string
	urlPageImg: string
	cant: number
}
const getShoesItems = () => {
	const data: ShoeInterface[] = [
		{
			// 1
			id: 'axolo-lin',
			cant: 1,
			color: 'beige',
			title: 'AXOLO LIN BEIGE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Beige',
							color: '#e6dac6',
							link: 'beige',
						},
						{
							name: 'Camel',
							color: '#bf8a3d',
							link: 'camel',
						},
						{
							name: 'Vert Brun',
							color: '#251e18',
							link: 'vert-brun',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Rose',
							color: '#e44d95',
							link: 'rose',
						},
						{
							name: 'Turquoise',
							color: '#28acea',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Lin',
			stars: 5,
			commnets: 12,
			price: 165.0,
			pricePrev: undefined,
			urlImg: '/shoes/AXOLO LIN BEIGE.avif',
			urlPageImg: '/shoes/AXOLO LIN BEIGE-item.avif',
		},
		{
			// 2
			id: 'axolo-lin',
			cant: 1,
			color: 'camel',
			title: 'AXOLO LIN VERT-BRUN',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Beige',
							color: '#e6dac6',
							link: 'beige',
						},
						{
							name: 'Camel',
							color: '#bf8a3d',
							link: 'camel',
						},
						{
							name: 'Vert Brun',
							color: '#251e18',
							link: 'vert-brun',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Rose',
							color: '#e44d95',
							link: 'rose',
						},
						{
							name: 'Turquoise',
							color: '#28acea',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Lin',
			price: 165.0,
			pricePrev: 175.0,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/AXOLO LIN VERT-BRUN.avif',
			urlPageImg: '/shoes/AXOLO LIN VERT-BRUN-page.avif',
		},
		{
			// 3
			id: 'axolo-lin',
			cant: 1,
			color: 'vert-brun',
			title: 'AXOLO LIN CAMEL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Beige',
							color: '#e6dac6',
							link: 'beige',
						},
						{
							name: 'Camel',
							color: '#bf8a3d',
							link: 'camel',
						},
						{
							name: 'Vert Brun',
							color: '#251e18',
							link: 'vert-brun',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Rose',
							color: '#e44d95',
							link: 'rose',
						},
						{
							name: 'Turquoise',
							color: '#28acea',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Lin',
			price: 165.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/AXOLO LIN CAMEL.avif',
			urlPageImg: '/shoes/axolor-lin-camel-page.avif',
		},
		{
			// 4
			id: 'axolo-lin',
			cant: 1,
			color: 'turquoise',
			title: 'AXOLO LIN TURQUOISE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Beige',
							color: '#e6dac6',
							link: 'beige',
						},
						{
							name: 'Camel',
							color: '#bf8a3d',
							link: 'camel',
						},
						{
							name: 'Vert Brun',
							color: '#251e18',
							link: 'vert-brun',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Rose',
							color: '#e44d95',
							link: 'rose',
						},
						{
							name: 'Turquoise',
							color: '#28acea',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Lin',
			price: 165.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/AXOLO LIN TURQUOISE.avif',
			urlPageImg: '/shoes/axolo-lin-turqouise-page.avif',
		},
		{
			// 5
			id: 'axolo-lin',
			cant: 1,
			color: 'rose',
			title: 'AXOLO LIN ROSE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Beige',
							color: '#e6dac6',
							link: 'beige',
						},
						{
							name: 'Camel',
							color: '#bf8a3d',
							link: 'camel',
						},
						{
							name: 'Vert Brun',
							color: '#251e18',
							link: 'vert-brun',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Rose',
							color: '#e44d95',
							link: 'rose',
						},
						{
							name: 'Turquoise',
							color: '#28acea',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Lin',
			price: 165.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/AXOLO LIN ROSE.avif',
			urlPageImg: '/shoes/axolor-lin-rose-page.avif',
		},
		{
			// 6 koto
			id: 'koto',
			cant: 1,
			color: 'noir',
			title: 'KOTO NOIR',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Noir', color: '#000', link: 'noir' },
						{ name: 'Blanc', color: '#fff', link: 'blanc' },
						{
							name: 'Denim',
							color: 'rgb(77, 103, 139)',
							link: 'denim',
						},
						{
							name: 'Kaki',
							color: 'rgb(148, 129, 43)',
							link: 'kaki',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Jaune', color: 'rgb(229, 232, 103)', link: 'jaune' },
						{
							name: 'Turquoise',
							color: 'rgb(25, 206, 235)',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Coton recyclé',
			price: 135.0,
			pricePrev: 145.0,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/KOTO NOIR.avif',
			urlPageImg: '/shoes/koto-noir-page.avif',
		},
		{
			id: 'koto',
			cant: 1,
			color: 'blanc',
			title: 'KOTO BLANC',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Noir', color: '#000', link: 'noir' },
						{ name: 'Blanc', color: '#fff', link: 'blanc' },
						{
							name: 'Denim',
							color: 'rgb(77, 103, 139)',
							link: 'denim',
						},
						{
							name: 'Kaki',
							color: 'rgb(148, 129, 43)',
							link: 'kaki',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Jaune', color: 'rgb(229, 232, 103)', link: 'jaune' },
						{
							name: 'Turquoise',
							color: 'rgb(25, 206, 235)',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Coton recyclé',
			price: 135.0,
			pricePrev: 145.0,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/KOTO BLANC.avif',
			urlPageImg: '/shoes/koto-blanc-page.avif',
		},
		{
			id: 'koto',
			cant: 1,
			color: 'denim',
			title: 'KOTO DENIM',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Noir', color: '#000', link: 'noir' },
						{ name: 'Blanc', color: '#fff', link: 'blanc' },
						{
							name: 'Denim',
							color: 'rgb(77, 103, 139)',
							link: 'denim',
						},
						{
							name: 'Kaki',
							color: 'rgb(148, 129, 43)',
							link: 'kaki',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Jaune', color: 'rgb(229, 232, 103)', link: 'jaune' },
						{
							name: 'Turquoise',
							color: 'rgb(25, 206, 235)',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Coton recyclé',
			price: 135.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/KOTO DENIM.avif',
			urlPageImg: '/shoes/koto-denim-page.avif',
		},
		{
			id: 'koto',
			cant: 1,
			color: 'kaki',
			title: 'KOTO KAKI',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Noir', color: '#000', link: 'noir' },
						{ name: 'Blanc', color: '#fff', link: 'blanc' },
						{
							name: 'Denim',
							color: 'rgb(77, 103, 139)',
							link: 'denim',
						},
						{
							name: 'Kaki',
							color: 'rgb(148, 129, 43)',
							link: 'kaki',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Jaune', color: 'rgb(229, 232, 103)', link: 'jaune' },
						{
							name: 'Turquoise',
							color: 'rgb(25, 206, 235)',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Coton recyclé',
			price: 135.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/KOTO KAKI.avif',
			urlPageImg: '/shoes/koto-kaki-page.avif',
		},
		{
			id: 'koto',
			cant: 1,
			color: 'jaune',
			title: 'KOTO JAUNE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Noir', color: '#000', link: 'noir' },
						{ name: 'Blanc', color: '#fff', link: 'blanc' },
						{
							name: 'Denim',
							color: 'rgb(77, 103, 139)',
							link: 'denim',
						},
						{
							name: 'Kaki',
							color: 'rgb(148, 129, 43)',
							link: 'kaki',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Jaune', color: 'rgb(229, 232, 103)', link: 'jaune' },
						{
							name: 'Turquoise',
							color: 'rgb(25, 206, 235)',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Coton recyclé',
			price: 135.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/KOTO JAUNE.avif',
			urlPageImg: '/shoes/koto-jaune.avif',
		},
		{
			id: 'koto',
			cant: 1,
			color: 'turquoise',
			title: 'KOTO TURQUOISE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Noir', color: '#000', link: 'noir' },
						{ name: 'Blanc', color: '#fff', link: 'blanc' },
						{
							name: 'Denim',
							color: 'rgb(77, 103, 139)',
							link: 'denim',
						},
						{
							name: 'Kaki',
							color: 'rgb(148, 129, 43)',
							link: 'kaki',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Jaune', color: 'rgb(229, 232, 103)', link: 'jaune' },
						{
							name: 'Turquoise',
							color: 'rgb(25, 206, 235)',
							link: 'turquoise',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Coton recyclé',
			price: 135.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/KOTO TURQUOISE.avif',
			urlPageImg: '/shoes/koto-turquoise-page.avif',
		},
		{
			// 12 vola me quede aca
			id: 'vola',
			cant: 1,
			color: 'gris-mineral',
			title: 'VOLA GRIS-MINERAL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Gris Mineral',
							color: 'rgb(80, 86, 92)',
							link: 'gris-mineral',
						},
						{
							name: 'Gris Polaire',
							color: 'rgb(152, 153, 150)',
							link: 'gris-polaire',
						},
						{
							name: 'Bleu Marin',
							color: 'rgb(18, 23, 39)',
							link: 'bleu-marin',
						},
						{
							name: 'Vert Olive',
							color: 'rgb(78, 89, 71)',
							link: 'vert-olive',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Bleu Digital',
							color: 'rgb(75, 139, 203)',
							link: 'bleu-digital',
						},
						{
							name: 'Bleu Ciel',
							color: 'rgb(119, 181, 254)',
							link: 'bleu-ciel',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Laine recyclé',
			price: 129.0,
			pricePrev: 140.0,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/VOLA GRIS-MINERAL.avif',
			urlPageImg: '/shoes/vola-gris-mineral-page.avif',
		},
		{
			// 2 vola
			id: 'vola',
			cant: 1,
			color: 'gris-polaire',
			title: 'VOLA GRIS-POLAIRE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Gris Mineral',
							color: 'rgb(80, 86, 92)',
							link: 'gris-mineral',
						},
						{
							name: 'Gris Polaire',
							color: 'rgb(152, 153, 150)',
							link: 'gris-polaire',
						},
						{
							name: 'Bleu Marin',
							color: 'rgb(18, 23, 39)',
							link: 'bleu-marin',
						},
						{
							name: 'Vert Olive',
							color: 'rgb(78, 89, 71)',
							link: 'vert-olive',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Bleu Digital',
							color: 'rgb(75, 139, 203)',
							link: 'bleu-digital',
						},
						{
							name: 'Bleu Ciel',
							color: 'rgb(119, 181, 254)',
							link: 'bleu-ciel',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Laine recyclée',
			price: 129.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/VOLA GRIS-POLAIRE.avif',
			urlPageImg: '/shoes/vola-gris-polaire-page.avif',
		},
		{
			// 3 vola
			id: 'vola',
			cant: 1,
			color: 'bleu-marin',
			title: 'VOLA BLEU-MARIN',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Gris Mineral',
							color: 'rgb(80, 86, 92)',
							link: 'gris-mineral',
						},
						{
							name: 'Gris Polaire',
							color: 'rgb(152, 153, 150)',
							link: 'gris-polaire',
						},
						{
							name: 'Bleu Marin',
							color: 'rgb(18, 23, 39)',
							link: 'bleu-marin',
						},
						{
							name: 'Vert Olive',
							color: 'rgb(78, 89, 71)',
							link: 'vert-olive',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Bleu Digital',
							color: 'rgb(75, 139, 203)',
							link: 'bleu-digital',
						},
						{
							name: 'Bleu Ciel',
							color: 'rgb(119, 181, 254)',
							link: 'bleu-ciel',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Laine recyclée',
			price: 129.0,
			pricePrev: 140.0,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/VOLA BLEU-MARIN.avif',
			urlPageImg: '/shoes/vola-bleu-marin-page.avif',
		},
		{
			// 4 vola
			id: 'vola',
			cant: 1,
			color: 'vert-olive',
			title: 'VOLA VERT-OLIVE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Gris Mineral',
							color: 'rgb(80, 86, 92)',
							link: 'gris-mineral',
						},
						{
							name: 'Gris Polaire',
							color: 'rgb(152, 153, 150)',
							link: 'gris-polaire',
						},
						{
							name: 'Bleu Marin',
							color: 'rgb(18, 23, 39)',
							link: 'bleu-marin',
						},
						{
							name: 'Vert Olive',
							color: 'rgb(78, 89, 71)',
							link: 'vert-olive',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Bleu Digital',
							color: 'rgb(75, 139, 203)',
							link: 'bleu-digital',
						},
						{
							name: 'Bleu Ciel',
							color: 'rgb(119, 181, 254)',
							link: 'bleu-ciel',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Laine recyclée',
			price: 129.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/VOLA VERT-OLIVE.avif',
			urlPageImg: '/shoes/vola-vert-olive-page.avif',
		},
		{
			// 5 vola
			id: 'vola',
			cant: 1,
			color: 'bleu-digital',
			title: 'VOLA BLEU-DIGITAL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Gris Mineral',
							color: 'rgb(80, 86, 92)',
							link: 'gris-mineral',
						},
						{
							name: 'Gris Polaire',
							color: 'rgb(152, 153, 150)',
							link: 'gris-polaire',
						},
						{
							name: 'Bleu Marin',
							color: 'rgb(18, 23, 39)',
							link: 'bleu-marin',
						},
						{
							name: 'Vert Olive',
							color: 'rgb(78, 89, 71)',
							link: 'vert-olive',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Bleu Digital',
							color: 'rgb(75, 139, 203)',
							link: 'bleu-digital',
						},
						{
							name: 'Bleu Ciel',
							color: 'rgb(119, 181, 254)',
							link: 'bleu-ciel',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Laine recyclée',
			price: 129.0,
			pricePrev: undefined,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/VOLA BLEU-DIGITAL.avif',
			urlPageImg: '/shoes/vola-bleu-digital.avif',
		},
		{
			id: 'vola',
			cant: 1,
			color: 'bleu-ciel',
			title: 'VOLA BLEU-CIEL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{
							name: 'Gris Mineral',
							color: 'rgb(80, 86, 92)',
							link: 'gris-mineral',
						},
						{
							name: 'Gris Polaire',
							color: 'rgb(152, 153, 150)',
							link: 'gris-polaire',
						},
						{
							name: 'Bleu Marin',
							color: 'rgb(18, 23, 39)',
							link: 'bleu-marin',
						},
						{
							name: 'Vert Olive',
							color: 'rgb(78, 89, 71)',
							link: 'vert-olive',
						},
					],
				},
				{
					title: 'Limités',
					color: [
						{
							name: 'Bleu Digital',
							color: 'rgb(75, 139, 203)',
							link: 'bleu-digital',
						},
						{
							name: 'Bleu Ciel',
							color: 'rgb(119, 181, 254)',
							link: 'bleu-ciel',
						},
					],
				},
			],
			sizes: [35, 36, 37, 38, 39, 40, 41],
			line: 'Laine recyclée',
			price: 129.0,
			pricePrev: 140.0,
			stars: 5,
			commnets: 12,
			urlImg: '/shoes/VOLA BLEU-CIEL.avif',
			urlPageImg: '/shoes/vola-blue-ciel-page.avif',
		},
	]
	return data
}

export default getShoesItems
