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
			const product = getShoeById(id)
			setProduct(product)
			const name = getNameColor(product)
			setNameColor(name)
		} catch (error) {
			setError(true)
		}
	}, [])

	if (!product) return <SkeletonProductPage />

	return error ? (
		<Navigate replace to='/404' />
	) : (
		<ProductPage product={product!} nameColor={nameColor} />
	)
}
