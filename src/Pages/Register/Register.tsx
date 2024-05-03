import React, { useState } from 'react'
import styles from '../Login/Login.module.css'
import { Link } from 'react-router-dom'
import loadingImg from '/icons/loading.svg'

const Register: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const handleRegister = (event: React.FormEvent) => {
		event.preventDefault()
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}
	return (
		<div className={styles.setup}>
			<div className={styles.container}>
				<h1 className={styles.title}>Créer mon compte</h1>
				<div className={styles.links}>
					<Link to='/login'>Connexion</Link>
					<Link to='/register' className={styles.current}>
						Inscription
					</Link>
				</div>
				<form className={styles.form} onSubmit={handleRegister}>
					<Input type='name' placeholder='Prénom' />
					<Input type='text' placeholder='Nom' />
					<Input type='email' placeholder='Adresse email' />
					<Input type='password' placeholder='Mot de passe' />
					<Input type='password' placeholder='Conformez votre mot de passe' />
					<button className={styles.sendForm} type='submit'>
						{loading ? (
							<img src={loadingImg} alt='Loading' />
						) : (
							'Créer mon compte'
						)}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register

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
