import styles from './Newsletter.module.css'

const Newsletter: React.FC = () => {
	const icons = [
		'/icons/ig-icon.svg',
		'/icons/facebook.svg',
		'/icons/tiktok.svg',
		'/icons/in.svg',
	]
	return (
		<div className={styles.setup}>
			<div className={styles.container}>
				<div className={styles.textAndInput}>
					<h4 className={styles.title}>NEWSLETTER</h4>
					<p className={styles.desc}>
						Découvrez en avant-première tous nos nouveaux produits, nos
						dernières actions et profitez de 10€ sur votre première commande en
						s'inscrivant à notre newsletter !
					</p>
					<form className={styles.form}>
						<input
							placeholder='Tapez votre adresse email ici'
							className={styles.inputEmail}
						/>
						<button type='button' className={styles.formBtn}>
							S'inscribe
						</button>
					</form>
				</div>
				<div className={styles.socials}>
					{icons.map((icon, index) => (
						<div className={styles.icon} key={index}>
							<img src={icon} alt='' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Newsletter
