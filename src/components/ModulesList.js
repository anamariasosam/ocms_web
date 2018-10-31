import React from 'react'

import ModuleItem from './ModuleItem'

const modules = [
	{
		name: "Gestión Curricular",
		image: require('../images/Book.png')
	},
	{
		name: "Banco de proyectos",
		image: require('../images/Bank.png')
	},
	{
		name: "Calendario Académico",
		image: require('../images/Calendar.png')
	},
	{
		name: "Orientación Académica",
		image: require('../images/Dashboard.png')
	},
	{
		name: "Redes Sociales",
		image: require('../images/Message.png')
	},
]


const ModulesList = () => (
	<nav className="modules--menu">
		{
			modules.map(module => (
				<ModuleItem
					key={module.name} 
					module={module}
				/>
			))
		}
	</nav>
)

export default ModulesList
