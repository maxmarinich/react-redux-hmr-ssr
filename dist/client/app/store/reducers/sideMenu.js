'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { menuIsOpen: false };
  var action = arguments[1];

  switch (action.type) {
    case _constants.MENU_TOGGLE:
      return { menuIsOpen: !state.menuIsOpen };
    default:
      return state;
  }
};