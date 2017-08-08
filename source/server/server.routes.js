import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from '../client/app/routes';
import configureStore from '../client/app/store/configureStore';

const store = configureStore();
const router = express.Router();

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url);

  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });

  return Promise.all(promises).then(() => {
    const context = {};
    const html = renderToString(
      <Provider store={ store }>
        <StaticRouter location={req.url} context={ context }>
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    );
    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }
    res.render('index', {
      html,
      title: 'React Redux HMR SSR Starter Kit',
      state: store.getState(),
      production: process.env.NODE_ENV === 'production' });
  });
});

module.exports = router;
