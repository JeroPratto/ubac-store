import getShoeById from '@/utils/getShoeById'
import { ShoeInterface } from '@/utils/getShoesItems'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ProductPage from '../Products/ProductPage'
import SkeletonProductPage from '../Products/SkeletonProductPage'

export const ProductPageGuard = () => {
	const { id, color } = useParams()
	const [error, setError] = useState<boolean>(false)
	const [product, setProduct] = useState<ShoeInterface | null>(null)
	const [nameColor, setNameColor] = useState<string>('')

	const getNameColor = (product: ShoeInterface) => {
		const foundColor = product!.colorsAvailable.find((availableColor) =>
			availableColor.color.some((c) => c.link === color),
		)
		if (!foundColor) throw new Error('Color not found')
		const colorName = foundColor.color.find((c) => c.link === color)!.name
		return colorName
	}
	useEffect(() => {
		try {
			const product = getShoeById(id, color)
			setProduct(product)
			const name = getNameColor(product)
			setNameColor(name)
		} catch (error) {
			setError(true)
		}
	}, [id, color])

	if (!product && !error) return <SkeletonProductPage />
	else if (error) return <Navigate replace to='/404' />
	else return <ProductPage product={product!} nameColor={nameColor} />
}
