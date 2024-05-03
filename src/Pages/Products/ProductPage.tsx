import { useCartStore } from '@/store/cartStore'
import { useOpenCartStore } from '@/store/openCartStore'
import { ShoeInterface } from '@/utils/getShoesItems'
import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import styles from './ProductPage.module.css'
import star from '/icons/star.svg'

interface ProductPageProps {
	product: ShoeInterface
	nameColor: string
}

const ProductPage: React.FC<ProductPageProps> = ({ product, nameColor }) => {
	const { color } = useParams()

	const { addProduct } = useCartStore()
	const [sex, setSex] = useState<'homme' | 'femme'>('homme')

	const openCart = useOpenCartStore((state) => state.openCart)
	const [selectedSize, setSize] = useState(product?.sizes[0])

	const handleAddProduct = (event: React.MouseEvent) => {
		event.stopPropagation()
		openCart()
		if (color) {
			addProduct({
				id: `${product.id}-${color}-${selectedSize}`,
				urlImage: product.urlPageImg,
				name: product.title,
				color: color,
				size: selectedSize,
				price: product.price,
				cant: 1,
			})
		}
	}

	return (
		product && (
			<div className={styles.container}>
				<MainContainer urlPageImg={product.urlPageImg} title={product.title} />
				<div className={styles.informationContainer}>
					<TitleAndDetails
						commnets={product.commnets}
						nameColor={nameColor}
						price={product.price}
						stars={product.stars}
						title={product.title}
					/>
					<div className={styles.colorsContainer}>
						{product.colorsAvailable.map((colors, index) => (
							<div className={styles.colors} key={index}>
								<ColorList
									currentColor={color}
									listColor={colors.color}
									name={colors.title}
								/>
							</div>
						))}
					</div>
					<div className={styles.hommeOrFemme}>
						<button
							className={sex === 'homme' ? styles.current : ''}
							onClick={() => setSex('homme')}
						>
							Homme
						</button>
						<button
							className={sex === 'femme' ? styles.current : ''}
							onClick={() => setSex('femme')}
						>
							Femme
						</button>
					</div>
					{/*  */}
					<p className={styles.selectSize}>
						Sélectionnez votre Taille <span>Guide des tailler</span>
					</p>
					<div className={styles.sizeList}>
						{product.sizes.map((size, index) => (
							<button
								key={index}
								className={`${styles.size} ${
									selectedSize === size ? styles.current : ''
								}`}
								onClick={() => setSize(size)}
								aria-label={
									selectedSize === size ? 'selected size' : 'select size'
								}
							>
								{size}
							</button>
						))}
					</div>
					{/*  */}
					<div className={styles.addProductContainer}>
						<button onClick={handleAddProduct} className={styles.addProduct}>
							Ajouter au panier
						</button>
						<p className={styles.free}>
							Livraison gratuite & Retour offert <span>dés 120€ d’achat.</span>
						</p>
					</div>
					<CotonAndMaterials />
				</div>
			</div>
		)
	)
}

export default ProductPage

interface ColorListProps {
	listColor: { name: string; color: string; link: string }[]
	currentColor: string | undefined
	name: string
}
const ColorList: React.FC<ColorListProps> = ({
	listColor,
	currentColor,
	name,
}) => {
	return (
		<>
			<p className={styles.nameColor}>{name}</p>
			<ul className={styles.colorList}>
				{listColor.map((data, index) => (
					<li className={styles.color} key={index}>
						{currentColor === data.link ? (
							<p
								style={{ backgroundColor: data.color }}
								className={`${styles.linkColor} ${styles.current}`}
							>
								<span></span>
							</p>
						) : (
							<LinkColor color={data.color} link={data.link} />
						)}
					</li>
				))}
			</ul>
		</>
	)
}
const LinkColor = ({ color, link }: { color: string; link: string }) => {
	const { pathname } = useLocation()
	const parts = pathname.split('/')
	parts.pop()
	const newUrl = `${parts.join('/')}/${link}`

	return (
		<Link
			to={newUrl}
			style={{ backgroundColor: color }}
			className={styles.linkColor}
		></Link>
	)
}

const MainContainer = ({
	urlPageImg,
	title,
}: {
	urlPageImg: string
	title: string
}) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainImage}>
				<img src={urlPageImg} alt={title} />
			</div>
			{/*  */}
			<div className={styles.secondImage}>
				<img src='/shoes/product-page-1.avif' alt='' />
			</div>
			<div className={styles.secondImage}>
				<video
					src='/shoes/video-product-page.mp4'
					loop
					muted
					playsInline
					autoPlay
				/>
			</div>
			<div className={styles.secondImage}>
				<img src='/shoes/product-page-3.avif' alt='' />
			</div>
			<div className={styles.secondImage}>
				<img src='/shoes/product-page-4.avif' alt='' />
			</div>
			{/*  */}
		</div>
	)
}

interface TitleAndDetailsProps {
	stars: number
	title: string
	nameColor: string
	commnets: number
	price: number
}
const TitleAndDetails: React.FC<TitleAndDetailsProps> = ({
	stars,
	title,
	nameColor,
	commnets,
	price,
}) => {
	const starsGenerator = () => {
		const starElements = []
		for (let i = 0; i < stars; i++) {
			starElements.push(
				<img key={i} src={star} alt='' className={styles.star} />,
			)
		}
		return starElements
	}
	return (
		<div className={styles.titleAndDetails}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.colorName}>{nameColor}</p>
			<p className={styles.stars}>
				{starsGenerator()}
				{commnets} Avis
			</p>
			<p className={styles.price}>{price}$</p>
		</div>
	)
}

const CotonAndMaterials = () => {
	return (
		<>
			<div className={styles.coton}>
				<img src='/general/coton.avif' alt='' />
				<p className={styles.cotonText}>Coton recyclé</p>
			</div>
			<div className={styles.materials}>
				<p className={styles.materialsTitle}>
					MATIÉRES NATURELLES ET RECYCLÉES
				</p>
				<ul className={styles.materialList}>
					<li className={styles.materialItem}>
						R-CO - Coton recyclé <span>Respirant, confortable et doux</span>
					</li>
					<li className={styles.materialItem}>
						Conçu pour durer longtemps<span>Tissage canvas robuste</span>
					</li>
					<li className={styles.materialItem}>
						Semelle - Caoutchouc naturel et recyclé
						<span>Souple, antidérapante et confortable</span>
					</li>
					<li className={styles.materialItem}>
						Drytech™
						<span>Semelle intérieure - amovible & ergonomique</span>
					</li>
				</ul>
			</div>
		</>
	)
}
