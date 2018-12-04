import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import calendar from './calendar'
import agenda from './agenda'
import event from './event'

const rootReducer = combineReducers({
  auth,
  form,
  calendar,
  agenda,
  event,
})

export default rootReducer
