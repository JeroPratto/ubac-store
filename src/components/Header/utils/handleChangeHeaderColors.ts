export const setHeaderStyleToDark = () => {
	document.documentElement.style.setProperty('--header-current-color', '#000')
	document.documentElement.style.setProperty('--header-bg-color', '#fff')
}
export const setHeaderStyleToLight = () => {
	document.documentElement.style.setProperty('--header-current-color', '#fff')
	document.documentElement.style.setProperty('--header-bg-color', 'transparent')
}
