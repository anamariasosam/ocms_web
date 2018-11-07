import React from "react";
import { Route } from "react-router-dom";

import ModuleLayout from "../../../layouts/ModuleLayout";

import Calendar from "./Calendar";
import Agenda from "./Agenda";
import Event from "./Event";

import CalendarCreateForm from "./CalendarCreateForm";
import AgendaCreateForm from "./AgendaCreateForm";
import EventCreateForm from "./EventCreateForm";

import CalendarEditForm from "./CalendarEditForm";
import AgendaEditForm from "./AgendaEditForm";
import EventEditForm from "./EventEditForm";

const menu = [
  {
    path: "/calendarioAcademico/gestionarCalendario",
    name: "Gestionar Calendario"
  },
  {
    path: "/calendarioAcademico/realizarProgramacion",
    name: "Realizar programación"
  },
  {
    path: "/calendarioAcademico/programarEvento",
    name: "Programar evento"
  }
];

const routes = [
  {
    path: "/calendarioAcademico/gestionarCalendario",
    component: Calendar
  },
  {
    path: "/calendarioAcademico/realizarProgramacion",
    component: Agenda
  },
  {
    path: "/calendarioAcademico/programarEvento",
    component: Event
  },
  {
    path: "/calendarioAcademico/gestionarCalendario/edit/:id",
    component: CalendarEditForm
  },
  {
    path: "/calendarioAcademico/realizarProgramacion/edit/:id",
    component: AgendaEditForm
  },
  {
    path: "/calendarioAcademico/programarEvento/edit/:id/",
    component: EventEditForm
  },
  {
    path: "/calendarioAcademico/gestionarCalendario/create",
    component: CalendarCreateForm
  },
  {
    path: "/calendarioAcademico/realizarProgramacion/create",
    component: AgendaCreateForm
  },
  {
    path: "/calendarioAcademico/programarEvento/create",
    component: EventCreateForm
  }
];

const AcademicSchedule = () => {
  return (
    <ModuleLayout menu={menu}>
      {routes.map(element => (
        <Route
          exact
          key={element.path}
          path={element.path}
          component={element.component}
        />
      ))}
    </ModuleLayout>
  );
};

export default AcademicSchedule;
