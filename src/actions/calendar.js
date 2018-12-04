import { getData, postData, putData, deleteData } from './index'
import { CREATE_CALENDAR, CALENDAR_ERROR, DELETE_CALENDAR } from './types'

const CALENDAR_ENDPOINT = '/calendarios'

export function createCalendar(data) {
  const redirect = '/calendarioAcademico/gestionarCalendario'
  return dispatch =>
    postData(CREATE_CALENDAR, CALENDAR_ERROR, true, CALENDAR_ENDPOINT, dispatch, data, redirect)
}

export function deleteCalendar(params) {
  return dispatch =>
    deleteData(DELETE_CALENDAR, CALENDAR_ERROR, true, CALENDAR_ENDPOINT, dispatch, params)
}
