'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TokyoSalsa = require('./components/TokyoSalsa');

var _TokyoSalsa2 = _interopRequireDefault(_TokyoSalsa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("app.js is running");

_reactDom2.default.render(_react2.default.createElement(_TokyoSalsa2.default, null), document.getElementById('app'));
