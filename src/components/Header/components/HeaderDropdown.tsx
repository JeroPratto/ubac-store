import { Link, useLocation } from 'react-router-dom'
import { HeaderList } from '../utils/getHeaderLists'
import {
	setHeaderStyleToDark,
	setHeaderStyleToLight,
} from '../utils/handleChangeHeaderColors'
import styles from './HeaderDropdown.module.css'

const HeaderDropdown: React.FC<HeaderList> = ({
	title,
	lists,
	urlImage,
	link,
}) => {
	const location = useLocation()
	const handleLeave = () => {
		if (window.scrollY <= 200) {
			if (location.pathname === '/') setHeaderStyleToLight()
			else {
				document.documentElement.style.setProperty(
					'--header-bg-color',
					'transparent',
				)
			}
		}
	}
	const handleEnter = () => {
		setHeaderStyleToDark()
	}
	return (
		<div
			className={styles.dropdown}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			<Link
				to={link}
				className={`${styles.dropdownTitle} ${
					location.pathname === link ? styles.current : ''
				}`}
			>
				{title}
			</Link>
			<div className={styles.dropdownInformation}>
				<div className={styles.line}></div>
				<div className={styles.information}>
					<div className={styles.imageContainer}>
						<img src={urlImage} alt={title} />
					</div>
					{lists.map((list, index) => (
						<List {...list} key={index} />
					))}
				</div>
			</div>
		</div>
	)
}

export default HeaderDropdown

interface List {
	title: string
	items: { name?: string; desc: string }[]
}
const List: React.FC<List> = ({ title, items }) => {
	return (
		<ul className={styles.list}>
			<li className={styles.title}>{title}</li>
			{items.map((item, index) => (
				<li className={styles.item} key={index}>
					{item.name && <span>{item.name} - </span>}
					{item.desc}
				</li>
			))}
		</ul>
	)
}
