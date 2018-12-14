import cookie from 'react-cookies'
import { jefeDeProgramaMenu } from '../pages/AcademicSchedule/routes/jefeDePrograma'
import { estudianteMenu } from '../pages/AcademicSchedule/routes/estudiante'

const setPath = () => {
  const { rol } = cookie.load('user') || ''

  switch (rol) {
    case 'Jefe de Programa':
      return jefeDeProgramaMenu[0].path
    case 'Estudiante':
      return estudianteMenu[0].path
    default:
      return '/login'
  }
}

export default setPath
