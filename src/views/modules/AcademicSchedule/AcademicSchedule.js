import React, { Component } from "react";
import { Route } from 'react-router-dom'

import ModuleLayout from '../../../layouts/ModuleLayout'

import Calendar from './Calendar'
import Event from './Event'
import Agenda from './Agenda'

const menu = [
  {
    path: '/calendarioAcademico/gestionarCalendario',
    name: 'Gestionar Calendario',
    component: Calendar
  },
  {
    path: '/calendarioAcademico/programarEvento',
    name: 'Realizar programación',
    component: Event
  },
  {
    path: '/calendarioAcademico/realizarProgramacion',
    name: 'Programar evento',
    component: Agenda
  }
]

const AcademicSchedule = () => {
    return (
      <ModuleLayout menu={menu}>
        {
          menu.map(
            element => (
              <Route 
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
