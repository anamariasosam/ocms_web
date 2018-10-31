import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
	<nav className="nav--container">
		<img 
			src={require('../images/logo.png')}
			alt='logo'
		/>
		<ul className="nav--list">
			<li><Link to="/" className="footer--link">Inicio</Link></li>
			<li>Equipo</li>
			<li>Contáctenos</li>
		</ul>
	</nav>
)

export default Nav
