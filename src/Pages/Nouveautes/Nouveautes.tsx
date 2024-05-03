import { HeroPages } from '@/components/HeroPages'
import { ShoesGrid } from '@/components/ShoesGrid'
import React from 'react'
import getNouveatuesShoesGrid from './utils/getNouveatuesShoesGrid'

const Nouveautes: React.FC = () => {
	const heroPageDesc = (
		<>
			Vous trouverez ici les dernières sorties de nos baskets. De AXOLO en lin
			français du champ au tissu à KOTO, notre basket en coton recyclé en
			passant par VOLKAN KNIT, une basket polyvalente en maille 0 plastique.
		</>
	)
	const shoes = getNouveatuesShoesGrid()
	return (
		<>
			<HeroPages
				colection='NOUVEAUTES'
				title='NOUVEAUTÉS'
				desc={heroPageDesc}
				urlImage='/nouveautes/hero.avif'
			/>
			<ShoesGrid props={shoes} />
		</>
	)
}

export default Nouveautes
