import React from 'react'

const Nav = () => (
	<nav>
		<img src={require('../images/logo.png')} alt='logo'/>
		<ul>
			<li><a href="#">Inicio</a></li>
			<li><a href="#">Equipo</a></li>
			<li><a href="#">Contactenos</a></li>
		</ul>
	</nav>
)

export default Nav
