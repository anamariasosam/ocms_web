import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import calendar from './calendar'

const rootReducer = combineReducers({
  auth,
  form,
  calendar,
})

export default rootReducer
