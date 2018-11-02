import React from 'react'

const CalendarInfo = ({ calendar }) => {
	const { id, startDate, endDate } = calendar
	
	return(
		<nav className="calendarInfo--container">
			<ul className="calendarInfo--list">
				<li>
					<h3>Periodo</h3>
					<span className="box">{id}</span>
				</li>
				<li>
					<h3>Fecha Inicio</h3>
					<span className="box">{startDate}</span>
				</li>
				<li>
					<h3>Fecha Fin</h3>
					<span className="box">{endDate}</span>
				</li>
			</ul>
		</nav>
	)
}

export default CalendarInfo
