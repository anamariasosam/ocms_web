import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => (
  <div className="login--header">
    <span className="login--welcome">Bienvenido</span>
    <span className="login--pipe">|</span>
    <Link to="/login" className="login--link reset--link">
      Iniciar Sesión
    </Link>
  </div>
);

export default LoginHeader;
