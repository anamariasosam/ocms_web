import { getData, postData, putData, deleteData } from './index'
import {
  CREATE_EVENT,
  EVENT_ERROR,
  FETCH_SUBJECTS,
  SUBJECTS_ERROR,
  FETCH_GROUPS,
  GROUPS_ERROR,
} from './types'

export function createEvent(data) {
  const url = '/eventosAcademicos'
  const redirect = `/calendarioAcademico/programarEvento/show/${data.programacionNombre}`
  return dispatch => postData(CREATE_EVENT, EVENT_ERROR, true, url, dispatch, data, redirect)
}

export function fetchAsignaturas() {
  const url = '/asignaturas'
  return dispatch => getData(FETCH_SUBJECTS, SUBJECTS_ERROR, false, url, dispatch)
}

export function fetchGrupos() {
  const url = '/grupos'
  return dispatch => getData(FETCH_GROUPS, GROUPS_ERROR, false, url, dispatch)
}
