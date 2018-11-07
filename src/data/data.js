export const modules = [
  {
    name: "Gestión Curricular",
    image: require("../images/Book.png"),
    slug: "gestionCurricular"
  },
  {
    name: "Banco de proyectos",
    image: require("../images/Bank.png"),
    slug: "bancoDeProyectos"
  },
  {
    name: "Calendario Académico",
    image: require("../images/Calendar.png"),
    slug: "calendarioAcademico/gestionarCalendario"
  },
  {
    name: "Orientación Académica",
    image: require("../images/Dashboard.png"),
    slug: "orientacionAcademica"
  },
  {
    name: "Redes Sociales",
    image: require("../images/Message.png"),
    slug: "redesSociales"
  }
];

export const calendars = [
  {
    id: "2017-1",
    startDate: "2017-01-23",
    endDate: "2017-06-23"
  },
  {
    id: "2017-2",
    startDate: "2017-06-23",
    endDate: "2017-11-23"
  },
  {
    id: "2018-1",
    startDate: "2018-01-23",
    endDate: "2018-06-23"
  },
  {
    id: "2018-2",
    startDate: "2018-06-23",
    endDate: "2018-11-23"
  }
];

export const schedules = [
  {
    id: "2017-1-1",
    startDate: "2017-09-11",
    endDate: "2017-09-21",
    name: "Parciales"
  },
  {
    id: "2017-1-2",
    startDate: "2017-11-14",
    endDate: "2017-11-25",
    name: "Finales"
  },
  {
    id: "2017-1-3",
    startDate: "2017-08-11",
    endDate: "2017-11-25",
    name: "Foros"
  }
];

export const events = [
  {
    id: "1.ISW1",
    subject: "Ingeniería de Software I",
    attendant: "Bell",
    date: "2018-11-02T10:02",
    aforo: "111",
    groups: ["061", "063", "062"],
    schedule: "2017-1-1"
  },
  {
    id: "2.ISW2",
    subject: "Ingeniería de Software II",
    attendant: "Juan Bernardo",
    date: "2018-11-02T18:02",
    aforo: "50",
    groups: ["061", "062"],
    schedule: "2017-1-1"
  },
  {
    id: "3.ISW3",
    subject: "Ingeniería de Software III",
    attendant: "Grissa",
    date: "2018-11-02T06:02",
    aforo: "30",
    groups: ["062"],
    schedule: "2017-1-3"
  }
];

export const attendants = ["Bell", "Juan Bernardo", "Grissa"];

export const groups = ["061", "062", "063", "065"];
