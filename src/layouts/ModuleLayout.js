import React from "react";
import SideBar from '../components/SideBar'

const ModuleLayout = ({ children, menu }) => {
  return (
    <div className="module--content">
      <SideBar menu={menu}/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ModuleLayout;
