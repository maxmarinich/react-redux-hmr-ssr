'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterConfig = require('react-router-config');

var _BrowserRouter = require('react-router-dom/BrowserRouter');

var _BrowserRouter2 = _interopRequireDefault(_BrowserRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)(window.__PRELOADED_STATE__);

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _BrowserRouter2.default,
      null,
      (0, _reactRouterConfig.renderRoutes)(_routes2.default)
    )
  );
};

exports.default = AppRouter;