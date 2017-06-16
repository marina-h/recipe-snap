import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './redux'
import Picker from './components/Picker'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)

const Main = () => (
  <Provider store={ store }>
    <Picker />
  </Provider>
)

export default Main

