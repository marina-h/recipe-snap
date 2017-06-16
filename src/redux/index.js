import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  photo: require('./photo').default,
  recipes: require('./recipes').default
})

export default rootReducer
