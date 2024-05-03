import { EcologicalShoes } from '@/components/EcologicalShoes'
import { HeroPages } from '@/components/HeroPages'
import { ShoesGrid } from '@/components/ShoesGrid'
import React from 'react'
import getHommeShoesGrid from './utils/getHommeShoesGrid'

const Homme: React.FC = () => {
	const heroPageDesc = (
		<>
			Découvrez nos baskets conçues à partir d'une{' '}
			<strong>sélection rigoureuse de matières naturelles et recyclées</strong>{' '}
			: laine recyclée, chanvre, lin et coton recyclé.
		</>
	)
	const shoes = getHommeShoesGrid()
	return (
		<>
			<HeroPages
				colection='HOMME'
				title='BASKETS'
				desc={heroPageDesc}
				urlImage='/homme/hero.avif'
			/>
			<ShoesGrid props={shoes} />
			<EcologicalShoes title='BASKETS ÉCO-RESPONSABLES HOMME' />
		</>
	)
}

export default Homme
