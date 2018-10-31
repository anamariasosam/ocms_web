import React from 'react'

const LoginForm = () => (
	<div className="login--form">
		<h2 className="login--title">Iniciar Sesión</h2>
		<form action="post">
			<label htmlFor="document" className="required label">Documento:</label>
			<input type="number" id="document" className="input"/>
			<label htmlFor="password" className="required label">Clave:</label>
			<input type="text" id="password" className="input"/>

			<div className="login--controls">
				<a href="/clave" className="login--forgot">Olvidaste tu clave?</a>

				<input type="submit" value="Continuar" className="button"/>
			</div>
		</form>
	</div>
)

export default LoginForm
