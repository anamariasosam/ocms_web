import React from 'react'

const Nav = () => (
	<nav>
		<img src={require('../images/logo.png')} alt='logo'/>
		<ul>
			<li><a href="/Inicio">Inicio</a></li>
			<li><a href="/Equipo">Equipo</a></li>
			<li><a href="/Contactenos">Contactenos</a></li>
		</ul>
	</nav>
)

export default Nav
