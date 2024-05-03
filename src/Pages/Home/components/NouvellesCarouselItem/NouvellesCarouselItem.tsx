import styles from './NouvellesCarouselItem.module.css'
import getNouvellesItem from './utils/getNouvellesItem'

const NouvellesCarouselItem = () => {
	const slides = getNouvellesItem()

	return (
		<>
			{slides.map((slide, index) => (
				<div className={styles.container} key={index}>
					<div className={styles.imageContainer}>
						<img src={slide.urlImg} alt='' />
					</div>
					<div className={styles.information}>
						<span className={styles.tag}>{slide.btnText}</span>
						<p className={styles.title}>{slide.title}</p>
						<p className={styles.desc}>{slide.desc}</p>
					</div>
				</div>
			))}
		</>
	)
}

export default NouvellesCarouselItem
