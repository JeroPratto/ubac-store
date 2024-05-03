import CartLogo from '@/assets/cartLogo'
import UserLogo from '@/assets/userLogo'
import { useOpenCartStore } from '@/store/openCartStore'
import styles from '../Header.module.css'
import { getHeaderLists } from '../utils/getHeaderLists'
import HeaderDropdown from './HeaderDropdown'
import { Link } from 'react-router-dom'
import { useCartStore } from '@/store/cartStore'

const HeaderDesktop: React.FC = () => {
	const dropdowns = getHeaderLists()
	const { products } = useCartStore()

	const openCart = useOpenCartStore((state) => state.openCart)
	const handleOpen = (event: React.MouseEvent) => {
		event.stopPropagation()
		openCart()
	}
	return (
		<nav className={styles.nav}>
			{dropdowns.map((drop, index) => (
				<HeaderDropdown {...drop} key={index} />
			))}
			<p className={styles.vision}>VISION</p>
			<div className={styles.cartAndLogin}>
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
				<Link
					to='/login'
					className={styles.userLogo}
					aria-label='Go to login page'
				>
					<UserLogo />
				</Link>
			</div>
		</nav>
	)
}

export default HeaderDesktop
