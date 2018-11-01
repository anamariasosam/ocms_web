import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


const NoMatch = () => {
  return (
    <Fragment>
      <h1>Ups!</h1>
      <p>La ruta solicitada no fue encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </Fragment>
  )
}

export default NoMatch
