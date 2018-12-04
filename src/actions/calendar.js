import { getData, postData, putData, deleteData } from './index'
import { CREATE_CALENDAR, CALENDAR_ERROR } from './types'

export function createCalendar(data) {
  const url = '/calendarios'
  const redirect = '/calendarioAcademico/gestionarCalendario'
  return dispatch => postData(CREATE_CALENDAR, CALENDAR_ERROR, true, url, dispatch, data, redirect)
}
