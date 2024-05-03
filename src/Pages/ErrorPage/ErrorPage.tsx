import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>ERREUR 404</h1>
			<p className={styles.desc}>Cette page n'existe pas</p>
			<Link to='/' className={styles.link}>
				Retour à l'accueil
			</Link>
		</div>
	)
}

export default ErrorPage
