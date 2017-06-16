import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './redux'
import PhotoPicker from './components/PhotoPicker'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)

const Main = () => (
  <Provider store={ store }>
    <PhotoPicker />
  </Provider>
)

export default Main

