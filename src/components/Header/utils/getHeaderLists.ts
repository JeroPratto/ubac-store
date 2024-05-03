export interface HeaderList {
	title: string
	link: string
	urlImage: string
	lists: List[]
}
interface List {
	title: string
	items: { name?: string; desc: string }[]
}

export const getHeaderLists = (): HeaderList[] => {
	const data = [
		{
			title: 'FEMME',
			link: '/femme',
			urlImage: '/header/femme.avif',
			lists: [
				{
					title: 'Baskets',
					items: [
						{ name: 'KOTO', desc: 'Coton recyclé' },
						{ name: 'VOLA ', desc: 'Layne recyclé' },
						{ name: 'AXOLO LIN', desc: 'Lin' },
						{ name: 'AXOLO R-SKIN MONOCHROME', desc: 'Caoutchouc recyclé' },
						{ name: 'VOLKAN KNIT', desc: 'Coton biologique et tencel' },
						{ name: 'AXOLO MESCLAT', desc: 'chanvre - Laine' },
						{ name: 'VOLKAN MESCLAT', desc: 'Chanvre - Laine' },
						{ name: 'VOLKAN LAINE', desc: 'Laine recyclé' },
					],
				},
				{
					title: 'Sandales',
					items: [
						{ name: 'AURA 1', desc: 'Caoutchouc recyclé' },
						{ name: 'AURA 2', desc: 'Caoutchouc recyclé' },
					],
				},
				{
					title: 'Accesoires',
					items: [
						{ desc: 'Chaussette laine' },
						{ desc: 'Coffret chaussette' },
						{ desc: 'Chaussette coton' },
						{ desc: 'Casquette laine' },
						{ desc: 'Casquette coton' },
						{ desc: 'Lacets' },
					],
				},
			],
		},
		{
			title: 'HOMME',
			link: '/homme',
			urlImage: '/header/homme.avif',
			lists: [
				{
					title: 'Baskets',
					items: [
						{ name: 'KOTO', desc: 'Coton recyclé' },
						{ name: 'VOLA ', desc: 'Layne recyclé' },
						{ name: 'AXOLO LIN', desc: 'Lin' },
						{ name: 'AXOLO R-SKIN MONOCHROME', desc: 'Caoutchouc recyclé' },
						{ name: 'VOLKAN KNIT', desc: 'Coton biologique et tencel' },
						{ name: 'AXOLO MESCLAT', desc: 'chanvre - Laine' },
						{ name: 'VOLKAN MESCLAT', desc: 'Chanvre - Laine' },
						{ name: 'VOLKAN LAINE', desc: 'Laine recyclé' },
					],
				},
				{
					title: 'Accesoires',
					items: [
						{ desc: 'Chaussette laine' },
						{ desc: 'Coffret chaussette' },
						{ desc: 'Chaussette coton' },
						{ desc: 'Casquette laine' },
						{ desc: 'Casquette coton' },
						{ desc: 'Lacets' },
					],
				},
			],
		},
		{
			title: 'NOUVEAUTÉS',
			link: '/nouveautes',
			urlImage: '/header/noveautes.avif',
			lists: [
				{
					title: 'Femme',
					items: [
						{ name: 'AXOLO LIN', desc: 'Lin' },
						{ name: 'KOTO', desc: 'Coton recyclé' },
						{ name: 'AXOLO R-SKIN MONOCHROME', desc: 'Caoutchouc recyclé' },
						{ name: 'VOLKAN KNIT', desc: 'Coton biologique et tencel' },
					],
				},
				{
					title: 'Homme',
					link: '/',
					items: [
						{ name: 'AXOLO LIN', desc: 'Lin' },
						{ name: 'KOTO', desc: 'Coton recyclé' },
						{ name: 'AXOLO R-SKIN MONOCHROME', desc: 'Caoutchouc recyclé' },
						{ name: 'VOLKAN KNIT', desc: 'Coton biologique et tencel' },
					],
				},
			],
		},
	]
	return data
}
