import axios from 'axios'
import cookie from 'react-cookies'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, PROTECTED_TEST } from './types'
import PACKAGE from '../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]
const CLIENT_ROOT_URL = 'http://localhost:3000/'

export function errorHandler(dispatch, error, type) {
  let errorMessage = ''

  if (error.data.error) {
    errorMessage = error.data.error
  } else if (error.data) {
    errorMessage = error.data
  } else {
    errorMessage = error
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.',
    })
    logoutUser()
  } else {
    dispatch({
      type: type,
      payload: errorMessage,
    })
  }
}

export function loginUser({ correo, password }) {
  return dispatch => {
    axios
      .post(`${API_URL}/auth/login`, { correo, password })
      .then(response => {
        cookie.save('token', response.data.token, { path: '/' })
        dispatch({ type: AUTH_USER })
        window.location.href = CLIENT_ROOT_URL + 'calendarioAcademico/gestionarCalendario'
      })
      .catch(error => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      })
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch({ type: UNAUTH_USER })
    cookie.remove('token', { path: '/' })

    window.location.href = CLIENT_ROOT_URL + 'login'
  }
}

export function protectedTest() {
  return dispatch => {
    axios
      .get(`${API_URL}/protected`, {
        headers: { Authorization: cookie.load('token') },
      })
      .then(response => {
        dispatch({
          type: PROTECTED_TEST,
          payload: response.data.content,
        })
      })
      .catch(error => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      })
  }
}
