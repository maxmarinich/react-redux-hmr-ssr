'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sideMenu = require('./sideMenu');

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  router: _reactRouterRedux.routerReducer,
  menuIsOpen: _sideMenu2.default,
  loader: _loader2.default
});