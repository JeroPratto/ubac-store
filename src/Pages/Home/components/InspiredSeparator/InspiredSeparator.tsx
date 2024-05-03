import React from 'react'
import styles from './InspiredSeparator.module.css'

const InspiredSeparator: React.FC = () => {
	return (
		<div className={styles.setup}>
			<div className={styles.container}>
				<h4 className={styles.title}>
					“ INSPIRÉ PAR LA NATURE CONÇU POUR LE FUTUR “
				</h4>
				<p className={styles.desc}>
					NOUS CRÉONS DES BASKETS QUI CONNECTENT LES MATIÈRES NATURELLES À UN
					DESIGN AUDACIEUX EN PRIVILÉGIANT UNE FABRICATION LOCALE DES COMPOSANTS
					À L'ASSEMBLAGE, PROMESSE D'UN IMPACT SUR L'ENVIRONNEMENT RÉDUIT À SON
					MAXIMUM.
				</p>
			</div>
		</div>
	)
}

export default InspiredSeparator
