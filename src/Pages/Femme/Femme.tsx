import { EcologicalShoes } from '@/components/EcologicalShoes'
import { HeroPages } from '@/components/HeroPages'
import { ShoesGrid } from '@/components/ShoesGrid'
import React from 'react'
import getFemmeShoesGrid from './utils/getFemmeShoesGrid'

const Femme: React.FC = () => {
	const heroPageDesc = (
		<>
			Découvrez nos baskets conçues à partir d'une{' '}
			<strong>sélection rigoureuse de matières naturelles et recyclées</strong>{' '}
			: laine recyclée, chanvre, lin et coton recyclé.
		</>
	)
	const shoes = getFemmeShoesGrid()
	return (
		<>
			<HeroPages
				colection='FEMME'
				title='BASKETS'
				desc={heroPageDesc}
				urlImage='/femme/hero.avif'
			/>
			<ShoesGrid props={shoes} />
			<EcologicalShoes title='CHAUSSURES FEMME ÉCO-RESPONSABLES' />
		</>
	)
}

export default Femme
