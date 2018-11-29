import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ModuleLayout from '../../../layouts/ModuleLayout'

import Calendar from './Calendar'
import Agenda from './Agenda'
import Event from './Event'
import BigCalendar from './BigCalendar'

import CalendarCreateForm from './CalendarCreateForm'
import AgendaCreateForm from './AgendaCreateForm'
import EventCreateForm from './EventCreateForm'

import CalendarEditForm from './CalendarEditForm'
import AgendaEditForm from './AgendaEditForm'
import EventEditForm from './EventEditForm'

const currentYear = new Date().getFullYear()

const menu = [
  {
    path: '/calendarioAcademico/gestionarCalendario',
    name: 'Gestionar Calendario',
  },
  {
    path: `/calendarioAcademico/realizarProgramacion/show/${currentYear}-1`,
    name: 'Realizar programación',
  },
  {
    path: `/calendarioAcademico/programarEvento/show/${currentYear}-1-1`,
    name: 'Programar evento',
  },
]

const routes = [
  {
    path: '/calendarioAcademico/gestionarCalendario',
    component: Calendar,
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/show/:semestre',
    component: Agenda,
  },
  {
    path: '/calendarioAcademico/programarEvento/show/:nombre',
    component: Event,
  },
  {
    path: '/calendarioAcademico/gestionarCalendario/edit/:semestre',
    component: CalendarEditForm,
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/edit/:nombre',
    component: AgendaEditForm,
  },
  {
    path: '/calendarioAcademico/programarEvento/edit/:nombre/',
    component: EventEditForm,
  },
  {
    path: '/calendarioAcademico/gestionarCalendario/create',
    component: CalendarCreateForm,
  },
  {
    path: '/calendarioAcademico/programarEvento/create',
    component: EventCreateForm,
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/create',
    component: AgendaCreateForm,
  },
  {
    path: '/calendarioAcademico/ver/:programacionNombre/:eventoNombre',
    component: BigCalendar,
  },
]

const AcademicSchedule = () => (
  <ModuleLayout menu={menu}>
    <Switch>
      {routes.map(element => (
        <Route exact key={element.path} path={element.path} component={element.component} />
      ))}
    </Switch>
  </ModuleLayout>
)

export default AcademicSchedule
