"use strict";

require("@babel/polyfill");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = 3030;
app.use(_express["default"]["static"](_path["default"].join(__dirname, '/../../dist')) || _express["default"]["static"](_path["default"].join(__dirname, '/../dist')));
app.listen(port, function () {
  console.log("Server running on: http://localhost:".concat(port));
});