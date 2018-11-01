import React, { Fragment } from 'react'
import { modules } from '../../data/data'

const moduleData = (moduleName) => (
  modules.filter( 
    modulo => (modulo.slug === moduleName)
  )[0]
)

const Module = ({ match }) => {
  const moduleName = match.url.split("/").pop()
  const { name } = moduleData(moduleName)
  return (
		<Fragment>
      <h1>{name}</h1>
      <p>Módulo en proceso...</p>
    </Fragment>
  )
}

export default Module
