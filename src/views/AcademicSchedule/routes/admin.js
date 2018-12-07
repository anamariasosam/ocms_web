import Calendar from '../JefeDePrograma/Calendar/Calendar'
import Agenda from '../JefeDePrograma/Agenda/Agenda'
import Event from '../JefeDePrograma/Event/Event'
import BigCalendar from '../BigCalendar'

import CalendarCreateForm from '../JefeDePrograma/Calendar/CalendarCreateForm'
import AgendaCreateForm from '../JefeDePrograma/Agenda/AgendaCreateForm'
import EventCreateForm from '../JefeDePrograma/Event/EventCreateForm'

import CalendarEditForm from '../JefeDePrograma/Calendar/CalendarEditForm'
import AgendaEditForm from '../JefeDePrograma/Agenda/AgendaEditForm'
import EventEditForm from '../JefeDePrograma/Event/EventEditForm'

const currentYear = new Date().getFullYear()

export const adminMenu = [
  {
    path: '/calendarioAcademico/gestionarCalendario',
    name: 'Calendarios',
  },
  {
    path: `/calendarioAcademico/realizarProgramacion/show/${currentYear}-1`,
    name: 'Programaciones',
  },
  {
    path: `/calendarioAcademico/programarEvento/show/${currentYear}-1-1`,
    name: 'Eventos',
  },
]

export const adminRoutes = [
  {
    path: '/calendarioAcademico/gestionarCalendario',
    component: Calendar,
  },
  {
    path: '/calendarioAcademico/gestionarCalendario/create',
    component: CalendarCreateForm,
  },
  {
    path: '/calendarioAcademico/gestionarCalendario/edit/:semestre',
    component: CalendarEditForm,
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/show/:semestre',
    component: Agenda,
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/create',
    component: AgendaCreateForm,
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/edit/:nombre',
    component: AgendaEditForm,
  },
  {
    path: '/calendarioAcademico/programarEvento/show/:nombre',
    component: Event,
  },
  {
    path: '/calendarioAcademico/programarEvento/create',
    component: EventCreateForm,
  },
  {
    path: '/calendarioAcademico/programarEvento/edit/:nombre/',
    component: EventEditForm,
  },
  {
    path: '/calendarioAcademico/ver/:programacionNombre/:eventoNombre',
    component: BigCalendar,
  },
]
