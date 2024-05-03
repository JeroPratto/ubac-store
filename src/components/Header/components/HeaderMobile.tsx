import UserLogo from '@/assets/userLogo'
import styles from './HeaderMobile.module.css'
import CartLogo from '@/assets/cartLogo'
import { useOpenCartStore } from '@/store/openCartStore'
import MenuLogo from '@/assets/menuLogo'
import { useState } from 'react'
import {
	setHeaderStyleToDark,
	setHeaderStyleToLight,
} from '../utils/handleChangeHeaderColors'
import { useCartStore } from '@/store/cartStore'
import { Link, useLocation } from 'react-router-dom'

const HeaderMobile: React.FC = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const openCart = useOpenCartStore((state) => state.openCart)
	const { products } = useCartStore()
	const location = useLocation()

	const handleOpen = (event: React.MouseEvent) => {
		event.stopPropagation()
		openCart()
	}
	const toggleState = () => {
		if (menuIsOpen) {
			setMenuIsOpen(false)
			setTimeout(() => {
				if (window.scrollY <= 200) {
					if (location.pathname === '/') setHeaderStyleToLight()
					else {
						document.documentElement.style.setProperty(
							'--header-bg-color',
							'transparent',
						)
					}
				}
			}, 400)
			document.documentElement.style.setProperty('--state-body-menu', 'auto')
		} else {
			setHeaderStyleToDark()
			setMenuIsOpen(true)
			document.documentElement.style.setProperty('--state-body-menu', 'hidden')
		}
	}
	const links = [
		{ name: 'FEMME', link: 'femme' },
		{ name: 'HOMME', link: 'homme' },
		{ name: 'NOUVEAUTÉS', link: 'nouveautes' },
		{ name: 'VISION', link: '#' },
	]
	return (
		<>
			<div className={styles.btnsContainer}>
				<Link to='/login' className={styles.userLogo}>
					<UserLogo />
				</Link>
				<button
					onClick={handleOpen}
					className={styles.openCart}
					aria-label='open cart'
				>
					<CartLogo />
					{products.length != 0 && (
						<span
							className={styles.quantitiy}
							aria-label='number of products in the cart'
						>
							{products.length}
						</span>
					)}
				</button>
				<button
					className={styles.openMenu}
					onClick={toggleState}
					aria-label='open menu'
				>
					<MenuLogo />
				</button>
			</div>
			<ul className={`${styles.menu} ${menuIsOpen ? styles.open : ''}`}>
				<div className={styles.border}></div>
				{links.map((link, index) => (
					<li className={styles.link} key={index}>
						<Link to={link.link} onClick={toggleState}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default HeaderMobile
