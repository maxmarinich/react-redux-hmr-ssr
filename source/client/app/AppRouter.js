import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import routes from './routes'
import configureStore from './store/configureStore'


const store = configureStore(window.__PRELOADED_STATE__)

const AppRouter = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>
  )
}

export default AppRouter
