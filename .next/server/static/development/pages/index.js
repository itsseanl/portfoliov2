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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "technologies",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "custom-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "section-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, "The Essentials"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icons",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }, descriptionTitle), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 6
    }
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1320377347", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 6
    }
  }, descriptionText))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1320377347",
    dynamic: [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor],
    __self: undefined
  }, `.section-heading.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:0px;z-index:1;background:${accentColor};width:100%;}.technologies.__jsx-style-dynamic-selector{background:${accentColor};padding-top:40px;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector{width:100%;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector{width:100%;margin:0;padding:0;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:0;padding:15px 10%;padding-left:15px;color:#fff;left:0;right:0;margin:auto;}.icons.__jsx-style-dynamic-selector{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:92%;left:0;right:0;margin:auto;background:${accentColor};overflow:visible;background:${accentColor};-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.icon.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:1%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fffff0;width:20%;color:#fff;padding:25px 0;font-size:24px;-webkit-transition:0.3s all;transition:0.3s all;color:#333;height:75px;}.icon.__jsx-style-dynamic-selector>svg{padding:5%;font-size:2em;}.icon.__jsx-style-dynamic-selector:focus{outline:none;border:1px solid rgba(0,0,0,0);font-size:2.1em;color:#fff;background:${accentColor};}.description.__jsx-style-dynamic-selector{-webkit-transition:0.3s all;transition:0.3s all;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:auto;}.description-text.__jsx-style-dynamic-selector{background:#fffff0;box-shadow:0px 0px 7px 4px rgba(0,0,0,0.15);color:#333;width:90%;height:auto;padding:25px 15px;margin:50px auto;}.underline.__jsx-style-dynamic-selector{height:4px;background:${accentColor};width:60%;}@media (min-width:768px){.technologies.__jsx-style-dynamic-selector{max-width:1200px;left:0;right:0;margin:auto;display:block;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector{width:90%;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:30px auto;margin-left:0;padding-left:0;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-bottom:50px;}.icons.__jsx-style-dynamic-selector{padding:15px;padding-top:0;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;}.icon.__jsx-style-dynamic-selector{height:120px;width:40%;margin:5px 15px;margin-left:0;}.icon.__jsx-style-dynamic-selector:nth-child(1),.icon.__jsx-style-dynamic-selector:nth-child(2){margin-top:0;}.description.__jsx-style-dynamic-selector,.icons.__jsx-style-dynamic-selector{background:none;height:100%;width:100%;}.description-text.__jsx-style-dynamic-selector{height:100%;margin:auto;width:100%;margin-bottom:50px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNKZSxBQUdzQixBQU93QixBQUk5QixBQUdBLEFBS0QsQUFVUSxBQVlGLEFBb0JKLEFBSUUsQUFRTyxBQVFELEFBU1IsQUFPTSxBQU9QLEFBR08sQUFNSixBQVFBLEFBV0EsQUFRQSxBQUlHLEFBS0osU0FqSUssQ0FxRmpCLENBN0ZELEFBR1MsQUErQ00sQUE2QjBCLENBMkQ1QixDQXBGc0IsQUF3RHBCLEFBV0osQUFRVixFQW5HYSxDQXVHRCxDQW5IQyxBQW9FTixBQVVPLEVBMUJpQyxDQWxFdEMsR0FzSE8sQ0FuQ1IsQUFvREcsQ0F4RlosQ0ExQ2tCLENBc0dGLENBdUJKLEVBaklaLENBNEZnQixDQVRILEdBb0RPLElBaEJMLEFBV2QsQ0FsSlEsQUFPUyxFQW9ISixFQXRHRixBQTZDSyxBQWtDRixFQVVkLEVBN0dVLEFBd0VHLEdBa0JILEVBNkNWLENBZ0JBLENBaklPLEVBZlIsQ0FOeUMsQUFtR3hDLEVBbENXLENBeUJaLENBcEVTLENBMERHLE9BekRDLENBMkM0QixHQWU5QixBQThCUyxRQXZGcEIsRUEwRGEsS0ExQ0UsRUFaSixLQXVEUSxFQWxGUCxHQTRCSixPQUNDLENBNUJULEVBaUVBLEdBaUJrQixFQXJETCxBQTJGZSxNQWxETCxNQXhDa0IsR0FxRHpDLFlBNUNXLEFBdUVpQixVQXRFSixlQVROLGlCQUN1QixlQXVDakIscUJBa0RBLElBeEZSLHVCQThFUSxJQXRFSiw4QkFQcEIsaUJBc0NvQiwrQkFrREosZUE3RUksWUFtRUMsT0FsRVYsVUFDQyxHQWtFWCxRQWpFZSxFQTJFTixLQWxERyxJQW9EWixJQTVFZSxJQXlCaEIsV0F4QnFCLGdEQUNULFdBQ0MsWUFFYiIsImZpbGUiOiIvcm9vdC9zaXRlcy9wb3J0Zm9saW92Mi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhRG9ja2VyLCBGYVJlYWN0LCBGYUd1bHAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7XG5cdERpVmlzdWFsc3R1ZGlvLFxuXHREaUdpdGh1YkJhZGdlLFxuXHREaVNhc3MsXG5cdERpU3RhY2tvdmVyZmxvdyxcblx0RGlXb3JkcHJlc3Ncbn0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiB7XG5cdGNvbnN0IFthY2NlbnRDb2xvciwgc2V0QWNjZW50Q29sb3JdID0gdXNlU3RhdGUoXCIjMzMzXCIpO1xuXHRjb25zdCBbZGVzY3JpcHRpb25UZXh0LCBzZXREZXNjcmlwdGlvblRleHRdID0gdXNlU3RhdGUoXG5cdFx0XCJDdXJhYml0dXIgc2VtcGVyIGNvbmd1ZSBuaXNpIHZvbHV0cGF0IHZlc3RpYnVsdW0uIEV0aWFtIHZpdGFlIGR1aSBkdWkuIEV0aWFtIGNvbmRpbWVudHVtIHBlbGxlbnRlc3F1ZSBxdWFtIGlkIGRhcGlidXMuIFN1c3BlbmRpc3NlIHB1bHZpbmFyIHBvcnRhIGRhcGlidXMuIE5hbSBoZW5kcmVyaXQgbWkgYWMgdm9sdXRwYXQgZGlnbmlzc2ltLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBTZWQgdGVtcHVzIHNjZWxlcmlzcXVlIHRvcnRvciwgdml0YWUgdGluY2lkdW50IG51bGxhLiBRdWlzcXVlIHNhZ2l0dGlzIGVyYXQgdXJuYSwgdmVsIHZvbHV0cGF0IGVzdCBpYWN1bGlzIHZlaGljdWxhLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIG1vbGVzdGllIHRlbGx1cyBsZWN0dXMsIGV1IHZ1bHB1dGF0ZSBvcmNpIGRhcGlidXMgbmVjLiBQaGFzZWxsdXMgdGVtcG9yIGlwc3VtIG5vbiByaXN1cyBmZXJtZW50dW0sIGV0IHJ1dHJ1bSBtYWduYSBtYXR0aXMuIERvbmVjIGVsZWlmZW5kIHBvcnRhIGVyb3MuIEludGVnZXIgdmVsIGp1c3RvIGRpZ25pc3NpbSBlbGl0IHRlbXBvciBibGFuZGl0LiBOdW5jIHV0IHRvcnRvciBpbiBlcmF0IGVsZW1lbnR1bSBwcmV0aXVtLiBEdWlzIHV0IGV4IHZlbCBlcmF0IHZlbmVuYXRpcyBmZXJtZW50dW0gZWxlbWVudHVtIHNpdCBhbWV0IG1hc3NhLiBFdGlhbSBzZW1wZXIgdXJuYSB2ZXN0aWJ1bHVtLCBwcmV0aXVtIHRvcnRvciB2ZXN0aWJ1bHVtLCBkaWN0dW0gZHVpLlwiXG5cdCk7XG5cdGNvbnN0IFtkZXNjcmlwdGlvblRpdGxlLCBzZXREZXNjcmlwdGlvblRpdGxlXSA9IHVzZVN0YXRlKFwiVlMgQ29kZVwiKTtcblxuXHRjb25zdCBzZXRUZWNocyA9IChjb2xvciwgdGV4dCwgdGl0bGUpID0+IHtcblx0XHRzZXRBY2NlbnRDb2xvcihjb2xvcik7XG5cdFx0c2V0RGVzY3JpcHRpb25UaXRsZSh0aXRsZSk7XG5cdFx0c2V0RGVzY3JpcHRpb25UZXh0KHRleHQpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlY2hub2xvZ2llc1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuXHRcdFx0PGgyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPlRoZSBFc3NlbnRpYWxzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJ2c2NvZGVcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjMjcyOTM1XCIsXG5cdFx0XHRcdFx0XHRcdFwiQ3VyYWJpdHVyIHNlbXBlciBjb25ndWUgbmlzaSB2b2x1dHBhdCB2ZXN0aWJ1bHVtLiBFdGlhbSB2aXRhZSBkdWkgZHVpLiBFdGlhbSBjb25kaW1lbnR1bSBwZWxsZW50ZXNxdWUgcXVhbSBpZCBkYXBpYnVzLiBTdXNwZW5kaXNzZSBwdWx2aW5hciBwb3J0YSBkYXBpYnVzLiBOYW0gaGVuZHJlcml0IG1pIGFjIHZvbHV0cGF0IGRpZ25pc3NpbS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gU2VkIHRlbXB1cyBzY2VsZXJpc3F1ZSB0b3J0b3IsIHZpdGFlIHRpbmNpZHVudCBudWxsYS4gUXVpc3F1ZSBzYWdpdHRpcyBlcmF0IHVybmEsIHZlbCB2b2x1dHBhdCBlc3QgaWFjdWxpcyB2ZWhpY3VsYS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyBtb2xlc3RpZSB0ZWxsdXMgbGVjdHVzLCBldSB2dWxwdXRhdGUgb3JjaSBkYXBpYnVzIG5lYy4gUGhhc2VsbHVzIHRlbXBvciBpcHN1bSBub24gcmlzdXMgZmVybWVudHVtLCBldCBydXRydW0gbWFnbmEgbWF0dGlzLiBEb25lYyBlbGVpZmVuZCBwb3J0YSBlcm9zLiBJbnRlZ2VyIHZlbCBqdXN0byBkaWduaXNzaW0gZWxpdCB0ZW1wb3IgYmxhbmRpdC4gTnVuYyB1dCB0b3J0b3IgaW4gZXJhdCBlbGVtZW50dW0gcHJldGl1bS4gRHVpcyB1dCBleCB2ZWwgZXJhdCB2ZW5lbmF0aXMgZmVybWVudHVtIGVsZW1lbnR1bSBzaXQgYW1ldCBtYXNzYS4gRXRpYW0gc2VtcGVyIHVybmEgdmVzdGlidWx1bSwgcHJldGl1bSB0b3J0b3IgdmVzdGlidWx1bSwgZGljdHVtIGR1aS5cIixcblx0XHRcdFx0XHRcdFx0XCJWUyBDb2RlXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCIzXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVZpc3VhbHN0dWRpbyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwiZG9ja2VyXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiIzAzMjE0NFwiLFxuXHRcdFx0XHRcdFx0XHRcIk1hZWNlbmFzIGV0IGxlY3R1cyBzYXBpZW4uIEFsaXF1YW0gbmVxdWUgZWxpdCwgc3VzY2lwaXQgZXUgdGluY2lkdW50IHF1aXMsIGZlcm1lbnR1bSBzZWQgbWV0dXMuIFZpdmFtdXMgcHJldGl1bSBlbGVtZW50dW0gZmFjaWxpc2lzLiBOdWxsYW0gYWMgbW9sbGlzIGVsaXQuIERvbmVjIHJob25jdXMgcHVsdmluYXIganVzdG8sIG5lYyBhY2N1bXNhbiBsaWd1bGEgdGluY2lkdW50IGlkLiBTZWQgbm9uIGVuaW0gcG9zdWVyZSwgY29uZGltZW50dW0gbGVvIHF1aXMsIHZpdmVycmEgZXN0LiBNb3JiaSBhYyBtYXR0aXMgaXBzdW0uIFByYWVzZW50IGxhb3JlZXQgbmlzaSBub24ganVzdG8gY29tbW9kbywgdml0YWUgZmVybWVudHVtIG1ldHVzIHVsdHJpY2llcy4gUXVpc3F1ZSBuZXF1ZSBlcmF0LCB0aW5jaWR1bnQgYXQgbWF1cmlzIHZlbCwgdnVscHV0YXRlIHRlbXBvciBuaXNpLiBDdXJhYml0dXIgZXQgdGluY2lkdW50IGRpYW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCIsXG5cdFx0XHRcdFx0XHRcdFwiRG9ja2VyXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGYURvY2tlciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwicmVhY3RcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjMjlCMUVGXCIsXG5cdFx0XHRcdFx0XHRcdFwiQWxpcXVhbSBlZ2V0IGZpbmlidXMgZXJhdCwgbWF0dGlzIGVsZWlmZW5kIGR1aS4gVXQgdGVtcHVzIHVsbGFtY29ycGVyIGp1c3RvIG5vbiB2b2x1dHBhdC4gRHVpcyBpbXBlcmRpZXQgcGVsbGVudGVzcXVlIG9yY2kgaWQgZmV1Z2lhdC4gRHVpcyBmcmluZ2lsbGEsIG51bGxhIHNlZCBwb3J0YSBwb3J0dGl0b3IsIG1pIGVsaXQgaW50ZXJkdW0gZWxpdCwgc2l0IGFtZXQgcnV0cnVtIG51bmMgZW5pbSBhYyBlbGl0LiBNb3JiaSBhIGNvbmRpbWVudHVtIGF1Z3VlLCBhdCBncmF2aWRhIHR1cnBpcy4gU3VzcGVuZGlzc2Ugc2VtcGVyIG9yY2kgbnVuYywgaWQgZmF1Y2lidXMgYW50ZSB2ZWhpY3VsYSB2aXRhZS4gVXQgbWF0dGlzIGZlbGlzIHNlZCBudW5jIGJpYmVuZHVtIGNvbnNlcXVhdC4gVml2YW11cyB0aW5jaWR1bnQgbmliaCB2ZWwgbGliZXJvIHByZXRpdW0gdGluY2lkdW50LiBJbiBudW5jIGVuaW0sIGxvYm9ydGlzIHNpdCBhbWV0IHZlaGljdWxhIHV0LCBoZW5kcmVyaXQgdml0YWUgdGVsbHVzLlwiLFxuXHRcdFx0XHRcdFx0XHRcIk5leHQuanNcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZhUmVhY3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cImdpdGh1YlwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiMyREJENEVcIixcblx0XHRcdFx0XHRcdFx0XCJEdWlzIHZlbCB2YXJpdXMgbmliaCwgbmVjIG1hbGVzdWFkYSB0dXJwaXMuIFF1aXNxdWUgbW9sbGlzIG1heGltdXMgZmVsaXMgZXUgdGVtcG9yLiBQcmFlc2VudCBuZWMgdHJpc3RpcXVlIGxhY3VzLCB2ZWwgZ3JhdmlkYSBvZGlvLiBNYXVyaXMgYWMgbWF4aW11cyB0ZWxsdXMuIFNlZCBldSByaXN1cyBudW5jLiBOdWxsYSBjdXJzdXMgc2VtcGVyIHJob25jdXMuIERvbmVjIHZpdGFlIG5lcXVlIHB1cnVzLiBOdW5jIGlhY3VsaXMgdGVsbHVzIGF0IG1vbGVzdGllIGZpbmlidXMuIFNlZCBpbiB0aW5jaWR1bnQgb2Rpby4gU2VkIGV0IHR1cnBpcyBhYyB0b3J0b3IgbHVjdHVzIGVsZWlmZW5kIGEgZWdldCBlc3QuXCIsXG5cdFx0XHRcdFx0XHRcdFwiR2l0aHViXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI2XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaUdpdGh1YkJhZGdlIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJzYXNzXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiI0NGNjQ5QVwiLFxuXHRcdFx0XHRcdFx0XHRcIk51bGxhIG5vbiBhdWd1ZSBhIG1hc3NhIGVnZXN0YXMgc2FnaXR0aXMgcXVpcyBzaXQgYW1ldCB1cm5hLiBEdWlzIHZpdGFlIHF1YW0gaWQgZHVpIGZlcm1lbnR1bSBsYWNpbmlhLiBQZWxsZW50ZXNxdWUgdmVsIGFudGUgaWQgbmlzbCB2aXZlcnJhIGRpY3R1bSBldSBzZWQgZXguIFZpdmFtdXMgcHVydXMgbGFjdXMsIGlhY3VsaXMgbW9sZXN0aWUgbG9yZW0gc2l0IGFtZXQsIHB1bHZpbmFyIGdyYXZpZGEgbGliZXJvLiBDcmFzIHRpbmNpZHVudCwgdHVycGlzIGVnZXQgbWF4aW11cyBjb25zZXF1YXQsIG1hdXJpcyBzYXBpZW4gYmliZW5kdW0gbGFjdXMsIHV0IHB1bHZpbmFyIGVsaXQgZGlhbSBub24gc2FwaWVuLiBOdW5jIHBsYWNlcmF0IHB1cnVzIG1hbGVzdWFkYSBhY2N1bXNhbiB2aXZlcnJhLiBWZXN0aWJ1bHVtIGNvbnZhbGxpcyBqdXN0byBldSB1cm5hIGRpY3R1bSwgYXQgZnJpbmdpbGxhIHNlbSBhdWN0b3IuXCIsXG5cdFx0XHRcdFx0XHRcdFwiU2Fzc1wiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiN1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RGlTYXNzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJzdGFja292ZXJmbG93XCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiI0Y0ODAyNVwiLFxuXHRcdFx0XHRcdFx0XHRcIkZ1c2NlIGFyY3UgbWFnbmEsIGNvbmd1ZSB2ZWwgZ3JhdmlkYSBpbiwgZGljdHVtIGEgZXJhdC4gQWVuZWFuIHZlc3RpYnVsdW0gYXVndWUgcXVpcyBsb2JvcnRpcyBwb3J0dGl0b3IuIEludGVnZXIgYW50ZSB1cm5hLCBlbGVtZW50dW0gaWQgcG9ydHRpdG9yIHF1aXMsIGVmZmljaXR1ciB1dCBsaWJlcm8uIFNlZCBlZ2V0IGZldWdpYXQgdXJuYS4gUGhhc2VsbHVzIGluIHBvc3VlcmUgb3JjaS4gTWF1cmlzIHNvbGxpY2l0dWRpbiB1cm5hIHF1aXMgcmlzdXMgc2VtcGVyIGNvbW1vZG8uIE1hdXJpcyB1bGxhbWNvcnBlciBtaSBldCBudW5jIHNhZ2l0dGlzLCBhIG1vbGVzdGllIG5lcXVlIGNvbnNlcXVhdC4gQWxpcXVhbSBwcmV0aXVtIHB1bHZpbmFyIHNlbSwgZXUgbGFvcmVldCBuaXNsIHZlaGljdWxhIGx1Y3R1cy4gUHJvaW4gYW50ZSBlbGl0LCB2ZXN0aWJ1bHVtIGF0IG5lcXVlIGZhdWNpYnVzLCBzY2VsZXJpc3F1ZSB2aXZlcnJhIGFudGUuIE51bGxhbSBmYWNpbGlzaXMgbmlzaSBlZ2V0IHRvcnRvciBpYWN1bGlzIHBvcnR0aXRvci5cIixcblx0XHRcdFx0XHRcdFx0XCJTdGFja292ZXJmbG93XCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI4XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVN0YWNrb3ZlcmZsb3cgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiNEN0RBREVcIixcblx0XHRcdFx0XHRcdFx0XCJVdCBhY2N1bXNhbiBsZWN0dXMgYSBlbmltIHB1bHZpbmFyIHZ1bHB1dGF0ZS4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGVjdHVzIHF1aXMgcXVhbSBtb2xsaXMgYmliZW5kdW0uIFByb2luIG1hbGVzdWFkYSBtb2xsaXMgdmVsaXQsIGlkIHRlbXB1cyBhdWd1ZSB0aW5jaWR1bnQgdXQuIFV0IGhlbmRyZXJpdCBudWxsYSBpZCBhdWd1ZSBldWlzbW9kLCBzZWQgcHJldGl1bSBwdXJ1cyBmcmluZ2lsbGEuIFByb2luIHNpdCBhbWV0IGNvbnZhbGxpcyBtaS4gU2VkIG9ybmFyZSBjb25kaW1lbnR1bSBzYXBpZW4sIGluIHVsbGFtY29ycGVyIG5pYmggZ3JhdmlkYSBub24uIFByYWVzZW50IGFyY3UgZW5pbSwgdmVzdGlidWx1bSB1dCBsYWN1cyBzdXNjaXBpdCwgZmFjaWxpc2lzIHJ1dHJ1bSBlc3QuIERvbmVjIGZlcm1lbnR1bSBlcmF0IGFyY3UsIGFjIGRhcGlidXMgbmlzaSB2ZXN0aWJ1bHVtIHNpdCBhbWV0LiBNb3JiaSBzZWQgdGluY2lkdW50IG9kaW8uIEFsaXF1YW0gYmliZW5kdW0gbW9sZXN0aWUgb2RpbywgY29uZGltZW50dW0gdHJpc3RpcXVlIHNhcGllbiB2dWxwdXRhdGUgbmVjLiBWZXN0aWJ1bHVtIHZpdGFlIG1hbGVzdWFkYSBuaXNsLiBNYXVyaXMgdmFyaXVzIGEgbnVsbGEgYXQgbWFsZXN1YWRhLlwiLFxuXHRcdFx0XHRcdFx0XHRcIldvcmRQcmVzc1wiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiOVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RGlXb3JkcHJlc3MgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cImd1bHBcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjRDdEQURFXCIsXG5cdFx0XHRcdFx0XHRcdFwiVXQgYWNjdW1zYW4gbGVjdHVzIGEgZW5pbSBwdWx2aW5hciB2dWxwdXRhdGUuIFZlc3RpYnVsdW0gdnVscHV0YXRlIGxlY3R1cyBxdWlzIHF1YW0gbW9sbGlzIGJpYmVuZHVtLiBQcm9pbiBtYWxlc3VhZGEgbW9sbGlzIHZlbGl0LCBpZCB0ZW1wdXMgYXVndWUgdGluY2lkdW50IHV0LiBVdCBoZW5kcmVyaXQgbnVsbGEgaWQgYXVndWUgZXVpc21vZCwgc2VkIHByZXRpdW0gcHVydXMgZnJpbmdpbGxhLiBQcm9pbiBzaXQgYW1ldCBjb252YWxsaXMgbWkuIFNlZCBvcm5hcmUgY29uZGltZW50dW0gc2FwaWVuLCBpbiB1bGxhbWNvcnBlciBuaWJoIGdyYXZpZGEgbm9uLiBQcmFlc2VudCBhcmN1IGVuaW0sIHZlc3RpYnVsdW0gdXQgbGFjdXMgc3VzY2lwaXQsIGZhY2lsaXNpcyBydXRydW0gZXN0LiBEb25lYyBmZXJtZW50dW0gZXJhdCBhcmN1LCBhYyBkYXBpYnVzIG5pc2kgdmVzdGlidWx1bSBzaXQgYW1ldC4gTW9yYmkgc2VkIHRpbmNpZHVudCBvZGlvLiBBbGlxdWFtIGJpYmVuZHVtIG1vbGVzdGllIG9kaW8sIGNvbmRpbWVudHVtIHRyaXN0aXF1ZSBzYXBpZW4gdnVscHV0YXRlIG5lYy4gVmVzdGlidWx1bSB2aXRhZSBtYWxlc3VhZGEgbmlzbC4gTWF1cmlzIHZhcml1cyBhIG51bGxhIGF0IG1hbGVzdWFkYS5cIixcblx0XHRcdFx0XHRcdFx0XCJXUEd1bHBcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjlcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZhR3VscCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRleHRcIj5cblx0XHRcdFx0XHQ8aDI+e2Rlc2NyaXB0aW9uVGl0bGV9PC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvblRleHR9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuc2VjdGlvbi1oZWFkaW5nIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDQwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyA+IC5jdXN0b20td3JhcHBlcntcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50ZWNobm9sb2dpZXMgPiAuY3VzdG9tLXdyYXBwZXIgPiAuY29udGVudHtcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdHBhZGRpbmc6MDtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGVjaG5vbG9naWVzID4gLmN1c3RvbS13cmFwcGVyID4gaDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4IDEwJTtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblxuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29ucyB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDQwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR3aWR0aDogOTIlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuXHRcdFx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleDogMSAwIGF1dG87XG5cdFx0XHRcdFx0bWFyZ2luOiAxJTtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG5cdFx0XHRcdFx0Ly8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogIzliY2JmNjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRoZWlnaHQ6IDc1cHg7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbiA+IDpnbG9iYWwoc3ZnKSB7XG5cdFx0XHRcdFx0cGFkZGluZzogNSU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0Lmljb246Zm9jdXMge1xuXHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcblx0XHRcdFx0XHRmb250LXNpemU6IDIuMWVtO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XG4vKiBcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCR7YWNjZW50Q29sb3J9IDUwJSwgI2ZmZiA1MCUpOyAqL1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IDAuM3MgYWxsO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuZGVzY3JpcHRpb24tdGV4dCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDE1cHg7XG5cdFx0XHRcdFx0bWFyZ2luOiA1MHB4IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LnVuZGVybGluZSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xuXHRcdFx0XHRcdC50ZWNobm9sb2dpZXN7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6MTIwMHB4O1xuXHRcdFx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRcdFx0cmlnaHQ6MDtcblx0XHRcdFx0XHRcdG1hcmdpbjphdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnRlY2hub2xvZ2llcyA+IC5jdXN0b20td3JhcHBlcntcblx0XHRcdFx0XHRcdHdpZHRoOjkwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnRlY2hub2xvZ2llcyA+IC5jdXN0b20td3JhcHBlciA+IGgye1xuXHRcdFx0XHRcdFx0bWFyZ2luOjMwcHggYXV0bztcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6MDtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY29udGVudHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOjUwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pY29uc3tcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6MDtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDowO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOndyYXA7XG5cdFx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb257XG5cdFx0XHRcdFx0XHRoZWlnaHQ6MTIwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDo0MCU7XG5cdFx0XHRcdFx0XHRtYXJnaW46NXB4IDE1cHg7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pY29uOm50aC1jaGlsZCgxKSxcblx0XHRcdFx0XHQuaWNvbjpudGgtY2hpbGQoMil7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOjA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHQuaWNvbnN7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kZXNjcmlwdGlvbi10ZXh0e1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW46YXV0bztcblx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjUwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xuIl19 */
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
    className: "jsx-716925643",
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
    className: "jsx-716925643" + " " + "featured-project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, "Featured Project"), __jsx("div", {
    className: "jsx-716925643" + " " + "underline short",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }), __jsx("h4", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "Project Title")), __jsx("p", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Praesent ornare ornare tellus, et porta arcu consectetur at. Morbi sed ante odio. Vivamus tortor sem, feugiat vitae tincidunt sed, sollicitudin ut ex. Quisque pharetra mi quis sem dapibus, eget sagittis tortor facilisis. Fusce pellentesque vehicula eros, vel feugiat ante sodales eget. Pellentesque fringilla mattis velit nec fermentum. Maecenas maximus enim vitae lacus ullamcorper porttitor. Sed a nisl scelerisque, vestibulum felis ac, tempor lectus. Nulla orci ante, dignissim quis magna vel, molestie ullamcorper tortor. Donec id nunc placerat enim gravida cursus. Donec fringilla tincidunt mauris lobortis porta. Aliquam consequat ultricies tempor. Nullam in lobortis felis, non volutpat risus. Null euismod turpis ut ipsum mollis, quis lacinia nisl mattis. Nullam eu facilisis"))), __jsx("section", {
    className: "jsx-716925643" + " " + "experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "custom-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "Skills & Experience")), __jsx("div", {
    className: "jsx-716925643" + " " + "custom-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "exp-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "exp-item",
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
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, "Project Management"), __jsx("div", {
    className: "jsx-716925643" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }, "coming soon")), __jsx("div", {
    className: "jsx-716925643" + " " + "exp-item",
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
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, "Team-Based Workflow"), __jsx("div", {
    className: "jsx-716925643" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, "coming soon")), __jsx("div", {
    className: "jsx-716925643" + " " + "exp-item",
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
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, "Site Maintenance"), __jsx("div", {
    className: "jsx-716925643" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 8
    }
  }, "coming soon")), __jsx("div", {
    className: "jsx-716925643" + " " + "exp-item",
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
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 8
    }
  }, "Attention to Detail"), __jsx("div", {
    className: "jsx-716925643" + " " + "underline tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  }, "coming soon")))))), __jsx("footer", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "custom-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "footer-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "footer-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx("h2", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, "Get in touch!")), __jsx("p", {
    className: "jsx-716925643",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }, "If you'd like to discuss any of my skills, projects, or technologies of choice, drop me a line! I'm always looking for the next opportunity to learn, share, and grow as a developer."), __jsx("a", {
    href: "https://github.com/itsseanl",
    className: "jsx-716925643",
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
    className: "jsx-716925643",
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
    className: "jsx-716925643" + " " + "footer-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-716925643" + " " + "underline",
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
    id: "716925643",
    __self: this
  }, `.custom-wrapper{width:90%;max-width:1200px;left:0;right:0;margin:auto;}.experience{background:#fff;}.underline{height:4px;background:#333;width:60%;}.short{width:40%;}main{z-index:1;background:#fff;}.featured-project{width:100%;left:0;right:0;margin:auto;}.featured-project>p{width:90%;left:0;right:0;margin:50px auto;}.featured{box-shadow:inset 0px 2px 12px 2px rgba(0,0,0,0.3);background:rgba(255,255,255,0.8);background-blend-mode:lighten;background-image:url(${__webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png")});background-size:cover;background-position:center;background-repeat:no-repeat;min-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 5%;text-align:center;}.overlay{background:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;max-width:1200px;left:0;right:0;margin:auto;}.experience>h2,.experience>.custom-wrapper>h2{width:100%;left:0;right:0;padding:15px 25px;position:-webkit-sticky;position:sticky;top:0;background:#fff;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tiny{width:20%;}.exp-item{width:100%;left:0;right:0;margin:25px auto;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);background:#fffff0;padding:25px 15px;}.exp-item svg{font-size:28px;}footer{background:#333;height:auto;padding:50px 0;}.footer-left>.footer-heading>h2{color:#fff;background:#333;margin:5px;}.footer-left>.footer-heading{left:0;right:0;display:block;width:90%;color:#fff !important;background:#333;}.footer-heading>.underline{background:#fff;position:relative;}.footer-left{color:#fff;font-size:24px;}.footer-left>a{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;font-family:"Lobster",sans-serif;}.footer-left>a>svg{padding-right:15px;font-size:36px;}@media(min-width:768px){.custom-wrapper{width:90%;max-width:1200px;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.exp-item{width:45%;}footer>.custom-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.footer-left,.footer-right{width:45%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:500px;}.footer-left{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.footer-heading,.footer-left>p,.footer-left>a{text-align:left;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:left!important width:100%;-webkit-box-align:left!important width:100%;-ms-flex-align:left!important width:100%;align-items:left!important width:100%;font-size:14px;}.footer-left>p{font-size:18px;}.footer-right>form{width:100%;}.footer-right>form>label{color:#fff;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHc0IsQUFHYyxBQVFRLEFBSUwsQUFLRCxBQUdBLEFBSUMsQUFNRCxBQU0yQyxBQWtCakIsQUFlekIsQUFXRSxBQUtILEFBR0MsQUFTSSxBQUdDLEFBTUwsQUFNTCxBQVVVLEFBSU4sQUFLQSxBQVNRLEFBTVIsQUFJRyxBQUtILEFBR0csQUFPRixBQVNhLEFBTVAsQUFPRCxBQUlKLEFBR0EsT0FqRkwsR0FoSFEsQUFpQmhCLEFBR2lCLEFBVVQsQUF1RFIsQUE2RGtCLEFBU2pCLEFBVWEsQ0F6SkcsQUFZVCxBQTZDQSxBQW1CQSxBQWtCUyxBQW9CRixBQUtNLEFBNERuQixBQUdBLElBakdGLEFBaUJjLEFBeUVaLENBbExGLEFBNEZhLEFBcUJNLEFBMERJLENBckpkLENBTkEsQUE2Q0EsQUFtQkEsQ0FtRE0sR0EwQkEsR0F0SUcsQ0FYbEIsQUFLYSxBQTZDTSxBQW1CRCxBQXNDbEIsQ0EvSE0sQUFZSyxBQThGQSxBQXdDVixDQTdDZSxDQWFOLElBN0RJLENBcERQLEFBeUhQLEFBbUJBLEdBaElBLENBYUEsQUFpRkEsQ0FRdUIsR0FqSFosQUE4QlgsQ0EwRGdELEFBWWhELENBOUJpQixNQXJDb0IsSUFoQ3RDLE9BaUhrQixBQWVKLGFBcERVLEFBc0VQLEFBUUUsR0F4Q2xCLE1BakYrQixDQXFDeEIsR0FrQmEsR0FqQkgsTUE0Rk8sVUEzRnhCLEFBaUJtQixDQXRDSSxBQStIVixFQVJZLElBeEkyQixXQXdEcEQsT0F5RG9CLElBbEJPLEVBMEJJLGVBOUVQLFlBMUNELFVBaUlFLFdBaEhELENBaEJJLGNBZ0gzQixRQXVCQyxLQXRJMkIsMkJBNkZWLENBNUZELFVBd0NsQixDQThFd0IsTUFySFYsZUE4SE8sR0FjSixRQTlIRyxPQStIbEIseUNBNUlxQixDQTJGUixlQUNtQixhQXlCaEMsS0FTaUIsV0FoSFAsSUErRVosRUFrQ0UsS0FoSGUsaUJBQ1YsS0FmaUIsRUFnQmhCLFFBQ0ssWUFDYiw2RUFqQm9CLDZGQUNILGdCQUNFLGtCQUVuQiIsImZpbGUiOiIvcm9vdC9zaXRlcy9wb3J0Zm9saW92Mi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1kVGltZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IEZhVXNlcnMsIEZhVG9vbHMsIEZhR2xhc3NlcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFEb2NrZXIsIEZhUmVhY3QsIEZhR3VscCwgRmFHaXRTcXVhcmUsIEZhTGlua2VkaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuaW1wb3J0IE15SGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UZWNobm9sb2dpZXNcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybVwiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0PE15SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0XG5cdFx0XHRcdDxUZWNobm9sb2dpZXMgLz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWQtcHJvamVjdFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRcIj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8aDI+RmVhdHVyZWQgUHJvamVjdDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHNob3J0XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxoND5Qcm9qZWN0IFRpdGxlPC9oND5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFByYWVzZW50IG9ybmFyZSBvcm5hcmUgdGVsbHVzLCBldCBwb3J0YSBhcmN1IGNvbnNlY3RldHVyIGF0LiBNb3JiaVxuXHRcdFx0XHRcdFx0XHRzZWQgYW50ZSBvZGlvLiBWaXZhbXVzIHRvcnRvciBzZW0sIGZldWdpYXQgdml0YWUgdGluY2lkdW50IHNlZCxcblx0XHRcdFx0XHRcdFx0c29sbGljaXR1ZGluIHV0IGV4LiBRdWlzcXVlIHBoYXJldHJhIG1pIHF1aXMgc2VtIGRhcGlidXMsIGVnZXRcblx0XHRcdFx0XHRcdFx0c2FnaXR0aXMgdG9ydG9yIGZhY2lsaXNpcy4gRnVzY2UgcGVsbGVudGVzcXVlIHZlaGljdWxhIGVyb3MsIHZlbFxuXHRcdFx0XHRcdFx0XHRmZXVnaWF0IGFudGUgc29kYWxlcyBlZ2V0LiBQZWxsZW50ZXNxdWUgZnJpbmdpbGxhIG1hdHRpcyB2ZWxpdCBuZWNcblx0XHRcdFx0XHRcdFx0ZmVybWVudHVtLiBNYWVjZW5hcyBtYXhpbXVzIGVuaW0gdml0YWUgbGFjdXMgdWxsYW1jb3JwZXJcblx0XHRcdFx0XHRcdFx0cG9ydHRpdG9yLiBTZWQgYSBuaXNsIHNjZWxlcmlzcXVlLCB2ZXN0aWJ1bHVtIGZlbGlzIGFjLCB0ZW1wb3Jcblx0XHRcdFx0XHRcdFx0bGVjdHVzLiBOdWxsYSBvcmNpIGFudGUsIGRpZ25pc3NpbSBxdWlzIG1hZ25hIHZlbCwgbW9sZXN0aWVcblx0XHRcdFx0XHRcdFx0dWxsYW1jb3JwZXIgdG9ydG9yLiBEb25lYyBpZCBudW5jIHBsYWNlcmF0IGVuaW0gZ3JhdmlkYSBjdXJzdXMuXG5cdFx0XHRcdFx0XHRcdERvbmVjIGZyaW5naWxsYSB0aW5jaWR1bnQgbWF1cmlzIGxvYm9ydGlzIHBvcnRhLiBBbGlxdWFtIGNvbnNlcXVhdFxuXHRcdFx0XHRcdFx0XHR1bHRyaWNpZXMgdGVtcG9yLiBOdWxsYW0gaW4gbG9ib3J0aXMgZmVsaXMsIG5vbiB2b2x1dHBhdCByaXN1cy5cblx0XHRcdFx0XHRcdFx0TnVsbCBldWlzbW9kIHR1cnBpcyB1dCBpcHN1bSBtb2xsaXMsIHF1aXMgbGFjaW5pYSBuaXNsIG1hdHRpcy5cblx0XHRcdFx0XHRcdFx0TnVsbGFtIGV1IGZhY2lsaXNpc1xuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuXHRcdFx0XHQ8aDI+U2tpbGxzICYgRXhwZXJpZW5jZTwvaDI+XG5cdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbXNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PE1kVGltZXIgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlByb2plY3QgTWFuYWdlbWVudDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhVXNlcnMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlRlYW0tQmFzZWQgV29ya2Zsb3c8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhVG9vbHMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlNpdGUgTWFpbnRlbmFuY2U8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhR2xhc3NlcyAvPlxuXHRcdFx0XHRcdFx0XHQ8aDM+QXR0ZW50aW9uIHRvIERldGFpbDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8cD5jb21pbmcgc29vbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0XHQ8Zm9vdGVyPlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxlZnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0PGgyPkdldCBpbiB0b3VjaCE8L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwPklmIHlvdSdkIGxpa2UgdG8gZGlzY3VzcyBhbnkgb2YgbXkgc2tpbGxzLCBwcm9qZWN0cywgb3IgdGVjaG5vbG9naWVzIG9mIGNob2ljZSwgZHJvcCBtZSBhIGxpbmUhXG5cdFx0XHRcdFx0SSdtIGFsd2F5cyBsb29raW5nIGZvciB0aGUgbmV4dCBvcHBvcnR1bml0eSB0byBsZWFybiwgc2hhcmUsIGFuZCBncm93IGFzIGEgZGV2ZWxvcGVyLjwvcD4gXG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubFwiPjxGYUdpdFNxdWFyZSAvPmh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubDwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l0c3NlYW5sL1wiPjxGYUxpbmtlZGluIC8+aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l0c3NlYW5sLzwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1yaWdodFwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+PC9kaXY+XG5cdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHQuY3VzdG9tLXdyYXBwZXJ7XG5cdFx0XHRcdHdpZHRoOjkwJTtcblx0XHRcdFx0bWF4LXdpZHRoOjEyMDBweDtcblx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRyaWdodDowO1xuXHRcdFx0XHRtYXJnaW46YXV0bztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnNob3J0IHtcblx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZmVhdHVyZWQtcHJvamVjdCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkLXByb2plY3QgPiBwIHtcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiA1MHB4IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkIHtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3JlcXVpcmUoXCIuLi9hc3NldHMvaW1nL3Byb2plY3QucG5nXCIpfSk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDUlO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm92ZXJsYXkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRtYXgtd2lkdGg6MTIwMHB4O1xuXHRcdFx0XHRcdGxlZnQ6MDtcblx0XHRcdFx0XHRyaWdodDowO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cGVyaWVuY2UgPiBoMixcblx0XHRcdFx0LmV4cGVyaWVuY2UgPiAuY3VzdG9tLXdyYXBwZXIgPiBoMiB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4IDI1cHg7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5leHAtaXRlbXMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGlueSB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwLWl0ZW0ge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAyNXB4IGF1dG87XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDE1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cC1pdGVtIDpnbG9iYWwoc3ZnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvb3RlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblxuXHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gLmZvb3Rlci1oZWFkaW5nID4gaDIge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdFx0bWFyZ2luOjVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gLmZvb3Rlci1oZWFkaW5nIHtcblx0XHRcdFx0XHRsZWZ0OjA7XG5cdFx0XHRcdFx0cmlnaHQ6MDtcblx0XG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHR3aWR0aDo5MCU7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmZvb3Rlci1oZWFkaW5nID4gLnVuZGVybGluZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1sZWZ0e1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOjI0cHg7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gYXtcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XG5cdFx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6XCJMb2JzdGVyXCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gYSA+IDpnbG9iYWwoc3ZnKXtcblx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OjE1cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOjM2cHg7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEobWluLXdpZHRoOjc2OHB4KXtcblx0XHRcdFx0XHQuY3VzdG9tLXdyYXBwZXJ7XG5cdFx0XHRcdFx0XHR3aWR0aDo5MCU7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6MTIwMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZXhwLWl0ZW1ze1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOndyYXA7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5leHAtaXRlbXtcblx0XHRcdFx0XHRcdHdpZHRoOjQ1JTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9vdGVyID4gLmN1c3RvbS13cmFwcGVye1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOm5vd3JhcDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5mb290ZXItbGVmdCxcblx0XHRcdFx0XHRcdC5mb290ZXItcmlnaHR7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOjQ1JTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6NTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZm9vdGVyLWxlZnR7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZm9vdGVyLWhlYWRpbmcsXG5cdFx0XHRcdFx0XHQuZm9vdGVyLWxlZnQgPiBwLFxuXHRcdFx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gYXtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6bGVmdCFpbXBvcnRhbnRcblx0XHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZm9vdGVyLWxlZnQgPiBwe1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6MThweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0LmZvb3Rlci1yaWdodCA+IGZvcm17XG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZm9vdGVyLXJpZ2h0ID4gZm9ybSA+IGxhYmVsIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8Lz5cblx0KTtcbn1cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTogXCJMb2JzdGVyXCI7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCI7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXX0= */
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