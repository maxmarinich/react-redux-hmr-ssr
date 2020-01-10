import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ConnectedRouter } from 'connected-react-router'

import routes from './routes'
import configureStore from './store/configureStore'

const { store, history } = configureStore()

const AppRouter = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ ConnectedRouter >
    </Provider>
  )
}

export default AppRouter
