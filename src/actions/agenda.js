import { getData, postData, putData, deleteData } from './index'
import { CREATE_AGENDA, AGENDA_ERROR, FETCH_EVENT_TYPES, EVENT_TYPE_ERROR } from './types'

export function createAgenda(data) {
  const url = '/programaciones'
  const redirect = `/calendarioAcademico/realizarProgramacion/show/${data.calendarioSemestre}`
  return dispatch => postData(CREATE_AGENDA, AGENDA_ERROR, true, url, dispatch, data, redirect)
}

export function fetchEventTypes() {
  const url = '/tipoProgramaciones'
  return dispatch => getData(FETCH_EVENT_TYPES, EVENT_TYPE_ERROR, false, url, dispatch)
}
