import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarElement = ({ name, path }) => {
  return (
    <li>
      <NavLink to={path} className="reset--link" activeClassName="active">
        {name}
      </NavLink>
    </li>
  )
}

export default SideBarElement
