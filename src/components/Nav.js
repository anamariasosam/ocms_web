import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav--container">
    <Link to="/" className="reset--link">
      <img src={require("../images/logo.png")} alt="logo" />
    </Link>
    <ul className="nav--list">
      <li>
        <Link to="/" className="reset--link">
          Inicio
        </Link>
      </li>
      <li>Equipo</li>
      <li>Contáctenos</li>
    </ul>
  </nav>
);

export default Nav;
