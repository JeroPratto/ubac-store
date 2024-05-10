import { useCartStore } from '@/store/cartStore'
import { useOpenCartStore } from '@/store/openCartStore'
import React, { useEffect, useRef } from 'react'
import styles from './Cart.module.css'
import ItemCart from './components/ItemCart'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
	const isOpen = useOpenCartStore((state) => state.isOpen)
	const closeCart = useOpenCartStore((state) => state.closeCart)
	const { products, totalPrice } = useCartStore()

	const ref = useRef<HTMLDivElement | null>(null)
	const availableBts = products.length === 0

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) closeCart()
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen])

	return (
		<div
			className={`${styles.container} ${isOpen ? styles.open : ''}`}
			ref={ref}
		>
			<button
				className={styles.close}
				onClick={closeCart}
				aria-label='Close cart'
			>
				<img src='/general/close.svg' alt='Close cart menu' />
			</button>
			<p className={styles.header}>PANIER</p>
			<div className={styles.itemsCart}>
				{products.map((product, index) => (
					<ItemCart {...product} key={index} />
				))}
			</div>
			<div className={styles.footer}>
				<p className={styles.total}>
					<span>TOTAL</span>
					<span className={styles.price}>{totalPrice}€</span>
				</p>
				{/* Deben estar activos si hay al menos un elemento */}
				<button
					onClick={closeCart}
					className={`${styles.continuer} ${
						availableBts ? styles.disabled : ''
					}`}
				>
					Continuer mes achast
				</button>
				<Link
					onClick={closeCart}
					to='/login'
					className={`${styles.commander} ${
						availableBts ? styles.disabled : ''
					}`}
				>
					Commander
				</Link>
			</div>
		</div>
	)
}

export default Cart
