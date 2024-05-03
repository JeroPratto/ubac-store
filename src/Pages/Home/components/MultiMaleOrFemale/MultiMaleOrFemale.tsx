import { Link } from 'react-router-dom'
import styles from './MultiMaleOrFemale.module.css'

const MultiMaleOrFemale = () => {
	const items = itemsInformation()
	return (
		<div className={styles.container}>
			{items.map((item, index) => (
				<CommonItem {...item} key={index} />
			))}
			<VisionItem />
		</div>
	)
}

export default MultiMaleOrFemale

interface CommonItemProps {
	desktopImage: string
	mobileImage: string
	pre: string
	title: string
}
const CommonItem: React.FC<CommonItemProps> = ({
	desktopImage,
	mobileImage,
	pre,
	title,
}) => {
	return (
		<div className={styles.item}>
			<picture>
				<source srcSet={mobileImage} media='(max-width:760px)' />
				<img src={desktopImage} alt='' className={styles.bgImage} />
			</picture>
			<div className={styles.titleAndPre}>
				<p className={styles.pre}>{pre}</p>
				<h3 className={styles.title}>{title}</h3>
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
const VisionItem = () => {
	return (
		<div className={styles.item}>
			<picture>
				<source srcSet={'/home/vision-mobile.avif'} media='(max-width:760px)' />
				<img src={'/home/vision.avif'} alt='' className={styles.bgImage} />
			</picture>
			<div className={styles.titleAndPre}>
				<h3 className={styles.title}>VISION</h3>
			</div>
			<div className={styles.visionLinkContainer}>
				<Link to='#' className={styles.link}>
					Découvir
				</Link>
			</div>
		</div>
	)
}

const itemsInformation = () => {
	const data = [
		{
			desktopImage: '/home/koto.avif',
			mobileImage: '/home/koto-mobile.avif',
			pre: 'COTON RECYCLÉ - CANVAS ROBUSTE',
			title: 'KOTO',
		},
		{
			desktopImage: '/home/vola.avif',
			mobileImage: '/home/vola-mobile.avif',
			pre: 'LAINE RECYCLÉE - ULTRA CONFORTABLE',
			title: 'VOLA',
		},
		{
			desktopImage: '/home/axolo.avif',
			mobileImage: '/home/axolo-mobile.avif',
			pre: 'CAOUTCHOUC RECYCLÉ - IMPERMÉABLE',
			title: 'AXOLO R-SKIN',
		},
	]
	return data
}
