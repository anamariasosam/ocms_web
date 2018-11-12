import React from 'react'
import SideBar from '../components/SideBar'

const ModuleLayout = ({ children, menu }) => (
  <div className="module--content">
    <SideBar menu={menu} />
    <div className="module--children">{children}</div>
  </div>
)

export default ModuleLayout
