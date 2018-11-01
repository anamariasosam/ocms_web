import React from 'react'
import { Link } from 'react-router-dom'

const PasswordForm = () => (
	<div className="login--form">
		<h2 className="form--title">Recuperar clave</h2>
		<p>
			No te preocupes...
			<br/>
			Te enviaremos una nueva clave a tu cuenta de correo
		</p>
		<form action="post">
			<label htmlFor="password" className="required label">Email:</label>
			<input type="text" id="password" className="input"/>

			<div className="form--controls">
				<Link to="/login" className="form--link reset--link">Iniciar Sesión</Link>

				<input type="submit" value="Continuar" className="button"/>
			</div>
		</form>
	</div>
)

export default PasswordForm
