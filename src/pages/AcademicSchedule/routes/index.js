import cookie from 'react-cookies'

import { jefeDeProgramaMenu, jefeDeProgramaRoutes } from './jefeDePrograma'
import { estudianteMenu, estudianteRoutes } from './estudiante'

const { rol } = cookie.load('user') || ''

var menu = []
var routes = []

switch (rol) {
  case 'Jefe de Programa':
    menu = jefeDeProgramaMenu
    routes = jefeDeProgramaRoutes
    break
  case 'Estudiante':
    menu = estudianteMenu
    routes = estudianteRoutes
    break
  default:
    menu = []
    routes = []
    break
}

export { menu, routes }
