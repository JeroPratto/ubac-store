import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import loadingImg from '/icons/loading.svg'

const Login: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault()
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}
	return (
		<div className={styles.setup}>
			<div className={styles.container}>
				<h1 className={styles.title}>Mon compte</h1>
				<div className={styles.links}>
					<Link to='/login' className={styles.current}>
						Connexion
					</Link>
					<Link to='/register'>Inscription</Link>
				</div>
				<form className={styles.form} onSubmit={handleLogin}>
					<Input type='email' placeholder='Adresse email' />
					<Input type='password' placeholder='Mot de passe' />
					<p className={styles.forgot}>Password oublié?</p>
					<button className={styles.sendForm} type='submit'>
						{loading ? <img src={loadingImg} alt='Loading' /> : 'Se connecter'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login

const Input = ({
	type,
	placeholder,
}: {
	type: string
	placeholder: string
}) => {
	const [value, setValue] = useState('')
	const [isTyped, setIsTyped] = useState(false)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const typedValue = event.target.value
		setValue(typedValue)
		setIsTyped(!!typedValue.trim())
	}
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`${styles.input} ${isTyped ? styles.typed : ''}`}
			onChange={handleChange}
			value={value}
			required
		/>
	)
}
