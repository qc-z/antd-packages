"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "TooltipButton", {
  enumerable: true,
  get: function get() {
    return _TooltipButton.default;
  }
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("./Button"));

var _TooltipButton = _interopRequireDefault(require("./TooltipButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Button: _Button.default,
  TooltipButton: _TooltipButton.default
};
exports.default = _default;