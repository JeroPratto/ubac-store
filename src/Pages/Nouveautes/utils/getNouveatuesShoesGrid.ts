import { ShoeGrid } from '@/Pages/Femme/utils/getFemmeShoesGrid'

const getNouveatuesShoesGrid = (): ShoeGrid[] => {
	const data: ShoeGrid[] = [
		{
			specialItem: true,
			urlImage: '/shoes/special-shore-nou.avif',
			link: '#',
		},
		{
			specialItem: false,
			urlImage: '/shoes/AXOLO LIN BEIGE-item.avif',
			title: 'AXOLO LIN BEIGE',
			line: 'Lin',
			price: 165.0,
			link: '/products/axolo-lin-geige/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/AXOLO LIN VERT-BRUN-page.avif',
			title: 'AXOLO LIN VERT-BRUN',
			line: 'Lin',
			price: 165.0,
			link: '/products/axolo-lin-vert-brun/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/axolor-lin-camel-page.avif',
			title: 'AXOLO LIN CAMEL',
			line: 'Lin',
			price: 165.0,
			link: '/products/axolor-lin-camel/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/axolo-lin-turqouise-page.avif',
			title: 'KOTO TURQUOISE',
			line: 'Lin',
			price: 165.0,
			link: '/products/axolo-lin-turqouise/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/axolor-lin-rose-page.avif',
			title: 'AXOLO LIN ROSE',
			line: 'Lin',
			price: 165.0,
			link: '/products/axolor-lin-rose/beige',
		},
		//
		{ specialItem: true, urlImage: '/femme/shoes/special.avif', link: '#' },
		{
			specialItem: false,
			urlImage: '/shoes/koto-blanc-page.avif',
			title: 'KOTO BLANC',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto-blanc/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-noir-page.avif',
			title: 'KOTO NOIR',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto-noir/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-kaki-page.avif',
			title: 'KOTO KAKI',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto-kaki/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-denim-page.avif',
			title: 'KOTO DENIM',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto-denim/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koto-jaune.avif',
			title: 'KOTO JAUNE',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto-jaune/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/koton-rose.avif',
			title: 'KOTO ROSE',
			line: 'Coton recyclé',
			price: 135.0,
			link: '/products/koto-jaune/beige',
		},
	]
	return data
}

export default getNouveatuesShoesGrid
