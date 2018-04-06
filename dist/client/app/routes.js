'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppRoot = require('./containers/AppRoot');

var _AppRoot2 = _interopRequireDefault(_AppRoot);

var _Home = require('components/Home/Home');

var _About = require('components/About/About');

var _About2 = _interopRequireDefault(_About);

var _NotFound = require('./components/NotFound');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  component: _AppRoot2.default,
  routes: [{
    path: '/',
    exact: true,
    component: _Home.Home
  }, { path: '/about',
    component: _About2.default
  }, { path: '*',
    component: _NotFound.NotFound
  }]
}];