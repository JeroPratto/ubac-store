import React from 'react'
import styles from './ShoesGrid.module.css'
import { ShoeGrid } from '@/Pages/Femme/utils/getFemmeShoesGrid'
import { Link } from 'react-router-dom'

export type ShoesGridProps = {
	props: ShoeGrid[]
}

const ShoesGrid: React.FC<ShoesGridProps> = ({ props }) => {
	return (
		<div className={styles.container}>
			{props.map((shoe, index) =>
				shoe.specialItem ? (
					<SpecialItemShoesGrid key={index} {...shoe} />
				) : (
					<ItemShoesGrid key={index} {...shoe} />
				),
			)}
		</div>
	)
}

export default ShoesGrid

interface ItemShoesGridProps {
	link: string
	urlImage?: string
	title?: string
	line?: string
	price?: number
}
const ItemShoesGrid: React.FC<ItemShoesGridProps> = ({
	urlImage,
	line,
	link,
	price,
	title,
}) => {
	return (
		<Link to={link} className={styles.item}>
			<div className={styles.containerImage}>
				<img src={urlImage} alt='' />
			</div>
			<div className={styles.information}>
				<p className={styles.title}>{title}</p>
				<p className={styles.line}>{line}</p>
				<p className={styles.price}>{price}€</p>
			</div>
		</Link>
	)
}

const SpecialItemShoesGrid = ({ urlImage }: { urlImage: string }) => {
	return (
		<div className={styles.specialItem}>
			<div className={styles.specialContainerImage}>
				<img src={urlImage} alt='' />
			</div>
		</div>
	)
}
