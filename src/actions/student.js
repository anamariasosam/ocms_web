import { getData, postData, putData, deleteData } from './index'
import { FETCH_STUDENT_EVENTS, STUDENT_ERROR } from './types'

export const fetchEvents = params => {
  const url = '/estudiantes/eventos'
  return dispatch => getData(FETCH_STUDENT_EVENTS, STUDENT_ERROR, false, url, dispatch, params)
}
