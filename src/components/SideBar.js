import React from 'react'
import SideBarElement from './SideBarElement';

const renderElements = (menu) => (
	menu.map(
		element => (
			<SideBarElement
				key={element.name}
				path={element.path}
				name={element.name}
			/>
		)
	)
)

const SideBar = ({ menu }) => {
	return (
		<div className="sidebar--container">
			<h2>Calendario Académico</h2>
			<nav>
				<ul className="sidebar--list">
					{ renderElements(menu) }
				</ul>
			</nav>
		</div>
	)
}

export default SideBar
