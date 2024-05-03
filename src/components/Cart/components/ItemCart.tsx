import styles from './ItemCart.module.css'
import { useCartStore } from '@/store/cartStore'
import { useEffect, useState } from 'react'

export interface BasicShoe {
	cant: number
	name: string
	color: string
	size: number
	id: string
	urlImage: string
	price: number
}
const ItemCart: React.FC<BasicShoe> = (props) => {
	const [cant, setCant] = useState(props.cant)
	const { deleteProduct, addQuantity, lessQuantity } = useCartStore()
	useEffect(() => {
		setCant(props.cant)
	}, [props.cant])
	const handleDelete = (event: React.MouseEvent) => {
		event.stopPropagation()
		deleteProduct(props.id)
	}
	const handleLessCant = (event: React.MouseEvent) => {
		event.stopPropagation()
		const currentCant = cant - 1
		if (currentCant === 0) {
			deleteProduct(props.id)
		} else {
			lessQuantity(props.id)
			setCant(currentCant)
		}
	}
	const handleMoreCant = () => {
		const currentCant = cant + 1
		setCant(currentCant)
		addQuantity(props.id)
	}
	return (
		<div className={styles.item}>
			<div className={styles.imageContainer}>
				<img src={props.urlImage} alt={props.name} />
			</div>
			<div className={styles.information}>
				<div className={styles.nameAndDetails}>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.details}>
						{props.color}
						<br />
						Taile: {props.size}
					</p>
					<div className={styles.cantContainerMobile}>
						<Buttons
							handleLessCant={handleLessCant}
							handleMoreCant={handleMoreCant}
							cant={cant}
						/>
					</div>
				</div>
				<div className={styles.cantContainer}>
					<Buttons
						handleLessCant={handleLessCant}
						handleMoreCant={handleMoreCant}
						cant={cant}
					/>
				</div>
				<p className={styles.price}>{props.price * cant}€</p>
				<button onClick={handleDelete} className={styles.delete}>
					SUPPRIMER
				</button>
			</div>
		</div>
	)
}

export default ItemCart

const Buttons = ({
	handleLessCant,
	handleMoreCant,
	cant,
}: {
	handleLessCant: (event: React.MouseEvent) => void
	handleMoreCant: (event: React.MouseEvent) => void
	cant: number
}) => {
	return (
		<>
			<button
				onClick={handleLessCant}
				className={styles.handleCant}
				aria-label='Remove a pair of shoes'
			>
				<img src='/icons/less.svg' alt='subtract a pair' />
			</button>
			<p className={styles.cant}>{cant}</p>
			<button
				onClick={handleMoreCant}
				className={styles.handleCant}
				aria-label='Add a pair of shoes'
			>
				<img src='/icons/plus.svg' alt='add a couple' />
			</button>
		</>
	)
}
