import getShoesItems from './getShoesItems'

const getShoeById = (id: string | undefined) => {
	const products = getShoesItems()
	const index = products.findIndex((shoe) => shoe.id === id)
	if (!products[index]) throw new Error('Product not found')
	return products[index]
}

export default getShoeById
