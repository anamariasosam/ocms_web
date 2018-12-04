import { CREATE_AGENDA, AGENDA_ERROR, FETCH_EVENT_TYPES, EVENT_TYPE_ERROR } from '../actions/types'
const INITIAL_STATE = { errorMessage: '', agenda: [], successMessage: '', tipoProgramacion: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_AGENDA:
      return {
        ...state,
        successMessage: action.payload.successMessage,
      }
    case AGENDA_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    case FETCH_EVENT_TYPES:
      return { ...state, tipoProgramacion: action.payload }
    case EVENT_TYPE_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    default:
      return state
  }
}
