import React from "react";
import { Route } from 'react-router-dom'

import ModuleLayout from '../../../layouts/ModuleLayout'

import Calendar from './Calendar'
import Agenda from './Agenda'
import Event from './Event'

import CalendarForm from './CalendarForm'
import AgendaForm from './AgendaForm'
import EventForm from './EventForm'

const menu = [
  {
    path: '/calendarioAcademico/gestionarCalendario',
    name: 'Gestionar Calendario',
    component: Calendar
  },
  {
    path: '/calendarioAcademico/realizarProgramacion',
    name: 'Realizar programación',
    component: Agenda
  },
  {
    path: '/calendarioAcademico/programarEvento',
    name: 'Programar evento',
    component: Event
  }
]

const forms = [
  {
    path: '/calendarioAcademico/gestionarCalendario/edit',
    component: CalendarForm
  },
  {
    path: '/calendarioAcademico/realizarProgramacion/edit',
    component: AgendaForm
  },
  {
    path: '/calendarioAcademico/programarEvento/edit',
    component: EventForm
  }
]



const AcademicSchedule = () => {
    return (
      <ModuleLayout menu={menu}>
        {
          menu.map(
            element => (
              <Route
                exact
                key={element.name}
                path={element.path}
                component={element.component}
              />
            )
          )
        }
        {
          forms.map(
            element => (
              <Route
                exact
                key={element.path}
                path={element.path}
                component={element.component}
              />
            )
          )
        } 
      </ModuleLayout> 
    )
}

export default AcademicSchedule;
