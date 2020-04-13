module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/project.png":
/*!********************************!*\
  !*** ./assets/img/project.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/project-f2e09ffbbcb9b7f385121d9a39c24f21.png";

/***/ }),

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/root/sites/portfoliov2/components/ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ContactForm = () => {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  });
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    message: ''
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg
        }
      });
      setInputs({
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg
        }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => _objectSpread({}, prev, {
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => _objectSpread({}, prevStatus, {
      submitting: true
    }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleOnSubmit,
    className: "jsx-4090391211",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-4090391211",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Email"), __jsx("input", {
    id: "email",
    type: "email",
    onChange: handleOnChange,
    required: true,
    value: inputs.email,
    className: "jsx-4090391211",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-4090391211",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "Message"), __jsx("textarea", {
    id: "message",
    onChange: handleOnChange,
    required: true,
    value: inputs.message,
    className: "jsx-4090391211",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-4090391211",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-4090391211" + " " + "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-4090391211" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4090391211",
    __self: undefined
  }, "label.jsx-4090391211{font-family:\"Lobster\",sans-serif;font-size:18px;text-align:left;width:100%;color:#fff;}button.jsx-4090391211{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-4090391211{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-4090391211,textarea.jsx-4090391211{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-4090391211{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZlLEFBR3VDLEFBT2QsQUFTSCxBQVNMLEFBUUUsV0FQQSxFQVFkLEdBakJjLEdBVG9CLEtBbUJwQixTQTFCQyxJQTJCQyxXQTFCQSxHQU9BLENBb0JILFlBMUJGLEFBMkJFLEVBcEJJLFNBTk4sQ0EyQlgsTUFwQlksSUFOWixJQWF1QixHQU5ULGFBQ0EsYUFDZCxpREFLd0IsbUdBQ0osNkZBQ0YsaUJBQ2xCIiwiZmlsZSI6Ii9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XG5cblx0Y29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKHtcbiAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfVxuICB9KVxuXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIG1lc3NhZ2U6ICcnXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoc3RhdHVzLCBtc2cpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIHN1Ym1pdHRlZDogdHJ1ZSxcbiAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG1zZyB9XG4gICAgICB9KVxuICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgaW5mbzogeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2cgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IGUgPT4ge1xuICAgIGUucGVyc2lzdCgpXG4gICAgc2V0SW5wdXRzKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pKVxuICAgIHNldFN0YXR1cyh7XG4gICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRTdGF0dXMocHJldlN0YXR1cyA9PiAoeyAuLi5wcmV2U3RhdHVzLCBzdWJtaXR0aW5nOiB0cnVlIH0pKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NlbmQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0cylcbiAgICB9KVxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpXG4gICAgaGFuZGxlUmVzcG9uc2UocmVzLnN0YXR1cywgdGV4dClcbiAgfVxuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdGF0dXMuc3VibWl0dGluZ30+XG4gICAgICAgICAgeyFzdGF0dXMuc3VibWl0dGluZ1xuICAgICAgICAgICAgPyAhc3RhdHVzLnN1Ym1pdHRlZFxuICAgICAgICAgICAgICA/ICdTdWJtaXQnXG4gICAgICAgICAgICAgIDogJ1N1Ym1pdHRlZCdcbiAgICAgICAgICAgIDogJ1N1Ym1pdHRpbmcuLi4nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzdGF0dXMuaW5mby5lcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5FcnJvcjoge3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG4gICAgICB7IXN0YXR1cy5pbmZvLmVycm9yICYmIHN0YXR1cy5pbmZvLm1zZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPntzdGF0dXMuaW5mby5tc2d9PC9kaXY+XG4gICAgICApfVxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRsYWJlbHtcblx0XHRcdFx0XHRmb250LWZhbWlseTpcIkxvYnN0ZXJcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6MThweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDE1cHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dCxcblx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0cmVzaXplOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXX0= */\n/*@ sourceURL=/root/sites/portfoliov2/components/ContactForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/root/sites/portfoliov2/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MyHeader = () => {
  return __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "custom-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 6
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Sean Lyons"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  })), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })))));
};

const Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header`{
  background: #fffff0;
  padding-top:25px;
  padding-bottom:25px;
  color: #333;
  // border-bottom: 8px solid #333;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  
  height: 100px;
  .custom-wrapper{
  	width:100%;
  	max-width:1200px;
  	left:0;
  	right:0;
  	margin:auto;
  	padding-left:25px;
  	padding-right:25px;
  	display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    position: sticky;
  }
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    li {
      padding: 0px 25px;
      font-size: 36px;
      :global(svg) {
        color: red;
      }
    }	
  }
  }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (MyHeader);

/***/ }),

/***/ "./components/Technologies.js":
/*!************************************!*\
  !*** ./components/Technologies.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/di */ "react-icons/di");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/root/sites/portfoliov2/components/Technologies.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Technologies = () => {
  const {
    0: accentColor,
    1: setAccentColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("#333");
  const {
    0: descriptionText,
    1: setDescriptionText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Curabitur semper congue nisi volutpat vestibulum. Etiam vitae dui dui. Etiam condimentum pellentesque quam id dapibus. Suspendisse pulvinar porta dapibus. Nam hendrerit mi ac volutpat dignissim. Suspendisse potenti. Sed tempus scelerisque tortor, vitae tincidunt nulla. Quisque sagittis erat urna, vel volutpat est iaculis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris molestie tellus lectus, eu vulputate orci dapibus nec. Phasellus tempor ipsum non risus fermentum, et rutrum magna mattis. Donec eleifend porta eros. Integer vel justo dignissim elit tempor blandit. Nunc ut tortor in erat elementum pretium. Duis ut ex vel erat venenatis fermentum elementum sit amet massa. Etiam semper urna vestibulum, pretium tortor vestibulum, dictum dui.");
  const {
    0: descriptionTitle,
    1: setDescriptionTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("VS Code");

  const setTechs = (color, text, title) => {
    setAccentColor(color);
    setDescriptionTitle(title);
    setDescriptionText(text);
  };

  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "technologies",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "custom-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "section-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, "The Essentials"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx("div", {
    id: "vscode",
    onFocus: () => setTechs("#272935", "Curabitur semper congue nisi volutpat vestibulum. Etiam vitae dui dui. Etiam condimentum pellentesque quam id dapibus. Suspendisse pulvinar porta dapibus. Nam hendrerit mi ac volutpat dignissim. Suspendisse potenti. Sed tempus scelerisque tortor, vitae tincidunt nulla. Quisque sagittis erat urna, vel volutpat est iaculis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris molestie tellus lectus, eu vulputate orci dapibus nec. Phasellus tempor ipsum non risus fermentum, et rutrum magna mattis. Donec eleifend porta eros. Integer vel justo dignissim elit tempor blandit. Nunc ut tortor in erat elementum pretium. Duis ut ex vel erat venenatis fermentum elementum sit amet massa. Etiam semper urna vestibulum, pretium tortor vestibulum, dictum dui.", "VS Code"),
    tabIndex: "3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiVisualstudio"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "docker",
    onFocus: () => setTechs("#032144", "Maecenas et lectus sapien. Aliquam neque elit, suscipit eu tincidunt quis, fermentum sed metus. Vivamus pretium elementum facilisis. Nullam ac mollis elit. Donec rhoncus pulvinar justo, nec accumsan ligula tincidunt id. Sed non enim posuere, condimentum leo quis, viverra est. Morbi ac mattis ipsum. Praesent laoreet nisi non justo commodo, vitae fermentum metus ultricies. Quisque neque erat, tincidunt at mauris vel, vulputate tempor nisi. Curabitur et tincidunt diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Docker"),
    tabIndex: "4",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaDocker"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "react",
    onFocus: () => setTechs("#29B1EF", "Aliquam eget finibus erat, mattis eleifend dui. Ut tempus ullamcorper justo non volutpat. Duis imperdiet pellentesque orci id feugiat. Duis fringilla, nulla sed porta porttitor, mi elit interdum elit, sit amet rutrum nunc enim ac elit. Morbi a condimentum augue, at gravida turpis. Suspendisse semper orci nunc, id faucibus ante vehicula vitae. Ut mattis felis sed nunc bibendum consequat. Vivamus tincidunt nibh vel libero pretium tincidunt. In nunc enim, lobortis sit amet vehicula ut, hendrerit vitae tellus.", "Next.js"),
    tabIndex: "5",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaReact"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "github",
    onFocus: () => setTechs("#2DBD4E", "Duis vel varius nibh, nec malesuada turpis. Quisque mollis maximus felis eu tempor. Praesent nec tristique lacus, vel gravida odio. Mauris ac maximus tellus. Sed eu risus nunc. Nulla cursus semper rhoncus. Donec vitae neque purus. Nunc iaculis tellus at molestie finibus. Sed in tincidunt odio. Sed et turpis ac tortor luctus eleifend a eget est.", "Github"),
    tabIndex: "6",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiGithubBadge"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "sass",
    onFocus: () => setTechs("#CF649A", "Nulla non augue a massa egestas sagittis quis sit amet urna. Duis vitae quam id dui fermentum lacinia. Pellentesque vel ante id nisl viverra dictum eu sed ex. Vivamus purus lacus, iaculis molestie lorem sit amet, pulvinar gravida libero. Cras tincidunt, turpis eget maximus consequat, mauris sapien bibendum lacus, ut pulvinar elit diam non sapien. Nunc placerat purus malesuada accumsan viverra. Vestibulum convallis justo eu urna dictum, at fringilla sem auctor.", "Sass"),
    tabIndex: "7",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiSass"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "stackoverflow",
    onFocus: () => setTechs("#F48025", "Fusce arcu magna, congue vel gravida in, dictum a erat. Aenean vestibulum augue quis lobortis porttitor. Integer ante urna, elementum id porttitor quis, efficitur ut libero. Sed eget feugiat urna. Phasellus in posuere orci. Mauris sollicitudin urna quis risus semper commodo. Mauris ullamcorper mi et nunc sagittis, a molestie neque consequat. Aliquam pretium pulvinar sem, eu laoreet nisl vehicula luctus. Proin ante elit, vestibulum at neque faucibus, scelerisque viverra ante. Nullam facilisis nisi eget tortor iaculis porttitor.", "Stackoverflow"),
    tabIndex: "8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiStackoverflow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "wordpress",
    onFocus: () => setTechs("#D7DADE", "Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.", "WordPress"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiWordpress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "gulp",
    onFocus: () => setTechs("#D7DADE", "Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.", "WPGulp"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGulp"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }, descriptionTitle), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 6
    }
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2493497303", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 6
    }
  }, descriptionText))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2493497303",
    dynamic: [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor],
    __self: undefined
  }, `.section-heading.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:0px;z-index:1;background:${accentColor};width:100%;}.technologies.__jsx-style-dynamic-selector{background:${accentColor};padding-top:40px;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector{width:100%;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector{width:100%;margin:0;padding:0;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:0;padding:15px 10%;padding-left:15px;color:#fff;left:0;right:0;margin:auto;}.icons.__jsx-style-dynamic-selector{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:92%;left:0;right:0;margin:auto;background:${accentColor};overflow:visible;background:${accentColor};-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.icon.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:1%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fffff0;width:20%;color:#fff;padding:25px 0;font-size:24px;-webkit-transition:0.3s all;transition:0.3s all;color:#333;height:75px;}.icon.__jsx-style-dynamic-selector>svg{padding:5%;font-size:2em;}.icon.__jsx-style-dynamic-selector:focus{outline:none;border:1px solid rgba(0,0,0,0);font-size:2.1em;color:#fff;background:${accentColor};}.description.__jsx-style-dynamic-selector{-webkit-transition:0.3s all;transition:0.3s all;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:auto;}.description-text.__jsx-style-dynamic-selector{background:#fffff0;box-shadow:0px 0px 7px 4px rgba(0,0,0,0.15);color:#333;width:90%;height:auto;padding:25px 15px;margin:50px auto;}.underline.__jsx-style-dynamic-selector{height:4px;background:${accentColor};width:60%;}@media (min-width:768px){.technologies.__jsx-style-dynamic-selector{left:0;right:0;margin:auto;padding-bottom:50px;display:block;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector{width:90%;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:30px auto;margin-left:0;padding-left:0;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-bottom:50px;}.icons.__jsx-style-dynamic-selector{padding:15px;padding-top:0;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;}.icon.__jsx-style-dynamic-selector{height:120px;width:40%;margin:5px 15px;margin-left:0;}.icon.__jsx-style-dynamic-selector:nth-child(1),.icon.__jsx-style-dynamic-selector:nth-child(2){margin-top:0;}.description.__jsx-style-dynamic-selector,.icons.__jsx-style-dynamic-selector{background:none;height:100%;width:100%;}.description-text.__jsx-style-dynamic-selector{height:100%;margin:auto;width:100%;margin-bottom:50px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNKZSxBQUdzQixBQU93QixBQUk5QixBQUdBLEFBS0QsQUFVUSxBQVlGLEFBb0JKLEFBSUUsQUFRTyxBQVFELEFBU1IsQUFRSixBQU9HLEFBR08sQUFNSixBQVFBLEFBV0EsQUFRQSxBQUlHLEFBS0osT0FuREosRUEvRVMsQ0FzRmpCLENBOUZELEFBR1MsQUErQ00sQUE2QjBCLENBNEQ1QixDQXJGc0IsQUF5RHBCLEFBV0osQUFRVixFQXBHYSxBQTBERCxDQThDQSxDQXBIQyxBQStFQyxFQTNCaUMsQ0FsRXRDLEdBdUhPLENBaUJMLENBekZaLENBMUNrQixDQWdGRyxBQXVCTCxDQXVCSixFQWxJWixDQTZGZ0IsSUEyQ0ksSUFoQkwsQUFXZCxDQW5KUSxBQU9TLEVBcUhKLEVBdkdGLEFBNkNLLEVBNkNoQixDQVZjLENBcEdKLEFBd0VHLEdBa0JILEVBOENWLENBZ0JBLENBbElPLEVBZlIsQ0FOeUMsRUFpRTdCLENBeUJaLEFBVUMsQ0E5RVEsQ0EwREcsT0F6REMsQ0EyQzRCLEdBZTlCLEFBK0JTLFFBeEZwQixFQTBEYSxLQTFDRSxFQVpKLEtBdURRLEVBbEZQLEdBNEJKLE9BQ0MsQ0E1QlQsRUFpRUEsR0FpQmtCLEVBckRMLEFBNEZlLE1BbkRMLE1BeENrQixHQXFEekMsWUE1Q1csQUF3RWlCLFVBdkVKLGVBVE4saUJBQ3VCLGVBdUNqQixxQkFtREEsSUF6RlIsdUJBK0VRLElBdkVKLDhCQVBwQixpQkFzQ29CLCtCQW1ESixlQTlFSSxZQW9FQyxPQW5FVixVQUNDLEdBbUVYLFFBbEVlLEVBNEVOLEtBbkRHLElBcURaLElBN0VlLElBeUJoQixXQXhCcUIsZ0RBQ1QsV0FDQyxZQUViIiwiZmlsZSI6Ii9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFEb2NrZXIsIEZhUmVhY3QsIEZhR3VscCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtcblx0RGlWaXN1YWxzdHVkaW8sXG5cdERpR2l0aHViQmFkZ2UsXG5cdERpU2Fzcyxcblx0RGlTdGFja292ZXJmbG93LFxuXHREaVdvcmRwcmVzc1xufSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+IHtcblx0Y29uc3QgW2FjY2VudENvbG9yLCBzZXRBY2NlbnRDb2xvcl0gPSB1c2VTdGF0ZShcIiMzMzNcIik7XG5cdGNvbnN0IFtkZXNjcmlwdGlvblRleHQsIHNldERlc2NyaXB0aW9uVGV4dF0gPSB1c2VTdGF0ZShcblx0XHRcIkN1cmFiaXR1ciBzZW1wZXIgY29uZ3VlIG5pc2kgdm9sdXRwYXQgdmVzdGlidWx1bS4gRXRpYW0gdml0YWUgZHVpIGR1aS4gRXRpYW0gY29uZGltZW50dW0gcGVsbGVudGVzcXVlIHF1YW0gaWQgZGFwaWJ1cy4gU3VzcGVuZGlzc2UgcHVsdmluYXIgcG9ydGEgZGFwaWJ1cy4gTmFtIGhlbmRyZXJpdCBtaSBhYyB2b2x1dHBhdCBkaWduaXNzaW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuIFNlZCB0ZW1wdXMgc2NlbGVyaXNxdWUgdG9ydG9yLCB2aXRhZSB0aW5jaWR1bnQgbnVsbGEuIFF1aXNxdWUgc2FnaXR0aXMgZXJhdCB1cm5hLCB2ZWwgdm9sdXRwYXQgZXN0IGlhY3VsaXMgdmVoaWN1bGEuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgbW9sZXN0aWUgdGVsbHVzIGxlY3R1cywgZXUgdnVscHV0YXRlIG9yY2kgZGFwaWJ1cyBuZWMuIFBoYXNlbGx1cyB0ZW1wb3IgaXBzdW0gbm9uIHJpc3VzIGZlcm1lbnR1bSwgZXQgcnV0cnVtIG1hZ25hIG1hdHRpcy4gRG9uZWMgZWxlaWZlbmQgcG9ydGEgZXJvcy4gSW50ZWdlciB2ZWwganVzdG8gZGlnbmlzc2ltIGVsaXQgdGVtcG9yIGJsYW5kaXQuIE51bmMgdXQgdG9ydG9yIGluIGVyYXQgZWxlbWVudHVtIHByZXRpdW0uIER1aXMgdXQgZXggdmVsIGVyYXQgdmVuZW5hdGlzIGZlcm1lbnR1bSBlbGVtZW50dW0gc2l0IGFtZXQgbWFzc2EuIEV0aWFtIHNlbXBlciB1cm5hIHZlc3RpYnVsdW0sIHByZXRpdW0gdG9ydG9yIHZlc3RpYnVsdW0sIGRpY3R1bSBkdWkuXCJcblx0KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uVGl0bGUsIHNldERlc2NyaXB0aW9uVGl0bGVdID0gdXNlU3RhdGUoXCJWUyBDb2RlXCIpO1xuXG5cdGNvbnN0IHNldFRlY2hzID0gKGNvbG9yLCB0ZXh0LCB0aXRsZSkgPT4ge1xuXHRcdHNldEFjY2VudENvbG9yKGNvbG9yKTtcblx0XHRzZXREZXNjcmlwdGlvblRpdGxlKHRpdGxlKTtcblx0XHRzZXREZXNjcmlwdGlvblRleHQodGV4dCk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGVjaG5vbG9naWVzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS13cmFwcGVyXCI+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+VGhlIEVzc2VudGlhbHM8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cInZzY29kZVwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiMyNzI5MzVcIixcblx0XHRcdFx0XHRcdFx0XCJDdXJhYml0dXIgc2VtcGVyIGNvbmd1ZSBuaXNpIHZvbHV0cGF0IHZlc3RpYnVsdW0uIEV0aWFtIHZpdGFlIGR1aSBkdWkuIEV0aWFtIGNvbmRpbWVudHVtIHBlbGxlbnRlc3F1ZSBxdWFtIGlkIGRhcGlidXMuIFN1c3BlbmRpc3NlIHB1bHZpbmFyIHBvcnRhIGRhcGlidXMuIE5hbSBoZW5kcmVyaXQgbWkgYWMgdm9sdXRwYXQgZGlnbmlzc2ltLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBTZWQgdGVtcHVzIHNjZWxlcmlzcXVlIHRvcnRvciwgdml0YWUgdGluY2lkdW50IG51bGxhLiBRdWlzcXVlIHNhZ2l0dGlzIGVyYXQgdXJuYSwgdmVsIHZvbHV0cGF0IGVzdCBpYWN1bGlzIHZlaGljdWxhLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIG1vbGVzdGllIHRlbGx1cyBsZWN0dXMsIGV1IHZ1bHB1dGF0ZSBvcmNpIGRhcGlidXMgbmVjLiBQaGFzZWxsdXMgdGVtcG9yIGlwc3VtIG5vbiByaXN1cyBmZXJtZW50dW0sIGV0IHJ1dHJ1bSBtYWduYSBtYXR0aXMuIERvbmVjIGVsZWlmZW5kIHBvcnRhIGVyb3MuIEludGVnZXIgdmVsIGp1c3RvIGRpZ25pc3NpbSBlbGl0IHRlbXBvciBibGFuZGl0LiBOdW5jIHV0IHRvcnRvciBpbiBlcmF0IGVsZW1lbnR1bSBwcmV0aXVtLiBEdWlzIHV0IGV4IHZlbCBlcmF0IHZlbmVuYXRpcyBmZXJtZW50dW0gZWxlbWVudHVtIHNpdCBhbWV0IG1hc3NhLiBFdGlhbSBzZW1wZXIgdXJuYSB2ZXN0aWJ1bHVtLCBwcmV0aXVtIHRvcnRvciB2ZXN0aWJ1bHVtLCBkaWN0dW0gZHVpLlwiLFxuXHRcdFx0XHRcdFx0XHRcIlZTIENvZGVcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjNcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERpVmlzdWFsc3R1ZGlvIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJkb2NrZXJcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjMDMyMTQ0XCIsXG5cdFx0XHRcdFx0XHRcdFwiTWFlY2VuYXMgZXQgbGVjdHVzIHNhcGllbi4gQWxpcXVhbSBuZXF1ZSBlbGl0LCBzdXNjaXBpdCBldSB0aW5jaWR1bnQgcXVpcywgZmVybWVudHVtIHNlZCBtZXR1cy4gVml2YW11cyBwcmV0aXVtIGVsZW1lbnR1bSBmYWNpbGlzaXMuIE51bGxhbSBhYyBtb2xsaXMgZWxpdC4gRG9uZWMgcmhvbmN1cyBwdWx2aW5hciBqdXN0bywgbmVjIGFjY3Vtc2FuIGxpZ3VsYSB0aW5jaWR1bnQgaWQuIFNlZCBub24gZW5pbSBwb3N1ZXJlLCBjb25kaW1lbnR1bSBsZW8gcXVpcywgdml2ZXJyYSBlc3QuIE1vcmJpIGFjIG1hdHRpcyBpcHN1bS4gUHJhZXNlbnQgbGFvcmVldCBuaXNpIG5vbiBqdXN0byBjb21tb2RvLCB2aXRhZSBmZXJtZW50dW0gbWV0dXMgdWx0cmljaWVzLiBRdWlzcXVlIG5lcXVlIGVyYXQsIHRpbmNpZHVudCBhdCBtYXVyaXMgdmVsLCB2dWxwdXRhdGUgdGVtcG9yIG5pc2kuIEN1cmFiaXR1ciBldCB0aW5jaWR1bnQgZGlhbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIixcblx0XHRcdFx0XHRcdFx0XCJEb2NrZXJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZhRG9ja2VyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJyZWFjdFwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiMyOUIxRUZcIixcblx0XHRcdFx0XHRcdFx0XCJBbGlxdWFtIGVnZXQgZmluaWJ1cyBlcmF0LCBtYXR0aXMgZWxlaWZlbmQgZHVpLiBVdCB0ZW1wdXMgdWxsYW1jb3JwZXIganVzdG8gbm9uIHZvbHV0cGF0LiBEdWlzIGltcGVyZGlldCBwZWxsZW50ZXNxdWUgb3JjaSBpZCBmZXVnaWF0LiBEdWlzIGZyaW5naWxsYSwgbnVsbGEgc2VkIHBvcnRhIHBvcnR0aXRvciwgbWkgZWxpdCBpbnRlcmR1bSBlbGl0LCBzaXQgYW1ldCBydXRydW0gbnVuYyBlbmltIGFjIGVsaXQuIE1vcmJpIGEgY29uZGltZW50dW0gYXVndWUsIGF0IGdyYXZpZGEgdHVycGlzLiBTdXNwZW5kaXNzZSBzZW1wZXIgb3JjaSBudW5jLCBpZCBmYXVjaWJ1cyBhbnRlIHZlaGljdWxhIHZpdGFlLiBVdCBtYXR0aXMgZmVsaXMgc2VkIG51bmMgYmliZW5kdW0gY29uc2VxdWF0LiBWaXZhbXVzIHRpbmNpZHVudCBuaWJoIHZlbCBsaWJlcm8gcHJldGl1bSB0aW5jaWR1bnQuIEluIG51bmMgZW5pbSwgbG9ib3J0aXMgc2l0IGFtZXQgdmVoaWN1bGEgdXQsIGhlbmRyZXJpdCB2aXRhZSB0ZWxsdXMuXCIsXG5cdFx0XHRcdFx0XHRcdFwiTmV4dC5qc1wiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiNVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RmFSZWFjdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwiZ2l0aHViXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiIzJEQkQ0RVwiLFxuXHRcdFx0XHRcdFx0XHRcIkR1aXMgdmVsIHZhcml1cyBuaWJoLCBuZWMgbWFsZXN1YWRhIHR1cnBpcy4gUXVpc3F1ZSBtb2xsaXMgbWF4aW11cyBmZWxpcyBldSB0ZW1wb3IuIFByYWVzZW50IG5lYyB0cmlzdGlxdWUgbGFjdXMsIHZlbCBncmF2aWRhIG9kaW8uIE1hdXJpcyBhYyBtYXhpbXVzIHRlbGx1cy4gU2VkIGV1IHJpc3VzIG51bmMuIE51bGxhIGN1cnN1cyBzZW1wZXIgcmhvbmN1cy4gRG9uZWMgdml0YWUgbmVxdWUgcHVydXMuIE51bmMgaWFjdWxpcyB0ZWxsdXMgYXQgbW9sZXN0aWUgZmluaWJ1cy4gU2VkIGluIHRpbmNpZHVudCBvZGlvLiBTZWQgZXQgdHVycGlzIGFjIHRvcnRvciBsdWN0dXMgZWxlaWZlbmQgYSBlZ2V0IGVzdC5cIixcblx0XHRcdFx0XHRcdFx0XCJHaXRodWJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjZcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERpR2l0aHViQmFkZ2UgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cInNhc3NcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjQ0Y2NDlBXCIsXG5cdFx0XHRcdFx0XHRcdFwiTnVsbGEgbm9uIGF1Z3VlIGEgbWFzc2EgZWdlc3RhcyBzYWdpdHRpcyBxdWlzIHNpdCBhbWV0IHVybmEuIER1aXMgdml0YWUgcXVhbSBpZCBkdWkgZmVybWVudHVtIGxhY2luaWEuIFBlbGxlbnRlc3F1ZSB2ZWwgYW50ZSBpZCBuaXNsIHZpdmVycmEgZGljdHVtIGV1IHNlZCBleC4gVml2YW11cyBwdXJ1cyBsYWN1cywgaWFjdWxpcyBtb2xlc3RpZSBsb3JlbSBzaXQgYW1ldCwgcHVsdmluYXIgZ3JhdmlkYSBsaWJlcm8uIENyYXMgdGluY2lkdW50LCB0dXJwaXMgZWdldCBtYXhpbXVzIGNvbnNlcXVhdCwgbWF1cmlzIHNhcGllbiBiaWJlbmR1bSBsYWN1cywgdXQgcHVsdmluYXIgZWxpdCBkaWFtIG5vbiBzYXBpZW4uIE51bmMgcGxhY2VyYXQgcHVydXMgbWFsZXN1YWRhIGFjY3Vtc2FuIHZpdmVycmEuIFZlc3RpYnVsdW0gY29udmFsbGlzIGp1c3RvIGV1IHVybmEgZGljdHVtLCBhdCBmcmluZ2lsbGEgc2VtIGF1Y3Rvci5cIixcblx0XHRcdFx0XHRcdFx0XCJTYXNzXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI3XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVNhc3MgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cInN0YWNrb3ZlcmZsb3dcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjRjQ4MDI1XCIsXG5cdFx0XHRcdFx0XHRcdFwiRnVzY2UgYXJjdSBtYWduYSwgY29uZ3VlIHZlbCBncmF2aWRhIGluLCBkaWN0dW0gYSBlcmF0LiBBZW5lYW4gdmVzdGlidWx1bSBhdWd1ZSBxdWlzIGxvYm9ydGlzIHBvcnR0aXRvci4gSW50ZWdlciBhbnRlIHVybmEsIGVsZW1lbnR1bSBpZCBwb3J0dGl0b3IgcXVpcywgZWZmaWNpdHVyIHV0IGxpYmVyby4gU2VkIGVnZXQgZmV1Z2lhdCB1cm5hLiBQaGFzZWxsdXMgaW4gcG9zdWVyZSBvcmNpLiBNYXVyaXMgc29sbGljaXR1ZGluIHVybmEgcXVpcyByaXN1cyBzZW1wZXIgY29tbW9kby4gTWF1cmlzIHVsbGFtY29ycGVyIG1pIGV0IG51bmMgc2FnaXR0aXMsIGEgbW9sZXN0aWUgbmVxdWUgY29uc2VxdWF0LiBBbGlxdWFtIHByZXRpdW0gcHVsdmluYXIgc2VtLCBldSBsYW9yZWV0IG5pc2wgdmVoaWN1bGEgbHVjdHVzLiBQcm9pbiBhbnRlIGVsaXQsIHZlc3RpYnVsdW0gYXQgbmVxdWUgZmF1Y2lidXMsIHNjZWxlcmlzcXVlIHZpdmVycmEgYW50ZS4gTnVsbGFtIGZhY2lsaXNpcyBuaXNpIGVnZXQgdG9ydG9yIGlhY3VsaXMgcG9ydHRpdG9yLlwiLFxuXHRcdFx0XHRcdFx0XHRcIlN0YWNrb3ZlcmZsb3dcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjhcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERpU3RhY2tvdmVyZmxvdyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiI0Q3REFERVwiLFxuXHRcdFx0XHRcdFx0XHRcIlV0IGFjY3Vtc2FuIGxlY3R1cyBhIGVuaW0gcHVsdmluYXIgdnVscHV0YXRlLiBWZXN0aWJ1bHVtIHZ1bHB1dGF0ZSBsZWN0dXMgcXVpcyBxdWFtIG1vbGxpcyBiaWJlbmR1bS4gUHJvaW4gbWFsZXN1YWRhIG1vbGxpcyB2ZWxpdCwgaWQgdGVtcHVzIGF1Z3VlIHRpbmNpZHVudCB1dC4gVXQgaGVuZHJlcml0IG51bGxhIGlkIGF1Z3VlIGV1aXNtb2QsIHNlZCBwcmV0aXVtIHB1cnVzIGZyaW5naWxsYS4gUHJvaW4gc2l0IGFtZXQgY29udmFsbGlzIG1pLiBTZWQgb3JuYXJlIGNvbmRpbWVudHVtIHNhcGllbiwgaW4gdWxsYW1jb3JwZXIgbmliaCBncmF2aWRhIG5vbi4gUHJhZXNlbnQgYXJjdSBlbmltLCB2ZXN0aWJ1bHVtIHV0IGxhY3VzIHN1c2NpcGl0LCBmYWNpbGlzaXMgcnV0cnVtIGVzdC4gRG9uZWMgZmVybWVudHVtIGVyYXQgYXJjdSwgYWMgZGFwaWJ1cyBuaXNpIHZlc3RpYnVsdW0gc2l0IGFtZXQuIE1vcmJpIHNlZCB0aW5jaWR1bnQgb2Rpby4gQWxpcXVhbSBiaWJlbmR1bSBtb2xlc3RpZSBvZGlvLCBjb25kaW1lbnR1bSB0cmlzdGlxdWUgc2FwaWVuIHZ1bHB1dGF0ZSBuZWMuIFZlc3RpYnVsdW0gdml0YWUgbWFsZXN1YWRhIG5pc2wuIE1hdXJpcyB2YXJpdXMgYSBudWxsYSBhdCBtYWxlc3VhZGEuXCIsXG5cdFx0XHRcdFx0XHRcdFwiV29yZFByZXNzXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI5XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVdvcmRwcmVzcyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwiZ3VscFwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiNEN0RBREVcIixcblx0XHRcdFx0XHRcdFx0XCJVdCBhY2N1bXNhbiBsZWN0dXMgYSBlbmltIHB1bHZpbmFyIHZ1bHB1dGF0ZS4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGVjdHVzIHF1aXMgcXVhbSBtb2xsaXMgYmliZW5kdW0uIFByb2luIG1hbGVzdWFkYSBtb2xsaXMgdmVsaXQsIGlkIHRlbXB1cyBhdWd1ZSB0aW5jaWR1bnQgdXQuIFV0IGhlbmRyZXJpdCBudWxsYSBpZCBhdWd1ZSBldWlzbW9kLCBzZWQgcHJldGl1bSBwdXJ1cyBmcmluZ2lsbGEuIFByb2luIHNpdCBhbWV0IGNvbnZhbGxpcyBtaS4gU2VkIG9ybmFyZSBjb25kaW1lbnR1bSBzYXBpZW4sIGluIHVsbGFtY29ycGVyIG5pYmggZ3JhdmlkYSBub24uIFByYWVzZW50IGFyY3UgZW5pbSwgdmVzdGlidWx1bSB1dCBsYWN1cyBzdXNjaXBpdCwgZmFjaWxpc2lzIHJ1dHJ1bSBlc3QuIERvbmVjIGZlcm1lbnR1bSBlcmF0IGFyY3UsIGFjIGRhcGlidXMgbmlzaSB2ZXN0aWJ1bHVtIHNpdCBhbWV0LiBNb3JiaSBzZWQgdGluY2lkdW50IG9kaW8uIEFsaXF1YW0gYmliZW5kdW0gbW9sZXN0aWUgb2RpbywgY29uZGltZW50dW0gdHJpc3RpcXVlIHNhcGllbiB2dWxwdXRhdGUgbmVjLiBWZXN0aWJ1bHVtIHZpdGFlIG1hbGVzdWFkYSBuaXNsLiBNYXVyaXMgdmFyaXVzIGEgbnVsbGEgYXQgbWFsZXN1YWRhLlwiLFxuXHRcdFx0XHRcdFx0XHRcIldQR3VscFwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiOVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RmFHdWxwIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGV4dFwiPlxuXHRcdFx0XHRcdDxoMj57ZGVzY3JpcHRpb25UaXRsZX08L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+PC9kaXY+XG5cdFx0XHRcdFx0PHA+e2Rlc2NyaXB0aW9uVGV4dH08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5zZWN0aW9uLWhlYWRpbmcge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7XG5cdFx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGVjaG5vbG9naWVzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNDBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGVjaG5vbG9naWVzID4gLmN1c3RvbS13cmFwcGVye1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyA+IC5jdXN0b20td3JhcHBlciA+IC5jb250ZW50e1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0cGFkZGluZzowO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50ZWNobm9sb2dpZXMgPiAuY3VzdG9tLXdyYXBwZXIgPiBoMiB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE1cHggMTAlO1xuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDoxNXB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0Lmljb25zIHtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNDBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdHdpZHRoOiA5MiU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4OiAxIDAgYXV0bztcblx0XHRcdFx0XHRtYXJnaW46IDElO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Ly8gYm9yZGVyOiAxcHggc29saWQgIzMzMztcblx0XHRcdFx0XHQvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kOiAjOWJjYmY2O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IDAuM3MgYWxsO1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdGhlaWdodDogNzVweDtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29uID4gOmdsb2JhbChzdmcpIHtcblx0XHRcdFx0XHRwYWRkaW5nOiA1JTtcblx0XHRcdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbjpmb2N1cyB7XG5cdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMi4xZW07XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRlc2NyaXB0aW9uIHtcbi8qIFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHthY2NlbnRDb2xvcn0gNTAlLCAjZmZmIDUwJSk7ICovXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5kZXNjcmlwdGlvbi10ZXh0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMTVweDtcblx0XHRcdFx0XHRtYXJnaW46IDUwcHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XG5cdFx0XHRcdFx0LnRlY2hub2xvZ2llc3tcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRcdFx0cmlnaHQ6MDtcblx0XHRcdFx0XHRcdG1hcmdpbjphdXRvO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206NTBweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC50ZWNobm9sb2dpZXMgPiAuY3VzdG9tLXdyYXBwZXJ7XG5cdFx0XHRcdFx0XHR3aWR0aDo5MCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC50ZWNobm9sb2dpZXMgPiAuY3VzdG9tLXdyYXBwZXIgPiBoMntcblx0XHRcdFx0XHRcdG1hcmdpbjozMHB4IGF1dG87XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDowO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjA7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmNvbnRlbnR7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTo1MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaWNvbnN7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHBhZGRpbmc6MTVweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOjA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6MDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDp3cmFwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pY29ue1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjEyMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6NDAlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOjVweCAxNXB4O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDowO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaWNvbjpudGgtY2hpbGQoMSksXG5cdFx0XHRcdFx0Lmljb246bnRoLWNoaWxkKDIpe1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDowO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0Lmljb25ze1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZGVzY3JpcHRpb24tdGV4dHtcblx0XHRcdFx0XHRcdGhlaWdodDoxMDAlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOmF1dG87XG5cdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlY2hub2xvZ2llcztcbiJdfQ== */
/*@ sourceURL=/root/sites/portfoliov2/components/Technologies.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies */ "./components/Technologies.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContactForm */ "./components/ContactForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/root/sites/portfoliov2/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }), __jsx("main", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx(_components_Technologies__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("section", {
    className: "jsx-2478262061" + " " + "featured-project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, "Featured Project"), __jsx("div", {
    className: "jsx-2478262061" + " " + "underline short",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }), __jsx("h4", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "Project Title")), __jsx("p", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Praesent ornare ornare tellus, et porta arcu consectetur at. Morbi sed ante odio. Vivamus tortor sem, feugiat vitae tincidunt sed, sollicitudin ut ex. Quisque pharetra mi quis sem dapibus, eget sagittis tortor facilisis. Fusce pellentesque vehicula eros, vel feugiat ante sodales eget. Pellentesque fringilla mattis velit nec fermentum. Maecenas maximus enim vitae lacus ullamcorper porttitor. Sed a nisl scelerisque, vestibulum felis ac, tempor lectus. Nulla orci ante, dignissim quis magna vel, molestie ullamcorper tortor. Donec id nunc placerat enim gravida cursus. Donec fringilla tincidunt mauris lobortis porta. Aliquam consequat ultricies tempor. Nullam in lobortis felis, non volutpat risus. Null euismod turpis ut ipsum mollis, quis lacinia nisl mattis. Nullam eu facilisis"))), __jsx("section", {
    className: "jsx-2478262061" + " " + "experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "custom-wrapper section-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "Skills & Experience")), __jsx("div", {
    className: "jsx-2478262061" + " " + "custom-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "exp-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "exp-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdTimer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }), __jsx("h3", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, "Project Management"), __jsx("div", {
    className: "jsx-2478262061" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }, "coming soon")), __jsx("div", {
    className: "jsx-2478262061" + " " + "exp-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsers"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }), __jsx("h3", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, "Team-Based Workflow"), __jsx("div", {
    className: "jsx-2478262061" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, "coming soon")), __jsx("div", {
    className: "jsx-2478262061" + " " + "exp-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTools"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  }), __jsx("h3", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, "Site Maintenance"), __jsx("div", {
    className: "jsx-2478262061" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 8
    }
  }, "coming soon")), __jsx("div", {
    className: "jsx-2478262061" + " " + "exp-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGlasses"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }
  }), __jsx("h3", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 8
    }
  }, "Attention to Detail"), __jsx("div", {
    className: "jsx-2478262061" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  }, "coming soon")))))), __jsx("footer", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "custom-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "footer-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "footer-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx("h2", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, "Get in touch!")), __jsx("p", {
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }, "If you'd like to discuss any of my skills, projects, or technologies of choice, drop me a line! I'm always looking for the next opportunity to learn, share, and grow as a developer."), __jsx("a", {
    href: "https://github.com/itsseanl",
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGitSquare"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 44
    }
  }), "https://github.com/itsseanl"), __jsx("a", {
    href: "https://www.linkedin.com/in/itsseanl/",
    className: "jsx-2478262061",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 6
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 54
    }
  }), "https://www.linkedin.com/in/itsseanl/")), __jsx("div", {
    className: "jsx-2478262061" + " " + "footer-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2478262061" + " " + "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 6
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2478262061",
    __self: this
  }, `.custom-wrapper{width:90%;max-width:1200px;left:0;right:0;margin:auto;}.experience{background:#fff;}.underline{height:4px;background:#333;width:60%;}.short{width:40%;}main{z-index:1;background:#fff;}.featured-project{width:100%;left:0;right:0;margin:auto;}.featured-project>p{width:90%;left:0;right:0;margin:50px auto;}.featured{box-shadow:inset 0px 2px 12px 2px rgba(0,0,0,0.3);background:rgba(255,255,255,0.8);background-blend-mode:lighten;background-image:url(${__webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png")});background-size:cover;background-position:center;background-repeat:no-repeat;min-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 5%;text-align:center;}.overlay{background:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;max-width:1200px;left:0;right:0;margin:auto;}.experience{padding-bottom:50px;}.experience>.section-heading{width:100%;left:0;right:0;padding:1px 25px;z-index:9999;position:-webkit-sticky;position:sticky;top:0;background:#fff;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tiny{width:20%;}.exp-item{width:100%;left:0;right:0;margin:25px auto;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);background:#fffff0;padding:25px 15px;}.exp-item svg{font-size:28px;}footer{background:#333;height:auto;padding:50px 0;}.footer-left>.footer-heading>h2{color:#fff;background:#333;margin:5px;}.footer-left>.footer-heading{left:0;right:0;display:block;width:90%;color:#fff !important;background:#333;}.footer-heading>.underline{background:#fff;position:relative;}.footer-left{color:#fff;font-size:24px;}.footer-left>a{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;font-family:"Lobster",sans-serif;}.footer-left>a>svg{padding-right:15px;font-size:36px;}@media(min-width:768px){.experience>.custom-wrapper>h2{padding-left:0;}.exp-item:nth-child(1),.exp-item:nth-child(3){margin-left:0;}.exp-item:nth-child(2),.exp-item:nth-child(4){margin-right:0;}.custom-wrapper{width:90%;max-width:1200px;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.exp-item{width:45%;}footer>.custom-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.footer-left,.footer-right{width:45%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:500px;}.footer-left{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:15px;}.footer-right{margin-right:15px;}.footer-heading,.footer-left>p,.footer-left>a{text-align:left;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:left!important width:100%;-webkit-box-align:left!important width:100%;-ms-flex-align:left!important width:100%;align-items:left!important width:100%;font-size:14px;}.footer-left>p{font-size:18px;}.footer-right>form{width:100%;}.footer-right>form>label{color:#fff;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHc0IsQUFHYyxBQVFRLEFBSUwsQUFLRCxBQUdBLEFBSUMsQUFNRCxBQU0yQyxBQWtCakIsQUFZakIsQUFHUixBQVdFLEFBS0gsQUFHQyxBQVNJLEFBR0MsQUFNTCxBQU1MLEFBVVUsQUFJTixBQUtBLEFBU1EsQUFNSCxBQUlELEFBSUMsQUFHTCxBQUlHLEFBS0gsQUFHRyxBQU9GLEFBU2EsQUFLTCxBQUtGLEFBT0QsQUFJSixBQUdBLE9BaEdMLEdBaEhRLEFBaUJoQixBQUdpQixBQVVULEFBdURSLEFBd0VrQixBQVNqQixBQVVhLENBcEtHLEFBWVQsQUE2Q0EsQUFtQkEsQUFrQlMsQUFvQkYsQUFLTSxBQTJFbkIsQUFHQSxHQTNERCxDQXJERCxBQWlCYyxBQWdDYixBQVFBLEFBZ0RDLENBak1GLEFBNEZhLEFBcUJNLEFBeUVJLENBcEtkLENBTkEsQUE2Q0EsQUFtQkEsQUFxR1AsQ0FsRGEsQ0ExRWYsRUErR2UsR0FqSkcsQ0FYbEIsQUFLYSxBQTZDSyxBQW1CQSxBQXNDbEIsQ0EvSE0sQUFZSyxBQThGQSxBQW1EVixDQXhEZSxDQWFOLElBN0RJLENBcERQLEFBeUhQLEFBbUJBLEdBaElBLENBYUEsQUFpRkEsQ0FRdUIsR0FqSFosQUE4QlgsQ0F1Q2EsQUFtQm1DLEFBWWhELE9BbkVxQyxJQWhDdEMsRUFxRWtCLEtBNENBLEFBZUosYUFwRFUsQUFpRlAsQUFRRSxHQW5EbEIsTUFqRitCLElBdURYLFNBbEJiLEFBd0dpQixNQXZHUCxJQWtCRSxDQXRDSSxBQThJVixFQVpZLElBbkoyQixLQXNDcEQsTUFrQkEsT0FvRW9CLElBN0JPLEVBcUNJLGVBekZQLFlBMUNELFVBNElFLFdBM0hELENBaEJJLGNBMkgzQixRQXVCa0IsS0FqSlUsWUFrSjNCLGVBckRpQixDQTVGRCxVQXdDbEIsQ0F5RndCLE1BaElWLGVBeUlPLEdBa0JKLFFBN0lHLE9BOElsQix5Q0EzSnFCLENBMkZSLGVBQ21CLGFBb0NoQyxLQVNpQixXQTNIUCxJQStFWixFQTZDRSxLQTNIZSxpQkFDVixLQWZpQixFQWdCaEIsUUFDSyxZQUNiLDZFQWpCb0IsNkZBQ0gsZ0JBQ0Usa0JBRW5CIiwiZmlsZSI6Ii9yb290L3NpdGVzL3BvcnRmb2xpb3YyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRUaW1lciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgRmFVc2VycywgRmFUb29scywgRmFHbGFzc2VzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBGYURvY2tlciwgRmFSZWFjdCwgRmFHdWxwLCBGYUdpdFNxdWFyZSwgRmFMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgTXlIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgVGVjaG5vbG9naWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llc1wiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEdsb2JhbFN0eWxlIC8+XG5cdFx0XHQ8TXlIZWFkZXIgLz5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHRcblx0XHRcdFx0PFRlY2hub2xvZ2llcyAvPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZC1wcm9qZWN0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDxoMj5GZWF0dXJlZCBQcm9qZWN0PC9oMj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgc2hvcnRcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGg0PlByb2plY3QgVGl0bGU8L2g0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0UHJhZXNlbnQgb3JuYXJlIG9ybmFyZSB0ZWxsdXMsIGV0IHBvcnRhIGFyY3UgY29uc2VjdGV0dXIgYXQuIE1vcmJpXG5cdFx0XHRcdFx0XHRcdHNlZCBhbnRlIG9kaW8uIFZpdmFtdXMgdG9ydG9yIHNlbSwgZmV1Z2lhdCB2aXRhZSB0aW5jaWR1bnQgc2VkLFxuXHRcdFx0XHRcdFx0XHRzb2xsaWNpdHVkaW4gdXQgZXguIFF1aXNxdWUgcGhhcmV0cmEgbWkgcXVpcyBzZW0gZGFwaWJ1cywgZWdldFxuXHRcdFx0XHRcdFx0XHRzYWdpdHRpcyB0b3J0b3IgZmFjaWxpc2lzLiBGdXNjZSBwZWxsZW50ZXNxdWUgdmVoaWN1bGEgZXJvcywgdmVsXG5cdFx0XHRcdFx0XHRcdGZldWdpYXQgYW50ZSBzb2RhbGVzIGVnZXQuIFBlbGxlbnRlc3F1ZSBmcmluZ2lsbGEgbWF0dGlzIHZlbGl0IG5lY1xuXHRcdFx0XHRcdFx0XHRmZXJtZW50dW0uIE1hZWNlbmFzIG1heGltdXMgZW5pbSB2aXRhZSBsYWN1cyB1bGxhbWNvcnBlclxuXHRcdFx0XHRcdFx0XHRwb3J0dGl0b3IuIFNlZCBhIG5pc2wgc2NlbGVyaXNxdWUsIHZlc3RpYnVsdW0gZmVsaXMgYWMsIHRlbXBvclxuXHRcdFx0XHRcdFx0XHRsZWN0dXMuIE51bGxhIG9yY2kgYW50ZSwgZGlnbmlzc2ltIHF1aXMgbWFnbmEgdmVsLCBtb2xlc3RpZVxuXHRcdFx0XHRcdFx0XHR1bGxhbWNvcnBlciB0b3J0b3IuIERvbmVjIGlkIG51bmMgcGxhY2VyYXQgZW5pbSBncmF2aWRhIGN1cnN1cy5cblx0XHRcdFx0XHRcdFx0RG9uZWMgZnJpbmdpbGxhIHRpbmNpZHVudCBtYXVyaXMgbG9ib3J0aXMgcG9ydGEuIEFsaXF1YW0gY29uc2VxdWF0XG5cdFx0XHRcdFx0XHRcdHVsdHJpY2llcyB0ZW1wb3IuIE51bGxhbSBpbiBsb2JvcnRpcyBmZWxpcywgbm9uIHZvbHV0cGF0IHJpc3VzLlxuXHRcdFx0XHRcdFx0XHROdWxsIGV1aXNtb2QgdHVycGlzIHV0IGlwc3VtIG1vbGxpcywgcXVpcyBsYWNpbmlhIG5pc2wgbWF0dGlzLlxuXHRcdFx0XHRcdFx0XHROdWxsYW0gZXUgZmFjaWxpc2lzXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwZXJpZW5jZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS13cmFwcGVyIHNlY3Rpb24taGVhZGluZ1wiPlxuXHRcdFx0XHQ8aDI+U2tpbGxzICYgRXhwZXJpZW5jZTwvaDI+XG5cdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbXNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PE1kVGltZXIgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlByb2plY3QgTWFuYWdlbWVudDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhVXNlcnMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlRlYW0tQmFzZWQgV29ya2Zsb3c8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhVG9vbHMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlNpdGUgTWFpbnRlbmFuY2U8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhR2xhc3NlcyAvPlxuXHRcdFx0XHRcdFx0XHQ8aDM+QXR0ZW50aW9uIHRvIERldGFpbDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8cD5jb21pbmcgc29vbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0XHQ8Zm9vdGVyPlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxlZnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0PGgyPkdldCBpbiB0b3VjaCE8L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwPklmIHlvdSdkIGxpa2UgdG8gZGlzY3VzcyBhbnkgb2YgbXkgc2tpbGxzLCBwcm9qZWN0cywgb3IgdGVjaG5vbG9naWVzIG9mIGNob2ljZSwgZHJvcCBtZSBhIGxpbmUhXG5cdFx0XHRcdFx0SSdtIGFsd2F5cyBsb29raW5nIGZvciB0aGUgbmV4dCBvcHBvcnR1bml0eSB0byBsZWFybiwgc2hhcmUsIGFuZCBncm93IGFzIGEgZGV2ZWxvcGVyLjwvcD4gXG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubFwiPjxGYUdpdFNxdWFyZSAvPmh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubDwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l0c3NlYW5sL1wiPjxGYUxpbmtlZGluIC8+aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l0c3NlYW5sLzwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1yaWdodFwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+PC9kaXY+XG5cdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHQuY3VzdG9tLXdyYXBwZXJ7XG5cdFx0XHRcdHdpZHRoOjkwJTtcblx0XHRcdFx0bWF4LXdpZHRoOjEyMDBweDtcblx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRyaWdodDowO1xuXHRcdFx0XHRtYXJnaW46YXV0bztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnNob3J0IHtcblx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZmVhdHVyZWQtcHJvamVjdCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkLXByb2plY3QgPiBwIHtcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiA1MHB4IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkIHtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3JlcXVpcmUoXCIuLi9hc3NldHMvaW1nL3Byb2plY3QucG5nXCIpfSk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDUlO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm92ZXJsYXkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRtYXgtd2lkdGg6MTIwMHB4O1xuXHRcdFx0XHRcdGxlZnQ6MDtcblx0XHRcdFx0XHRyaWdodDowO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206NTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwZXJpZW5jZSA+IC5zZWN0aW9uLWhlYWRpbmcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMXB4IDI1cHg7XG5cdFx0XHRcdFx0ei1pbmRleDo5OTk5O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZXhwLWl0ZW1zIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRpbnkge1xuXHRcdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cC1pdGVtIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMjVweCBhdXRvO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHAtaXRlbSA6Z2xvYmFsKHN2Zykge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb290ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0cGFkZGluZzogNTBweCAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItbGVmdCA+IC5mb290ZXItaGVhZGluZyA+IGgyIHtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHRcdG1hcmdpbjo1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5mb290ZXItbGVmdCA+IC5mb290ZXItaGVhZGluZyB7XG5cdFx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRcdHJpZ2h0OjA7XG5cdFxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6OTAlO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5mb290ZXItaGVhZGluZyA+IC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItbGVmdHtcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZToyNHB4O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItbGVmdCA+IGF7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OlwiTG9ic3RlclwiLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mb290ZXItbGVmdCA+IGEgPiA6Z2xvYmFsKHN2Zyl7XG5cdFx0XHRcdFx0cGFkZGluZy1yaWdodDoxNXB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTozNnB4O1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhKG1pbi13aWR0aDo3NjhweCl7XG5cdFx0XHRcdFx0LmV4cGVyaWVuY2UgPiAuY3VzdG9tLXdyYXBwZXIgPiBoMntcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDowO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZXhwLWl0ZW06bnRoLWNoaWxkKDEpLFxuXHRcdFx0XHRcdC5leHAtaXRlbTpudGgtY2hpbGQoMyl7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDowO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZXhwLWl0ZW06bnRoLWNoaWxkKDIpLFxuXHRcdFx0XHRcdC5leHAtaXRlbTpudGgtY2hpbGQoNCl7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmN1c3RvbS13cmFwcGVye1xuXHRcdFx0XHRcdFx0d2lkdGg6OTAlO1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOjEyMDBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmV4cC1pdGVtc3tcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDp3cmFwO1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZXhwLWl0ZW17XG5cdFx0XHRcdFx0XHR3aWR0aDo0NSU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvb3RlciA+IC5jdXN0b20td3JhcHBlcntcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDpub3dyYXA7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZm9vdGVyLWxlZnQsXG5cdFx0XHRcdFx0XHQuZm9vdGVyLXJpZ2h0e1xuXHRcdFx0XHRcdFx0XHR3aWR0aDo0NSU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDoxMDAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OjUwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZvb3Rlci1sZWZ0e1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZvb3Rlci1yaWdodHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE1cHg7IFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZvb3Rlci1oZWFkaW5nLFxuXHRcdFx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gcCxcblx0XHRcdFx0XHRcdC5mb290ZXItbGVmdCA+IGF7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246bGVmdDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmxlZnQ7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmxlZnQhaW1wb3J0YW50XG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gcHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOjE4cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC5mb290ZXItcmlnaHQgPiBmb3Jte1xuXHRcdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZvb3Rlci1yaWdodCA+IGZvcm0gPiBsYWJlbCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59XG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmMDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiO1xuICB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19 */
/*@ sourceURL=/root/sites/portfoliov2/pages/index.js */`));
}

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"]`

  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background: #fffff0;
    line-height: 1.5em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lobster";
    color: #333;
  }
  p {
    font-family: "Ubuntu";
  }

`;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/sites/portfoliov2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/di":
/*!*********************************!*\
  !*** external "react-icons/di" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/di");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map