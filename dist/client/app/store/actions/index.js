'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sideMenu = require('./sideMenu');

Object.keys(_sideMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sideMenu[key];
    }
  });
});