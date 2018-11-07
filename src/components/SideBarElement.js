import React from "react";
import { Link } from "react-router-dom";

const SideBarElement = ({ name, path }) => {
  const active =
    path.split("/")[2] === window.location.pathname.split("/")[2]
      ? "active"
      : "";
  return (
    <li>
      <Link to={path} className={`reset--link ${active}`}>
        {name}
      </Link>
    </li>
  );
};

export default SideBarElement;
