import styles from './ProductPage.module.css'
import stylesSkeleton from './SkeletonProductPage.module.css'

const SkeletonProductPage = () => {
	const sizes = [1, 2, 3, 4, 5, 6, 7]
	return (
		<div className={styles.container}>
			<MainContainer />
			<div className={styles.informationContainer}>
				<TitleAndDetails />
				<div className={styles.colorsContainer}>
					<div className={styles.colors}>
						<ColorList />
					</div>
				</div>
				<div
					className={`${styles.hommeOrFemme} ${stylesSkeleton.containerBtn}`}
				>
					<button>Homme</button>
					<button>Femme</button>
				</div>
				<img
					src='/skeleton/title.svg'
					alt=''
					className={stylesSkeleton.sizeText}
				/>
				<div className={styles.sizeList}>
					{sizes.map((index) => (
						<button
							key={index}
							className={`${styles.size} ${stylesSkeleton.sizeBtn}`}
						>
							{index}
						</button>
					))}
				</div>
				<div className={styles.addProductContainer}>
					<button
						className={`${styles.addProduct} ${stylesSkeleton.addProductBtn}`}
					>
						Ajouter au panier
					</button>
				</div>
				<CotonAndMaterials />
			</div>
		</div>
	)
}

export default SkeletonProductPage

const ColorList: React.FC = () => {
	const colors = [1, 2, 3, 4, 5]
	return (
		<>
			<img
				src='/skeleton/title.svg'
				alt=''
				className={stylesSkeleton.textColor}
			/>
			<ul className={styles.colorList}>
				{colors.map((index) => (
					<li className={styles.color} key={index}>
						<span className={stylesSkeleton.color}></span>
					</li>
				))}
			</ul>
		</>
	)
}

const MainContainer = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainImage}>
				<img src={'/skeleton/image-16-9.svg'} alt='' />
			</div>
			{/*  */}
			<div className={styles.secondImage}>
				<img src='/skeleton/image-1-1.svg' alt='' />
			</div>
			<div className={styles.secondImage}>
				<img src='/skeleton/image-1-1.svg' alt='' />
			</div>
			<div className={styles.secondImage}>
				<img src='/skeleton/image-1-1.svg' alt='' />
			</div>
			<div className={styles.secondImage}>
				<img src='/skeleton/image-1-1.svg' alt='' />
			</div>
		</div>
	)
}

const TitleAndDetails: React.FC = () => {
	return (
		<div className={stylesSkeleton.titleAndDetails}>
			<img src='/skeleton/title.svg' alt='' className={stylesSkeleton.title} />
			<img
				src='/skeleton/title.svg'
				alt=''
				className={stylesSkeleton.colorName}
			/>
			<img
				src='/skeleton/5-stars.svg'
				alt=''
				className={stylesSkeleton.stars}
			/>
		</div>
	)
}

const CotonAndMaterials = () => {
	return (
		<div className={`${styles.coton} ${stylesSkeleton.cotonImg}`}>
			<img src='/skeleton/image-1-1.svg' alt='' />
		</div>
	)
}
