import Router  from 'koa-router'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'

import routes from '../client/app/routes'
import configureStore from '../client/app/store/configureStore'

const router = new Router()

router.get('*', async (ctx) => {
  const location = ctx.url
  const branches = matchRoutes(routes, location)
  const { store } = configureStore(location)

  const promises = branches.map(({ route }) => {
    let fetchData = route && route.fetchData

    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  })

  await Promise.all(promises)

  const context = {}

  const html = renderToString(
    <Provider store={ store }>
      <StaticRouter location={location} context={context}>
        { renderRoutes(routes) }
      </StaticRouter>
    </Provider>
  )

  if (context.status === 404) {
    await ctx.status(404)
  }

  if (context.status === 302) {
    await ctx.redirect(302, context.url)
  }

  await ctx.render('index', {
    html,
    state: store.getState(),
    title: 'React Redux HMR SSR Starter Kit',
    production: process.env.NODE_ENV === 'production'
  })
})

module.exports = router
