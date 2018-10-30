import React from 'react'

const Nav = () => (
	<nav className="nav--container">
		<img 
			src={require('../images/logo.png')}
			alt='logo'
		/>
		<ul className="nav--list">
			<li><a href="/Inicio">Inicio</a></li>
			<li><a href="/Equipo">Equipo</a></li>
			<li><a href="/Contactenos">Contáctenos</a></li>
		</ul>
	</nav>
)

export default Nav
