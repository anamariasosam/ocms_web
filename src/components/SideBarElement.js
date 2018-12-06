import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarElement = ({ name, path }) => {
  const active = path.split('/')[2] === window.location.pathname.split('/')[2] ? 'active' : ''
  return (
    <li>
      <NavLink to={path} className={`reset--link ${active}`}>
        {name}
      </NavLink>
    </li>
  )
}

export default SideBarElement
