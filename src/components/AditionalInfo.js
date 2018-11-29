import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const AditionalInfo = ({ data, titles }) => (
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

AditionalInfo.propTypes = {
  titles: PropTypes.array.isRequired,
  data: PropTypes.object,
}

export default AditionalInfo
