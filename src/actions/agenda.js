import { getData, postData, putData, deleteData } from './index'
import {
  CREATE_AGENDA,
  DELETE_AGENDA,
  FETCH_AGENDA,
  UPDATE_AGENDA,
  AGENDA_ERROR,
  FETCH_EVENT_TYPES,
  EVENT_TYPE_ERROR,
} from './types'

const AGENDA_ENDPOINT = '/programaciones'

export function createAgenda(data) {
  const redirect = `/calendarioAcademico/realizarProgramacion/show/${data.calendarioSemestre}`
  return dispatch =>
    postData(CREATE_AGENDA, AGENDA_ERROR, true, AGENDA_ENDPOINT, dispatch, data, redirect)
}

export function deleteAgenda(params) {
  return dispatch =>
    deleteData(DELETE_AGENDA, AGENDA_ERROR, true, AGENDA_ENDPOINT, dispatch, params)
}

export function fetchAgenda(params) {
  return dispatch => getData(FETCH_AGENDA, AGENDA_ERROR, false, AGENDA_ENDPOINT, dispatch, params)
}

export function fetchEventTypes() {
  const url = '/tipoProgramaciones'
  return dispatch => getData(FETCH_EVENT_TYPES, EVENT_TYPE_ERROR, false, url, dispatch)
}
