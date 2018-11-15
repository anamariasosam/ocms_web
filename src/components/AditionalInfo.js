import React from 'react'

const AditionalInfo = ({ data, titles }) => {
  const labels = Object.keys(data)
  labels.shift()
  labels.pop()
  return (
    <nav className="calendarInfo--container">
      <ul className="calendarInfo--list">
        {labels.map((label, index) => (
          <li key={label}>
            <h3>{titles[index]}</h3>
            <span className="box">{data[label].split('T')[0]}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AditionalInfo
