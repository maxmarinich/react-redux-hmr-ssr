'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var MARKED_CALLS = ['MENU_TOGGLE'];

var isSilentCall = function isSilentCall(action) {
  return action && action.silent;
};
var isActiveCall = function isActiveCall(state, type) {
  return state.find(function (call) {
    return type.indexOf(call) !== -1;
  });
};

var isMarkedCall = function isMarkedCall(type) {
  return !!MARKED_CALLS.find(function (call) {
    var isMarked = type.indexOf(call) !== -1;
    var isUnload = type.indexOf('_UNLOAD') !== -1;
    return isMarked && !isUnload;
  });
};

var makeCallName = function makeCallName(type) {
  return type.replace('_START', '').replace('_SUCCESS', '').replace('_FAILURE', '');
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type;

  if (isMarkedCall(type) && !isSilentCall(action)) {
    var call = makeCallName(type);
    if (isActiveCall(state, type)) {
      return state.filter(function (item) {
        return call !== item;
      });
    } else {
      state.push(call);
      return [].concat(_toConsumableArray(state));
    }
  } else {
    return state;
  }
};