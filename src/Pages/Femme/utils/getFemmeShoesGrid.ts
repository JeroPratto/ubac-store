export interface ShoeGrid {
	specialItem: boolean
	link: string
	urlImage: string
	title?: string
	line?: string
	price?: number
}
const getFemmeShoesGrid = (): ShoeGrid[] => {
	const data: ShoeGrid[] = [
		{ specialItem: true, urlImage: '/femme/shoes/special.avif', link: '#' },
		{
			specialItem: false,
			urlImage: '/shoes/koto-blanc-page.avif',
			title: 'KOTO BLANC',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto/blanc',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-noir-page.avif',
			title: 'KOTO NOIR',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto/noir',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-kaki-page.avif',
			title: 'KOTO KAKI',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto/kaki',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-denim-page.avif',
			title: 'KOTO DENIM',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto/denim',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-jaune.avif',
			title: 'KOTO JAUNE',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto/jaune',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koton-rose.avif',
			title: 'KOTO ROSE',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto/noir',
		},
		{
			specialItem: false,
			urlImage: '/shoes/vola-gris-polaire-page.avif',
			title: 'VOLA GRIS-POLAIRE',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola/gris-polaire',
		},
		{
			specialItem: true,
			urlImage: '/shoes/special-shoe-2.avif',
			link: '#',
		},
		{
			specialItem: false,
			urlImage: '/shoes/vola-gris-mineral-page.avif',
			title: 'VOLA GRIS-MINERAL',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola/gris-mineral',
		},

		{
			specialItem: false,
			urlImage: '/shoes/vola-bleu-marin-page.avif',
			title: 'VOLA BLEU-MARIN',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola/belu-marin',
		},
		{
			specialItem: false,
			urlImage: '/shoes/vola-vert-olive-page.avif',
			title: 'VOLA VERT-OLIVE',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola/vert-olive',
		},
		{
			specialItem: false,
			urlImage: '/shoes/rouge-ocre.avif',
			title: 'BASKET VOLA ROUGE OCRE',
			line: 'Laine recyclé',
			price: 99.0,
			link: '/products/vola/vert-olive',
		},
	]
	return data
}

export default getFemmeShoesGrid
