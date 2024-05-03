import { BasicShoe } from '@/components/Cart/components/ItemCart'
import { create } from 'zustand'

interface State {
	products: BasicShoe[]
	totalPrice: number
	updateTotalPrice: (price: number) => void
	updateProducts: (products: BasicShoe[]) => void
	statusSynchronizer: () => void
	addProduct: (product: BasicShoe) => void
	deleteProduct: (id: string) => void
	addQuantity: (id: string) => void
	lessQuantity: (id: string) => void
}
const initialProducts = (): BasicShoe[] => {
	const products = localStorage.getItem('products')
	if (products === null) return []
	else return JSON.parse(products)
}
const initialTotalPrice = () => {
	const totalPrice = localStorage.getItem('total-price')
	if (totalPrice === null) return 0
	else return JSON.parse(totalPrice)
}

export const useCartStore = create<State>((set) => ({
	products: initialProducts(),
	totalPrice: initialTotalPrice(),
	updateTotalPrice: (price: number) => {
		localStorage.setItem('total-price', JSON.stringify(price))
		set({ totalPrice: price })
	},
	updateProducts: (products: BasicShoe[]) => {
		localStorage.setItem('products', JSON.stringify(products))
	},
	statusSynchronizer: () => {
		const preProducts = localStorage.getItem('products')
		const prePrice = localStorage.getItem('total-price')
		if (preProducts && prePrice) {
			const newProducts = JSON.parse(preProducts)
			const newPrice = JSON.parse(prePrice)
			set({ products: newProducts, totalPrice: newPrice })
		}
	},
	addProduct: (product: BasicShoe) => {
		set((state) => {
			const storedProducts = localStorage.getItem('products')
			const index = state.products.findIndex((shoe) => shoe.id === product.id)
			let currentPrice = state.totalPrice
			// product exist
			if (index != -1) {
				const currentProducts = JSON.parse(storedProducts!)
				currentProducts[index].cant++
				currentPrice += currentProducts[index].price
				state.updateTotalPrice(currentPrice)
				state.updateProducts(currentProducts)
				return { products: currentProducts }
			} else {
				let newProducts
				if (storedProducts) {
					newProducts = [product, ...JSON.parse(storedProducts)]
				} else {
					newProducts = [product]
				}
				state.updateTotalPrice(state.totalPrice + product.price)
				state.updateProducts(newProducts)
				return { products: newProducts }
			}
		})
	},
	deleteProduct: (id: string) => {
		set((state) => {
			const index = state.products.findIndex((shoe) => shoe.id === id)
			const newProducts = state.products
			const newPrice =
				state.totalPrice - newProducts[index].cant * newProducts[index].price
			state.updateTotalPrice(newPrice)

			newProducts.splice(index, 1)
			state.updateProducts(newProducts)
			return { products: newProducts }
		})
	},
	addQuantity: (id: string) => {
		set((state) => {
			const index = state.products.findIndex((shoe) => shoe.id === id)
			const newProducts = state.products
			newProducts[index].cant++
			const newPrice = state.totalPrice + newProducts[index].price
			state.updateTotalPrice(newPrice)
			state.updateProducts(newProducts)
			return { products: newProducts }
		})
	},
	lessQuantity: (id: string) => {
		set((state) => {
			const index = state.products.findIndex((shoe) => shoe.id === id)
			const newProducts = state.products
			newProducts[index].cant--
			const newPrice = state.totalPrice - newProducts[index].price
			state.updateTotalPrice(newPrice)
			state.updateProducts(newProducts)
			return { products: newProducts }
		})
	},
}))
