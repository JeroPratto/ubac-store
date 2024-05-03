import React, { useState } from 'react'
import styles from './EcologicalShoes.module.css'
import plus from '/icons/plus.svg'
import less from '/icons/less.svg'
export type EcologicalShoesProps = {
	title: string
}

const EcologicalShoes: React.FC<EcologicalShoesProps> = ({ title }) => {
	const [open, setOpen] = useState(false)
	const toggleState = () => setOpen(!open)
	return (
		<div className={styles.setup}>
			<div className={styles.container}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.desc}>
					Depuis sa création, Ubac a à cœur de concevoir des baskets
					éco-responsables en matières naturelles et recyclées.
				</p>
				<div className={`${styles.containerText} ${open ? styles.open : ''}`}>
					<Text />
				</div>
				<div className={styles.containerButton}>
					<button
						className={styles.btn}
						onClick={toggleState}
						aria-label={open ? 'see less information' : 'see more information'}
					>
						<img src={open ? less : plus} alt='' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default EcologicalShoes

const Text = () => {
	return (
		<p className={styles.text}>
			Dans une démarche éthique, soucieuse de l’environnement et du bien-être
			humain, nous faisons fabriquer nos chaussures dans des ateliers
			d’excellence au Portugal, avec de la laine recyclée en France, du chanvre
			dans la collection Kana et d’autres matériaux à faible impact
			environnemental. Ici, vous trouverez des baskets éthiques pour femme. Ubac
			propose également une gamme de baskets éco-responsable pour homme.
			<br />
			<br />
			L’environnement de la mode et des chaussures est souvent noir ou plein de
			marques font du green washing à des prix indécents. Il est, généralement
			opaque pour cacher la manière dont nos jeans, nos sneakers et nos baskets
			ou nos chaussures de toutes tailles sont produites, souvent au prix de
			l’environnement et des conditions sociales, comme avec le cuir et le
			plastique. Sneakers cuir ou dans d’autres matériaux peu éco-responsables,
			il est rare de trouver des baskets éco-friendly et vegan dans toutes les
			tailles. Chez Ubac, nous cherchons plutôt à faire partie des marques
			éthiques promouvant une mode éco-responsable en France et en Europe pour
			proposer des baskets alternatives au prix juste, du 35 au 46 .
			<br />
			<br />
			Bienvenue dans un monde où les baskets peuvent être en matières d’origine
			animale, mais aussi vegan et toujours made in Europe : pas de baskets
			cuir, mais des chaussures dont la fabrication est respectueuse de
			l’environnement et ecoresponsable. Bienvenue dans un monde de baskets
			basses, hautes, colorées (du blanc au noir, en passant par toutes les
			couleurs de l’arc-en-ciel), en matières naturelles, vegan et recyclées.
			Bienvenue dans un monde de baskets résistantes, confortables qui vous
			accompagneront bien des journées. Laissez vous séduire par des chaussures
			en matières naturelles, recyclées ou vegan en toutes tailles. Les
			chaussures éthiques dont vous rêviez sont là !
			<br />
			<br />
			Vous cherchez des baskets éco-responsables, vegan, sans cuir et avec une
			origine éthique pour parfaire vos looks les journées comme en soirée et
			dans toutes les tailles ? Que ce soit noir, blanc, coloré, naturel ou
			recyclé, chez Ubac, nous vous proposons un grand choix de sneakers basses
			disponibles sur notre site, trouvez la paire et les tailles de vos rêves
			pour des chaussures confortables.
			<br />
			<br />
			Ubac est une marque de sneakers éco-responsables, en matières recyclées et
			éthiques. Nos paires de baskets sont des produits en matériaux respectueux
			de la Terre : semelle caoutchouc recyclé, toile en coton recyclé, laine
			recyclée, ou chanvre, sans cuir et peu de plastique. Chaque modèle de
			basket est pensé dans une démarche éco-responsable.
			<br />
			<br />
			Nos produits sont Made in France ou Made In Portugal dans une démarche
			éthique. Ubac recycle sa laine en France, dans le Tarn, une matière
			innovante qui n’a pas besoin de re-teinture, et vu la valeur de l’eau, ça
			n’a pas de prix.
			<br />
			<br />
			Les baskets éco-responsables Vola, Terra, Terra V et Vola H sont les
			marques de fabrique de Ubac. Constituées de laine recyclée Made in France
			et assemblées au Portugal, avec une semelle éco-responsable en Green EVA
			ou en caoutchouc recyclé et des lacets en plastique recyclé. Elles sont
			fabriquées au Portugal pour vous garantir des baskets éthiques, recyclées,
			responsables, à un prix juste et avec des matériaux à faible impact.
			<br />
			<br />
			Nous élargissons notre collection de produits avec des baskets en coton.
			Le modèle Koto est en toile de coton recyclé, avec une semelle en
			caoutchouc recyclé et des lacets en plastique recyclé, ce qui en fait une
			sneakers vegan sans cuir. Nous proposons des baskets intemporelles,
			robustes pour les personnes qui cherchent à consommer de façon éthique et
			à trouver de bonnes chaussures.
			<br />
			<br />
			Autre modèle de baskets vegan et éco-responsable : Kana, une basket tout
			aussi responsable à base de toile de chanvre, de lin, de caoutchouc et de
			plastique recyclé.
			<br />
			<br />
			Nos produits sont faits pour durer, être intemporels et dans des matériaux
			robustes, aussi résistants qu’un bon cuir et avec un prix réfléchi.
			<br />
			<br />
			Le but de Ubac : réinventer la mode responsable en créant des baskets à
			partir de toile, de semelles et de lacets recyclés ou naturels. Des
			chaussures qui accompagneront tous vos looks de journées ou de soirées. Si
			vous cherchez des marques de chaussures éthiques et responsables, vous
			êtes bien tombé.e.s chez Ubac.
		</p>
	)
}
