import React, { ReactNode } from 'react'
import styles from './HeroPages.module.css'

export type HeroPagesProps = {
	colection: string
	title: string
	desc: ReactNode
	urlImage: string
}

const HeroPages: React.FC<HeroPagesProps> = ({
	colection,
	title,
	desc,
	urlImage,
}) => {
	return (
		<div className={styles.setup}>
			<div className={styles.container}>
				<div className={styles.information}>
					<p className={styles.location}>
						<span className={styles.home}>HOME</span>
						<span className={styles.point}></span>
						<span className={styles.current}>COLLECTION {colection}</span>
					</p>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.desc}>{desc}</p>
				</div>
				<div className={styles.videoContainer}>
					<img src={urlImage} alt='' />
				</div>
			</div>
		</div>
	)
}

export default HeroPages
