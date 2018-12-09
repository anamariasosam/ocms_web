import Dashboard from '../Estudiante/Dashboard'
import Calendar from '../Estudiante/Calendar'

export const estudianteMenu = [
  {
    path: '/calendarioAcademico/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/calendarioAcademico/calendario',
    name: 'Calendario',
  },
]

export const estudianteRoutes = [
  {
    path: '/calendarioAcademico/dashboard',
    component: Dashboard,
  },
  {
    path: '/calendarioAcademico/calendario',
    component: Calendar,
  },
]
