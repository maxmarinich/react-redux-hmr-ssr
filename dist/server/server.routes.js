'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _StaticRouter = require('react-router-dom/StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _reactRouterConfig = require('react-router-config');

var _routes = require('../client/app/routes');

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = require('../client/app/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
var router = _express2.default.Router();

router.get('*', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);

  var promises = branch.map(function (_ref) {
    var route = _ref.route;

    var fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
  });

  return Promise.all(promises).then(function () {
    var context = {};
    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _StaticRouter2.default,
        { location: req.url, context: context },
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    ));
    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }
    res.render('index', {
      html: html,
      state: store.getState(),
      title: 'React Redux HMR SSR Starter Kit',
      production: process.env.NODE_ENV === 'production' });
  });
});

module.exports = router;