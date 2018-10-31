import React from 'react'

import ModuleItem from './ModuleItem'

const modules = [
	{
		name: "Gestion Curricular",
		image: require('../images/Book.png')
	},
	{
		name: "Banco de proyectos",
		image: require('../images/Bank.png')
	},
	{
		name: "Calendario Academico",
		image: require('../images/Calendar.png')
	},
	{
		name: "Orientacion Academica",
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
