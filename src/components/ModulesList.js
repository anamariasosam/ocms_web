import React from 'react'

import ModuleItem from './ModuleItem'

const modules = [
	{
		name: "Gestión Curricular",
		image: require('../images/Book.png'),
		slug: "gestionCurricular"
	},
	{
		name: "Banco de proyectos",
		image: require('../images/Bank.png'),
		slug: "bancoDeProyectos"
	},
	{
		name: "Calendario Académico",
		image: require('../images/Calendar.png'),
		slug: "calendarioAcademico"
	},
	{
		name: "Orientación Académica",
		image: require('../images/Dashboard.png'),
		slug: "orientacionAcademica"
	},
	{
		name: "Redes Sociales",
		image: require('../images/Message.png'),
		slug: "redesSociales"
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
