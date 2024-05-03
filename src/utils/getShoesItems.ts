export interface ShoeInterface {
	id: string
	title: string
	colorsAvailable: {
		title: string
		color: { name: string; color: string; link: string }[]
	}[]
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
			id: 'axolo-lin-geige',
			cant: 1,
			title: 'AXOLO LIN BEIGE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'axolo-lin-vert-brun',
			cant: 1,
			title: 'AXOLO LIN VERT-BRUN',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'axolor-lin-camel',
			cant: 1,
			title: 'AXOLO LIN CAMEL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'axolo-lin-turqouise',
			cant: 1,
			title: 'AXOLO LIN TURQUOISE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'axolor-lin-rose',
			cant: 1,
			title: 'AXOLO LIN ROSE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'koto-noir',
			cant: 1,
			title: 'KOTO NOIR',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'koto-denim',
			cant: 1,
			title: 'KOTO DENIM',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'koto-jaune',
			cant: 1,
			title: 'KOTO JAUNE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'koto-blanc',
			cant: 1,
			title: 'KOTO BLANC',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'koto-kaki',
			cant: 1,
			title: 'KOTO KAKI',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'koto-turquoise',
			cant: 1,
			title: 'KOTO TURQUOISE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'vola-gris-mineral',
			cant: 1,
			title: 'VOLA GRIS-MINERAL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'vola-gris-polaire',
			cant: 1,
			title: 'VOLA GRIS-POLAIRE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'vola-bleu-marin',
			cant: 1,
			title: 'VOLA BLEU-MARIN',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'vola-vert-olive',
			cant: 1,
			title: 'VOLA VERT-OLIVE',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			id: 'vola-bleu-digital',
			cant: 1,
			title: 'VOLA BLEU-DIGITAL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
			urlPageImg: '/shoes/vola-vert-olive-page.avif',
		},
		{
			id: 'vola-blue-ciel',
			cant: 1,
			title: 'VOLA BLEU-CIEL',
			colorsAvailable: [
				{
					title: 'Classique',
					color: [
						{ name: 'Beige', color: '#e6dac6', link: 'beige' },
						{ name: 'Camel', color: '#bf8a3d', link: 'camel' },
						{ name: 'Vert Brun', color: '#251e18', link: 'vert-brun' },
					],
				},
				{
					title: 'Limités',
					color: [
						{ name: 'Rose', color: '#e44d95', link: 'rose' },
						{ name: 'Turquoise', color: '#28acea', link: 'turquoise' },
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
