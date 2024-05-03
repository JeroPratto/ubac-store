import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React, { ReactNode } from 'react'
import styles from './Carousel.module.css'
import { usePrevNextButtons } from './CarouselButtons'
import arrow from '/icons/arrow.svg'
export type CarouselProps = {
	children: ReactNode
	title?: string
}

const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
	const options: EmblaOptionsType = {
		align: 'start',
		dragFree: true,
		loop: true,
	}
	const [emblaRef, emblaApi] = useEmblaCarousel(options)
	const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
	return (
		<section className={styles.embla}>
			{title && <h3 className={styles.title}>{title}</h3>}
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>{children}</div>
			</div>
			<div className={styles.controls}>
				<button onClick={onNextButtonClick} aria-label='Next product'>
					<img src={arrow} alt='Next element of the carousel' />
				</button>
				<button onClick={onPrevButtonClick} aria-label='Previous product'>
					<img src={arrow} alt='Prev element of the carousel' />
				</button>
			</div>
		</section>
	)
}

export default Carousel
