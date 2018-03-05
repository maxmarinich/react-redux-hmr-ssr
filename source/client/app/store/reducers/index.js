import menuIsOpen from './sideMenu'
import loader from './loader'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  menuIsOpen,
  loader,
})
