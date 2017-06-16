import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  photo: require('./photo').default,
  recipies: require('./recipies').default
})

export default rootReducer
