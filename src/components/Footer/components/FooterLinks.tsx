import styles from './FooterLinks.module.css'
import plus from '/icons/plus.svg'
const FooterLinks = () => {
	const links = [
		'Contactez-nous',
		'Foire aux questions',
		'Retours & Échanges',
		'Guide des tailles',
	]
	const list = [
		'Contactez-nous',
		'Ubac vision',
		'10€ sur votre 1ère commande',
		'On recrute',
		'CGV',
		'Menotions légales',
		'Politique de confidentialité',
		'Plan du site',
	]
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				{links.map((link, index) => (
					<a href='#' className={styles.link} key={index}>
						<span className={styles.plus}>
							<img src={plus} alt='' />
						</span>
						{link}
					</a>
				))}
			</div>
			<div className={styles.footer}>
				<div className={styles.list}>
					{list.map((item, index) => (
						<a href='#' key={index}>
							{item}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default FooterLinks
