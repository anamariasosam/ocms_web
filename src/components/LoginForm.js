import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <div className="form--container">
    <h2 className="form--title">Iniciar Sesión</h2>
    <form action="post">
      <label htmlFor="document" className="required label">
        Documento:
      </label>
      <input type="number" id="document" className="input" />
      <label htmlFor="password" className="required label">
        Clave:
      </label>
      <input type="text" id="password" className="input" />

      <div className="form--controls">
        <Link to="/recuperarClave" className="form--link reset--link">
          Olvidaste tu clave?
        </Link>
        <input type="submit" value="Continuar" className="button" />
      </div>
    </form>
  </div>
);

export default LoginForm;
