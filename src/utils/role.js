import cookie from 'react-cookies'
import { adminMenu } from '../pages/AcademicSchedule/routes/admin'
import { estudianteMenu } from '../pages/AcademicSchedule/routes/estudiante'

const setPath = () => {
  const { rol } = cookie.load('user') || ''

  switch (rol) {
    case 'Jefe de Programa':
      return adminMenu[0].path
    case 'Estudiante':
      return estudianteMenu[0].path
    default:
      return '/login'
  }
}

export default setPath
