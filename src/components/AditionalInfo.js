import React from 'react'
import PropTypes from 'prop-types'

const AditionalInfo = ({ data, titles }) => (
  <nav className="calendarInfo--container">
    <ul className="calendarInfo--list">
      {titles.map(title => {
        const key = title.replace(/\s/g, '')
        return (
          <li key={title}>
            <h3>{title}</h3>
            <span className="box">{data[key]}</span>
          </li>
        )
      })}
    </ul>
  </nav>
)

AditionalInfo.propTypes = {
  titles: PropTypes.array.isRequired,
  data: PropTypes.object,
}
AditionalInfo.defaultProps = {
  data: {
    nombre: '',
    fechaInicio: '',
    fechaFin: '',
    tipo: '',
  },
}

export default AditionalInfo
