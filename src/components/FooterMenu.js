import React from 'react'

const FooterMenu = () => {
  return (
    <div className="footer--container">
      <div>
        <img src={require('../images/partner.png')} alt="logo"/>
      </div>
      <div>
        <ul className="footer--menu">
          <li>OCMS</li>
          <li>Ir a inicio</li>
          <li>Acceso a mi cuenta</li>
          <li>Acerca del proyecto</li>
        </ul>
      </div>
      <div>
        <ul className="footer--menu">
          <li>Actas</li>
          <li>Lista de actas</li>
          <li>Otra opcion</li>
        </ul>
      </div>
      <div>
        <ul className="footer--menu">
          <li>Contacto</li>
          <li>
            <img 
              src={require("../images/icon_mail.png")}
              alt="email" 
              className="footer--icon"
            />
            <a 
              href="ocms@udem.edu.co"
              target="_blank"
              className="footer--link"
            > 
              ocms@udem.edu.co
            </a>
          </li>
          <li>
            <img 
              src={require("../images/icon_home.png")}
              alt="home" 
              className="footer--icon"
            />
            <a 
              href="https://www.udem.edu.co"
              target="_blank"
              className="footer--link"
            > 
              www.udem.edu.co
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterMenu
