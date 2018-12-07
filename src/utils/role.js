import cookie from 'react-cookies'

const setPath = () => {
  const { rol } = cookie.load('user') || ''

  switch (rol) {
    case 'Jefe de Programa':
      return '/calendarioAcademico/gestionarCalendario'
    case 'Estudiante':
      return '/calendarioAcademico/dashboard'
    default:
      return '/login'
  }
}

export default setPath
