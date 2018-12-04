import {
  CREATE_EVENT,
  EVENT_ERROR,
  FETCH_SUBJECTS,
  SUBJECTS_ERROR,
  FETCH_GROUPS,
  GROUPS_ERROR,
} from '../actions/types'
const INITIAL_STATE = {
  errorMessage: '',
  agenda: [],
  successMessage: '',
  asignaturas: [],
  grupos: [],
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        successMessage: action.payload.successMessage,
      }
    case FETCH_SUBJECTS:
      return { ...state, asignaturas: action.payload }
    case FETCH_GROUPS:
      return { ...state, grupos: action.payload }
    case SUBJECTS_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    case GROUPS_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    case EVENT_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    default:
      return state
  }
}
