import { Carousel } from '@/components/Carousel'
import React from 'react'
import { InspiredSeparator } from './components/InspiredSeparator'
import MaleOrFemale from './components/MaleOrFemale/MaleOrFemale'
import MultiMaleOrFemale from './components/MultiMaleOrFemale/MultiMaleOrFemale'
import NouvellesCarouselItem from './components/NouvellesCarouselItem/NouvellesCarouselItem'
import ShoeCarouselItem from './components/ShoeCarouselItem/ShoeCarouselItem'

const Home: React.FC = () => {
	return (
		<div>
			<MaleOrFemale />
			<Carousel>
				<ShoeCarouselItem />
			</Carousel>
			<MultiMaleOrFemale />
			<div style={{ backgroundColor: '#f7f6f3' }}>
				<InspiredSeparator />
				<Carousel title='NOUVELLES'>
					<NouvellesCarouselItem />
				</Carousel>
			</div>
		</div>
	)
}

export default Home
