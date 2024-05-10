import { Link } from 'react-router-dom'
import styles from './ShoeCarouselItem.module.css'
import getShoesItems from '@/utils/getShoesItems'

const ShoeCarouselItem: React.FC = () => {
	const slides = getShoesItems()
	return (
		<>
			{slides.map((product, index) => (
				<div className={styles.container} key={index}>
					<Link
						to={`/products/${product.id}/${product.color}`}
						className={styles.imageContainer}
					>
						<img src={product.urlImg} alt={product.title} />
					</Link>
					<div className={styles.information}>
						<p className={styles.name}>{product.title}</p>
						<p className={styles.line}>{product.line}</p>
						<p className={styles.price}>
							{product.price} €
							{product.pricePrev ? (
								<span className={styles.discount}>{product.pricePrev} €</span>
							) : (
								''
							)}
						</p>
					</div>
				</div>
			))}
		</>
	)
}

export default ShoeCarouselItem
