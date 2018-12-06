import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const AditionalInfo = ({ data, titles }) => {
  return (
    <nav className="calendarInfo--container">
      <ul className="calendarInfo--list">
        {titles.map(title => {
          const key = title.replace(/\s/g, '')
          const value =
            title.split(' ')[0] === 'fecha' ? moment(data[key]).format('MMMM D YYYY') : data[key]
          return (
            <li key={title}>
              <h3>{title}</h3>
              <span className="box">{value}</span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

AditionalInfo.propTypes = {
  data: PropTypes.any.isRequired,
  titles: PropTypes.any.isRequired,
}

export default AditionalInfo
