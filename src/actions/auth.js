import axios from 'axios'
import cookie from 'react-cookies'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, PROTECTED_TEST } from './types'
import PACKAGE from '../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]
const CLIENT_ROOT_URL = 'http://localhost:3000'

export const errorHandler = (dispatch, error, type) => {
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
      payload: 'No se pudo realizar la acción. Verifica la información',
    })
    logoutUser()
  } else {
    dispatch({
      type: type,
      payload: errorMessage,
    })
  }
}

export const loginUser = data => {
  return dispatch => {
    axios
      .post(`${API_URL}/auth/login`, data)
      .then(response => {
        cookie.save('token', response.data.token, { path: '/' })
        cookie.save('user', response.data.usuario, { path: '/' })
        dispatch({ type: AUTH_USER })
        console.log(response.data.usuario)

        window.location.href = CLIENT_ROOT_URL + '/calendarioAcademico/gestionarCalendario'
      })
      .catch(error => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      })
  }
}

export const logoutUser = error => {
  return dispatch => {
    dispatch({ type: UNAUTH_USER, payload: error || '' })
    cookie.remove('token', { path: '/' })
    cookie.remove('user', { path: '/' })
    window.location.href = CLIENT_ROOT_URL
  }
}

export const protectedTest = () => {
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
