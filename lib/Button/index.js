"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "antd/es/button/style";
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary"
  }, "Button"));
};

var _default = App;
exports.default = _default;