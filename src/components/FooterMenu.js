import React from 'react'

const FooterMenu = () => {
  return (
    <div>
      <div>
        <img src={require('../images/partner.png')} alt="logo"/>
      </div>
      <div>
        <ul>
          <li>OCMS</li>
          <li>Ir a inicio</li>
          <li>Acceso a mi cuenta</li>
          <li>Acerca del proyecto</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Actas</li>
          <li>Lista de actas</li>
          <li>Otra opcion</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contacto</li>
          <li>ocms@udem.edu.co</li>
          <li>www.udem.edu.co</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterMenu
