import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import menuIsOpen from './sideMenu'
import loader from './loader'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  menuIsOpen,
  loader,
})

export default createRootReducer
