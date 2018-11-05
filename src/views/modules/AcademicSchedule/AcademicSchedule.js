import React from "react";
import { Route } from 'react-router-dom'

import ModuleLayout from '../../../layouts/ModuleLayout'

import Calendar from './Calendar'
import Agenda from './Agenda'
import Event from './Event'

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

const AcademicSchedule = () => {
    return (
      <ModuleLayout menu={menu}>
        {
          menu.map(
            element => (
              <Route
                key={element.name}
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
