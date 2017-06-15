import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  photo: require('./photo').default
})

export default rootReducer
