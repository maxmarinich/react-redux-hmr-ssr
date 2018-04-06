'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header() {
  return _react2.default.createElement(
    'header',
    { className: 's-header ' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'nav',
        { className: 's-header__nav', role: 'navigation' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 's-header__nav-item' },
          'Home'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/about', className: 's-header__nav-item' },
          'About'
        )
      )
    )
  );
};