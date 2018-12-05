import { getData, postData, putData, deleteData } from './index'
import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
  UPDATE_EVENT,
  EVENT_ERROR,
  FETCH_SUBJECTS,
  SUBJECTS_ERROR,
  FETCH_GROUPS,
  GROUPS_ERROR,
} from './types'

const EVENT_ENDPOINT = '/eventosAcademicos'

export function createEvent(data) {
  const redirect = `/calendarioAcademico/programarEvento/show/${data.programacionNombre}`
  return dispatch =>
    postData(CREATE_EVENT, EVENT_ERROR, true, EVENT_ENDPOINT, dispatch, data, redirect)
}

export function deleteEvent(params) {
  return dispatch => deleteData(DELETE_EVENT, EVENT_ERROR, true, EVENT_ENDPOINT, dispatch, params)
}

export function fetchEvent(params) {
  return dispatch => getData(FETCH_EVENT, EVENT_ERROR, false, EVENT_ENDPOINT, dispatch, params)
}

export function updateEvent(data) {
  const redirect = `/calendarioAcademico/programarEvento/show/${data.data.programacionNombre}`

  return dispatch =>
    putData(UPDATE_EVENT, EVENT_ERROR, true, EVENT_ENDPOINT, dispatch, data, redirect)
}

export function fetchAsignaturas() {
  const url = '/asignaturas'
  return dispatch => getData(FETCH_SUBJECTS, SUBJECTS_ERROR, false, url, dispatch)
}

export function fetchGrupos() {
  const url = '/grupos'
  return dispatch => getData(FETCH_GROUPS, GROUPS_ERROR, false, url, dispatch)
}
