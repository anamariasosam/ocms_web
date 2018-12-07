import cookie from 'react-cookies'

import { adminMenu, adminRoutes } from './admin'
import { estudianteMenu, estudianteRoutes } from './estudiante'

const { rol } = cookie.load('user') || ''

var menu = []
var routes = []

switch (rol) {
  case 'Jefe de Programa':
    menu = adminMenu
    routes = adminRoutes
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
