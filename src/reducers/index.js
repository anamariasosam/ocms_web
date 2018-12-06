import { combineReducers } from 'redux'
import auth from './auth'
import calendar from './calendar'
import agenda from './agenda'
import event from './event'

const rootReducer = combineReducers({
  auth,
  calendar,
  agenda,
  event,
})

export default rootReducer
