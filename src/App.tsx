import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import { Home } from './Pages/Home'
import { Nouveautes } from './Pages/Nouveautes'
import { ProductPageGuard } from './Pages/utils/ProductPageGuard'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useCartStore } from './store/cartStore'

function App() {
	const { statusSynchronizer } = useCartStore()
	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === 'products') {
				statusSynchronizer()
			}
		}
		window.addEventListener('storage', handleStorageChange)
		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	})
	const Login = lazy(() => import('./Pages/Login/Login'))
	const Register = lazy(() => import('./Pages/Register/Register'))
	const Homme = lazy(() => import('./Pages/Homme/Homme'))
	const Femme = lazy(() => import('./Pages/Femme/Femme'))

	return (
		<BrowserRouter>
			<Suspense>
				<ScrollTop />
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/femme' element={<Femme />} />
					<Route path='/homme' element={<Homme />} />
					<Route path='/nouveautes' element={<Nouveautes />} />
					<Route path='/products/:id/:color' element={<ProductPageGuard />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</Suspense>
		</BrowserRouter>
	)
}

export default App

const ScrollTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}
