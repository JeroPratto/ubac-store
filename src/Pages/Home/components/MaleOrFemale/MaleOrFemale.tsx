import { Link } from 'react-router-dom'
import styles from './MaleOrFemale.module.css'

const MaleOrFemale: React.FC = () => {
	return (
		<div className={styles.container}>
			<picture>
				<source srcSet='/home/hero-mobile.avif' media='(max-width:760px)' />
				<img src='/home/hero.avif' alt='' className={styles.bgImage} />
			</picture>
			<div className={styles.titleAndPre}>
				<p className={styles.pre}>NOUVEAUTÉS</p>
				<h2 className={styles.title}>AXOLO LIN</h2>
			</div>
			<div className={styles.linksContainer}>
				<div className={styles.linkContainer}>
					<Link to='/femme' className={styles.link}>
						FEMME
					</Link>
				</div>
				<div className={styles.linkContainer}>
					<Link to='/homme' className={styles.link}>
						HOMME
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MaleOrFemale
