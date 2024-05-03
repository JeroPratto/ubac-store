import { ShoeGrid } from '@/Pages/Femme/utils/getFemmeShoesGrid'

const getHommeShoesGrid = (): ShoeGrid[] => {
	const data: ShoeGrid[] = [
		{
			specialItem: true,
			urlImage: '/shoes/homme-special.avif',
			link: '#',
		},
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
		//
		{
			specialItem: false,
			urlImage: '/shoes/axolo-lin-turqouise-page.avif',
			title: 'KOTO TURQUOISE',
			line: 'Lin',
			price: 165.0,
			link: '/products/axolo-lin-turqouise/beige',
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
			link: '/products/vola-gris-mineral/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/vola-gris-polaire-page.avif',
			title: 'VOLA GRIS-POLAIRE',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola-gris-polaire/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/vola-bleu-marin-page.avif',
			title: 'VOLA BLEU-MARIN',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola-bleu-marin/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/vola-vert-olive-page.avif',
			title: 'VOLA VERT-OLIVE',
			line: 'Laine recyclé',
			price: 129.0,
			link: '/products/vola-vert-olive/beige',
		},
		{
			specialItem: false,
			urlImage: '/shoes/rouge-ocre.avif',
			title: 'BASKET VOLA ROUGE OCRE',
			line: 'Laine recyclé',
			price: 99.0,
			link: '#',
		},
	]
	return data
}

export default getHommeShoesGrid
