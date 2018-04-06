'use strict';

require('babel-polyfill');

require('./styles/styles.sass');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppRouter = require('./app/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var development = module.hot && process.env.NODE_ENV === 'development';
var render = development ? _reactDom2.default.render : _reactDom2.default.hydrate;

render(_react2.default.createElement(_AppRouter2.default, null), document.getElementById('root'));

if (development) {
  module.hot.accept();
}