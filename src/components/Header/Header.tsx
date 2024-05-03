import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import HeaderDesktop from './components/HeaderDesktop'
import HeaderMobile from './components/HeaderMobile'
import { Cart } from '../Cart'
import {
	setHeaderStyleToDark,
	setHeaderStyleToLight,
} from './utils/handleChangeHeaderColors'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1180)
	const [onTop, setOnTop] = useState(false)
	const location = useLocation()
	const container = useRef<HTMLDivElement>(null)
	let prevscrollPos = window.scrollY

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1180)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	window.onscroll = function () {
		const currentScrollPos = window.scrollY
		if (prevscrollPos > currentScrollPos) container.current!.style.top = '0'
		else container.current!.style.top = '-100px'
		prevscrollPos = currentScrollPos
	}

	useEffect(() => {
		if (location.pathname === '/') {
			setHeaderStyleToLight()
			window.addEventListener('scroll', inHome)
		} else {
			document.documentElement.style.setProperty(
				'--header-current-color',
				'#000',
			)
			window.addEventListener('scroll', notInHome)
		}
		return () => {
			window.removeEventListener('scroll', inHome)
			window.removeEventListener('scroll', notInHome)
		}
	}, [location])

	const inHome = () => {
		if (window.scrollY > 200) {
			setHeaderStyleToDark()
			setOnTop(true)
		} else {
			setHeaderStyleToLight()
			setOnTop(false)
		}
	}
	const notInHome = () => {
		if (window.scrollY > 200) {
			setHeaderStyleToDark()
			setOnTop(true)
		} else {
			document.documentElement.style.setProperty(
				'--header-bg-color',
				'transparent',
			)
			document.documentElement.style.setProperty(
				'--header-current-color',
				'#000',
			)
			setOnTop(false)
		}
	}
	const toTop = () => window.scrollTo(0, 0)
	return (
		<div
			className={`${styles.container} ${onTop ? styles.onTop : ''}`}
			ref={container}
		>
			<Cart />
			<Link
				to='/'
				className={styles.logo}
				aria-label='Go to login page'
				onClick={toTop}
			>
				UBAC
			</Link>
			{!isMobile && <HeaderDesktop />}
			{isMobile && <HeaderMobile />}
			<p className={styles.changeLanguage}>EN</p> {/*Solo desktop*/}
		</div>
	)
}

export default Header
