import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import configureHistory from '../configure/history'
import createRootReducer from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

export default function configureStore (url = '/') {
  const initialState = window.__PRELOADED_STATE__ || {}
  const history = configureHistory(url)

  const store =  createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  )

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept()
  }

  return {
    store,
    history,
  }
}
