export const modules = [
  {
    name: 'Gestión Curricular',
    image: require('../images/Book.png'),
    slug: 'gestionCurricular',
  },
  {
    name: 'Banco de proyectos',
    image: require('../images/Bank.png'),
    slug: 'bancoDeProyectos',
  },
  {
    name: 'Calendario Académico',
    image: require('../images/Calendar.png'),
    slug: 'calendarioAcademico/gestionarCalendario',
  },
  {
    name: 'Orientación Académica',
    image: require('../images/Dashboard.png'),
    slug: 'orientacionAcademica',
  },
  {
    name: 'Redes Sociales',
    image: require('../images/Message.png'),
    slug: 'redesSociales',
  },
]

export const events = [
  {
    id: '1.ISW1',
    subject: 'Ingeniería de Software I',
    attendant: 'Bell',
    date: '2018-10-05T10:02',
    aforo: '111',
    groups: ['061', '063', '062'],
    schedule: '2017-1-1',
  },
  {
    id: '2.ISW2',
    subject: 'Ingeniería de Software II',
    attendant: 'Juan Bernardo',
    date: '2018-11-06T18:02',
    aforo: '50',
    groups: ['061', '062'],
    schedule: '2017-1-1',
  },
  {
    id: '3.ISW3',
    subject: 'Ingeniería de Software III',
    attendant: 'Grissa',
    date: '2018-11-08T06:02',
    aforo: '30',
    groups: ['062'],
    schedule: '2017-1-3',
  },
]

export const attendants = ['Bell Manrique', 'Juan Bernardo', 'Grissa']
