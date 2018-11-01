import React, { Fragment } from 'react'

const Module = ({ location }) => {
  return (
		<Fragment>
      <h1>{location.state.module.name}</h1>
      <p>Módulo en proceso...</p>
    </Fragment>
  )
}

export default Module
