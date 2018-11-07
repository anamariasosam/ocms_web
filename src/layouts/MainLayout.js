import React, { Fragment } from "react";
import ModulesList from "../components/ModulesList";

const MainLayout = ({ children }) => (
  <Fragment>
    <div className="main--content">{children}</div>
    <ModulesList />
  </Fragment>
);

export default MainLayout;
