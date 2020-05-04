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

module.exports = "/_next/static/images/project-3ed19bdc3cad41af681e345a6af0b90c.png";

/***/ }),

/***/ "./components/BuildSteps.js":
/*!**********************************!*\
  !*** ./components/BuildSteps.js ***!
  \**********************************/
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
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/BuildSteps.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const BuildSteps = ({
  color
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]) + " " + "workflow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]) + " " + "custom-wrapper ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Click to learn more about my workflow!")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]) + " " + "custom-wrapper links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]) + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://github.com/itsseanl/wp-boilerplate",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiWordpress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]) + " " + "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://github.com/itsseanl/NextJS-workflow",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1028175671", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaReact"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1028175671",
    dynamic: [color],
    __self: undefined
  }, `.workflow.__jsx-style-dynamic-selector{background:#fffff0;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:999;box-shadow:-1px 0px 8px 2px rgba(0,0,0,0.3);}.workflow.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;}*.__jsx-style-dynamic-selector{color:#fff;}h3.__jsx-style-dynamic-selector{text-align:center;margin:0;padding:15px;color:#333;}.left.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>svg,.right.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>svg{font-size:36px;left:0;right:0;margin:5px 15px;color:${color};}.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:Center;-webkit-justify-content:Center;-ms-flex-pack:Center;justify-content:Center;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9CdWlsZFN0ZXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHOEIsQUFRTCxBQUdILEFBR08sQUFPSCxBQU9GLFdBaEJmLEdBSEEsQ0FhUyxHQVBFLENBZE8sR0FzQlIsS0FQSyxHQVFHLFVBUEwsTUFRd0IsS0FQckMsUUFoQlEsTUFDSyxTQTBCQSxFQXpCQyxLQXNCZCxJQUl5QixHQXpCd0IsNENBQ2pELG9EQXlCQSIsImZpbGUiOiIvVXNlcnMvc2Vhbmx5b25zL1NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQnVpbGRTdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYVJlYWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBEaVdvcmRwcmVzcyB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xuY29uc3QgQnVpbGRTdGVwcyA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrZmxvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS13cmFwcGVyIFwiPlxuICAgICAgICAgIDxoMz5DbGljayB0byBsZWFybiBtb3JlIGFib3V0IG15IHdvcmtmbG93ITwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS13cmFwcGVyIGxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2l0c3NlYW5sL3dwLWJvaWxlcnBsYXRlXCI+XG4gICAgICAgICAgICAgIDxEaVdvcmRwcmVzcyAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaXRzc2VhbmwvTmV4dEpTLXdvcmtmbG93XCI+XG4gICAgICAgICAgICAgIDxGYVJlYWN0IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53b3JrZmxvdyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmMDtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgLndvcmtmbG93IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQgPiBhID4gOmdsb2JhbChzdmcpLFxuICAgICAgICAucmlnaHQgPiBhID4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBDZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCdWlsZFN0ZXBzO1xuIl19 */
/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/components/BuildSteps.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildSteps);

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
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ContactForm = ({
  color
}) => {
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
    email: "",
    message: ""
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
        email: "",
        message: ""
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
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleOnSubmit,
    className: "jsx-1264997651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1264997651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Email"), __jsx("input", {
    id: "email",
    type: "email",
    onChange: handleOnChange,
    required: true,
    value: inputs.email,
    className: "jsx-1264997651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-1264997651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Message"), __jsx("textarea", {
    id: "message",
    onChange: handleOnChange,
    required: true,
    value: inputs.message,
    className: "jsx-1264997651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-1264997651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, !status.submitting ? !status.submitted ? "Submit" : "Submitted" : "Submitting...")), status.info.error && __jsx("div", {
    className: "jsx-1264997651" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-1264997651" + " " + "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1264997651",
    __self: undefined
  }, "label.jsx-1264997651{font-family:\"Lobster\",sans-serif;font-size:18px;text-align:left;width:100%;color:#fff;}button.jsx-1264997651{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;border:none;}form.jsx-1264997651{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-1264997651,textarea.jsx-1264997651{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-1264997651{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBRzZDLEFBT2YsQUFVTixBQVFGLEFBUUUsV0FQQSxFQVFmLE1BMUJtQyxLQW1CcEIsU0ExQkUsSUEyQkEsV0ExQkMsR0FPRCxDQW9CSCxZQTFCRCxBQTJCQyxFQXBCSSxRQVFNLENBZFgsQ0EyQmIsTUFwQmEsSUFOYixPQU9lLGFBQ0EsYUFDRCxZQUNkLHFCQUl5QixtR0FDSiw2RkFDRixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3NlYW5seW9ucy9TaXRlcy9wb3J0Zm9saW92Mi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHsgY29sb3IgfSkgPT4ge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe1xuICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XG4gIH0pO1xuXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9KTtcblxuICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChzdGF0dXMsIG1zZykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbXNnIH1cbiAgICAgIH0pO1xuICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiXCJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBpbmZvOiB7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBlID0+IHtcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBzZXRJbnB1dHMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSkpO1xuICAgIHNldFN0YXR1cyh7XG4gICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTdGF0dXMocHJldlN0YXR1cyA9PiAoeyAuLi5wcmV2U3RhdHVzLCBzdWJtaXR0aW5nOiB0cnVlIH0pKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvc2VuZFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0cylcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICBoYW5kbGVSZXNwb25zZShyZXMuc3RhdHVzLCB0ZXh0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMubWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N0YXR1cy5zdWJtaXR0aW5nfT5cbiAgICAgICAgICB7IXN0YXR1cy5zdWJtaXR0aW5nXG4gICAgICAgICAgICA/ICFzdGF0dXMuc3VibWl0dGVkXG4gICAgICAgICAgICAgID8gXCJTdWJtaXRcIlxuICAgICAgICAgICAgICA6IFwiU3VibWl0dGVkXCJcbiAgICAgICAgICAgIDogXCJTdWJtaXR0aW5nLi4uXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3N0YXR1cy5pbmZvLmVycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVycm9yOiB7c3RhdHVzLmluZm8ubXNnfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshc3RhdHVzLmluZm8uZXJyb3IgJiYgc3RhdHVzLmluZm8ubXNnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIl19 */\n/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/components/ContactForm.js */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const MyHeader = () => {
  return __jsx("header", {
    className: "jsx-2033171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2033171661" + " " + "custom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-2033171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Sean Lyons"), __jsx("ul", {
    className: "jsx-2033171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-2033171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("li", {
    className: "jsx-2033171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2033171661",
    __self: undefined
  }, "header.jsx-2033171661{background:#fffff0;padding-top:25px;padding-bottom:25px;color:#333;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.15);position:relative;z-index:2;height:100px;}.custom-wrapper.jsx-2033171661{width:100%;max-width:1200px;left:0;right:0;margin:auto;padding-left:25px;padding-right:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-2033171661{position:-webkit-sticky;position:sticky;}ul.jsx-2033171661{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:0;}li.jsx-2033171661{padding:0px 25px;font-size:36px;}header.jsx-2033171661 svg{-webkit-transition:0.6s all;transition:0.6s all;}header.jsx-2033171661 svg:hover{cursor:pointer;-webkit-transform:rotate(360deg) scale(1.2);-ms-transform:rotate(360deg) scale(1.2);transform:rotate(360deg) scale(1.2);-webkit-transition:0.6s all;transition:0.6s all;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUc4QixBQVVSLEFBYUssQUFHQSxBQUtDLEFBSUcsQUFHTCxXQTNCRSxJQTRCbUIsQ0FadkIsQ0FLRSxFQS9CRSxTQVdWLElBcUJULEdBcEJVLENBWFksSUFzQnRCLEdBVmMsS0FzQmQsT0FyQm9CLENBWlAsV0FDcUMsTUFZN0IsaUJBWUosRUFYRixhQVlmLE9BeEJvQixrQkFDUixLQWtDVSxLQWpDUCxhQUNmLGFBVWdDLGlCQXVCaEMsa0dBdEJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NlYW5seW9ucy9TaXRlcy9wb3J0Zm9saW92Mi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuY29uc3QgTXlIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXdyYXBwZXJcIj5cbiAgICAgICAgPGgxPlNlYW4gTHlvbnM8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEZhR2l0aHViIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8RmFMaW5rZWRpbiAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jdXN0b20td3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC42cyBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIDpnbG9iYWwoc3ZnKTpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjZzIGFsbDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MyHeader);

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Projects = ({
  color
}) => {
  const {
    0: projects,
    1: setProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    title: "CtaMaster - WordPress Plugin",
    body: "ctaMaster aims to provide easy to implement banners, modals, and more to your WordPress website. Currently banner functionality is implemented, with new features coming soon!",
    class: "project",
    liveLink: "/",
    codeLInk: "https://github.com/itsseanl/ctaMaster-wp-plugin",
    img: "/img/ctaMaster.png"
  }, {
    title: "UltimateStarterPacks",
    body: "Ultimate Starter Packs is a pet project that I've been using to explore SEO and marketing on my own. I've also learned a great deal by building it in NextJS! You can find more information in the Github repo readme.",
    class: "project active",
    liveLink: "https://ultimatestarterpacks.com",
    codeLInk: "https://github.com/itsseanl/ultimatestarterpacks",
    img: "/img/usp.png"
  }, {
    title: "OpenWeatherMap API",
    body: "Utilizing the OpenWeatherMap API, I build this basic webapp to practice fetching data with react. It also utilizes rechart to graph the daily temperature by hour",
    class: "project",
    liveLink: "https://openweathermap.now.sh",
    codeLInk: "https://github.com/itsseanl/Pixel-Weather-Clone",
    img: "/img/owmsmaller.png"
  }, {
    title: "Spotify Visualizer",
    body: "An ambitious project, I'm working to utilize spotify's web API data to visualize each currently playing track. I plan to add additional features, such as the ability to log in and see a long-term history of your recently played tracks.",
    class: "project",
    liveLink: "/",
    codeLInk: "https://github.com/itsseanl/next-spotify-visualizer",
    img: "/img/spotify.png"
  }]);
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const projectWrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handleSlider = direction => {
    console.log((projects.length - 1) * 80);

    if (direction == "left") {
      if (scroll == 0) {
        setScroll(-(projects.length - 1) * 80);
      } else {
        setScroll(scroll + 80);
      }
    } else if (direction == "right") {
      if (scroll <= 0 && scroll > -(projects.length - 1) * 80) {
        setScroll(scroll - 80);
      } else {
        setScroll(0);
      }
    }
  };

  console.log(projects);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "custom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Projects")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    onClick: e => handleSlider("left"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "left-click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsChevronLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })), __jsx("div", {
    ref: projectWrapper,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, projects && projects.map(project => {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + (project.class || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, project.title), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, project.body), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, __jsx("a", {
      href: project.codeLink,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "btn code",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, "Code"), __jsx("a", {
      href: project.liveLink,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "btn live",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, "Live Project"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, __jsx("img", {
      src: project.img,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    })));
  })), __jsx("div", {
    onClick: e => handleSlider("right"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3271783693", [color, scroll, color, color, color, color, color, color]]]) + " " + "right-click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsChevronRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3271783693",
    dynamic: [color, scroll, color, color, color, color, color, color],
    __self: undefined
  }, `.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{text-align:center;}.wrap.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding-top:50px;padding-bottom:50px;overflow-x:hidden;}.underline.__jsx-style-dynamic-selector{width:50%;left:0;right:0;margin:auto;}.left-click.__jsx-style-dynamic-selector,.right-click.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:36px;width:10vw;position:relative;z-index:99;background:#fff;color:${color};}.projects.__jsx-style-dynamic-selector{width:80vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:auto;max-height:500px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:translateX(${scroll}vw);-ms-transform:translateX(${scroll}vw);transform:translateX(${scroll}vw);-webkit-transition:0.3s all;transition:0.3s all;}.project.__jsx-style-dynamic-selector{width:80vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s all;transition:0.3s all;height:auto;max-height:500px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}.left.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;padding:15px;}.right.__jsx-style-dynamic-selector{width:0;overflow:hidden;}img.__jsx-style-dynamic-selector{object-fit:cover;box-shadow:0px 0px 8px 2px rgba(0,0,0,0.3);max-height:500px;}.btns.__jsx-style-dynamic-selector{padding:15px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.btn.__jsx-style-dynamic-selector{background:#fff;padding:5px;margin:5px;-webkit-text-decoration:none;text-decoration:none;width:150px;color:#333;text-align:center;font-family:"Lobster",sans-serif;cursor:pointer;}.code.__jsx-style-dynamic-selector{border:2px solid ${color};color:${color};background:#fffff0;}.code.__jsx-style-dynamic-selector:hover{background:${color};color:#fff;}.live.__jsx-style-dynamic-selector{color:#fffff0;background:${color};}.live.__jsx-style-dynamic-selector:hover{background:#fffff0;color:${color};border:${color};}@media (max-width:768px){.right.__jsx-style-dynamic-selector{display:none;}.left.__jsx-style-dynamic-selector{width:80vw;}}@media (min-width:768px){.wrap.__jsx-style-dynamic-selector{margin:0;padding-bottom:0;}.project.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.left.__jsx-style-dynamic-selector{padding:50px;}.left.__jsx-style-dynamic-selector,.right.__jsx-style-dynamic-selector{width:40vw;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR2UsQUFHd0IsQUFHUCxBQVFELEFBT0csQUFXRixBQVVBLEFBWUUsQUFNTCxBQUlTLEFBS0osQUFPRyxBQVc4QixBQUtOLEFBSTFCLEFBSUssQUFPTCxBQUdGLEFBS0YsQUFJVSxBQUdOLEFBSUYsUUFqRUksQ0F1REUsQ0FyR1gsQ0FSTSxBQTBCQSxBQVVBLEFBb0ViLEFBaUJ5QixFQTFEZCxBQXNDWCxBQWVBLENBMUJ3QyxFQXBCNUIsQ0E3REosQUFpRHNDLENBN0QvQyxDQWlHb0MsS0F2Q3BDLEFBU2MsQ0F0REQsQ0FvR1osRUF2Q1csU0E1RFosRUE2RHNCLENBY1YsTUFMd0IsS0FNcEMsR0FJQSxBQUlxQyxNQXBDbkIsU0FzRGpCLEtBbEd1QixBQWlDRCxHQVl2QixJQXNCb0IsSUFqRkYsQUEwQkEsQUFVSyxJQW9DVixDQXVCYixRQS9Cd0IsRUFrQnhCLENBVFksV0FDTyxpQkErQ00sQ0E5Q1Usa0JBMUVqQixBQTBCTCxJQXFCTSxRQXBCRCxHQVNNLEFBdUNSLEVBMUVLLEtBK0NQLEdBbENNLElBY0wsQ0FnRGYsS0EzQkEsRUEvQ21CLFlBOERuQixNQTdEQSx5QkFzSHFCLEdBNUZpQywrQkFRbEMsSUF0QkosZUFDSixXQUNPLGtCQUNQLFdBQ0ssQUF1R2hCLGdCQXRHbUMsa0JBa0JmLGlCQWpCckIsOEJBU3FCLENBU1IsWUFDSyxpQkFDSCxrQkFWZixvQ0FXQSIsImZpbGUiOiIvVXNlcnMvc2Vhbmx5b25zL1NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc0NoZXZyb25MZWZ0LCBCc0NoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5jb25zdCBQcm9qZWN0cyA9ICh7IGNvbG9yIH0pID0+IHtcblx0Y29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiQ3RhTWFzdGVyIC0gV29yZFByZXNzIFBsdWdpblwiLFxuXHRcdFx0Ym9keTpcblx0XHRcdFx0XCJjdGFNYXN0ZXIgYWltcyB0byBwcm92aWRlIGVhc3kgdG8gaW1wbGVtZW50IGJhbm5lcnMsIG1vZGFscywgYW5kIG1vcmUgdG8geW91ciBXb3JkUHJlc3Mgd2Vic2l0ZS4gQ3VycmVudGx5IGJhbm5lciBmdW5jdGlvbmFsaXR5IGlzIGltcGxlbWVudGVkLCB3aXRoIG5ldyBmZWF0dXJlcyBjb21pbmcgc29vbiFcIixcblx0XHRcdGNsYXNzOiBcInByb2plY3RcIixcblx0XHRcdGxpdmVMaW5rOiBcIi9cIixcblx0XHRcdGNvZGVMSW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubC9jdGFNYXN0ZXItd3AtcGx1Z2luXCIsXG5cdFx0XHRpbWc6IFwiL2ltZy9jdGFNYXN0ZXIucG5nXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJVbHRpbWF0ZVN0YXJ0ZXJQYWNrc1wiLFxuXHRcdFx0Ym9keTpcblx0XHRcdFx0XCJVbHRpbWF0ZSBTdGFydGVyIFBhY2tzIGlzIGEgcGV0IHByb2plY3QgdGhhdCBJJ3ZlIGJlZW4gdXNpbmcgdG8gZXhwbG9yZSBTRU8gYW5kIG1hcmtldGluZyBvbiBteSBvd24uIEkndmUgYWxzbyBsZWFybmVkIGEgZ3JlYXQgZGVhbCBieSBidWlsZGluZyBpdCBpbiBOZXh0SlMhIFlvdSBjYW4gZmluZCBtb3JlIGluZm9ybWF0aW9uIGluIHRoZSBHaXRodWIgcmVwbyByZWFkbWUuXCIsXG5cdFx0XHRjbGFzczogXCJwcm9qZWN0IGFjdGl2ZVwiLFxuXHRcdFx0bGl2ZUxpbms6IFwiaHR0cHM6Ly91bHRpbWF0ZXN0YXJ0ZXJwYWNrcy5jb21cIixcblx0XHRcdGNvZGVMSW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubC91bHRpbWF0ZXN0YXJ0ZXJwYWNrc1wiLFxuXHRcdFx0aW1nOiBcIi9pbWcvdXNwLnBuZ1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiT3BlbldlYXRoZXJNYXAgQVBJXCIsXG5cdFx0XHRib2R5OlxuXHRcdFx0XHRcIlV0aWxpemluZyB0aGUgT3BlbldlYXRoZXJNYXAgQVBJLCBJIGJ1aWxkIHRoaXMgYmFzaWMgd2ViYXBwIHRvIHByYWN0aWNlIGZldGNoaW5nIGRhdGEgd2l0aCByZWFjdC4gSXQgYWxzbyB1dGlsaXplcyByZWNoYXJ0IHRvIGdyYXBoIHRoZSBkYWlseSB0ZW1wZXJhdHVyZSBieSBob3VyXCIsXG5cdFx0XHRjbGFzczogXCJwcm9qZWN0XCIsXG5cdFx0XHRsaXZlTGluazogXCJodHRwczovL29wZW53ZWF0aGVybWFwLm5vdy5zaFwiLFxuXHRcdFx0Y29kZUxJbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2l0c3NlYW5sL1BpeGVsLVdlYXRoZXItQ2xvbmVcIixcblx0XHRcdGltZzogXCIvaW1nL293bXNtYWxsZXIucG5nXCIsXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdHRpdGxlOiBcIlNwb3RpZnkgVmlzdWFsaXplclwiLFxuXHRcdFx0Ym9keTpcblx0XHRcdFx0XCJBbiBhbWJpdGlvdXMgcHJvamVjdCwgSSdtIHdvcmtpbmcgdG8gdXRpbGl6ZSBzcG90aWZ5J3Mgd2ViIEFQSSBkYXRhIHRvIHZpc3VhbGl6ZSBlYWNoIGN1cnJlbnRseSBwbGF5aW5nIHRyYWNrLiBJIHBsYW4gdG8gYWRkIGFkZGl0aW9uYWwgZmVhdHVyZXMsIHN1Y2ggYXMgdGhlIGFiaWxpdHkgdG8gbG9nIGluIGFuZCBzZWUgYSBsb25nLXRlcm0gaGlzdG9yeSBvZiB5b3VyIHJlY2VudGx5IHBsYXllZCB0cmFja3MuXCIsXG5cdFx0XHRjbGFzczogXCJwcm9qZWN0XCIsXG5cblx0XHRcdGxpdmVMaW5rOiBcIi9cIixcblx0XHRcdGNvZGVMSW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubC9uZXh0LXNwb3RpZnktdmlzdWFsaXplclwiLFxuXHRcdFx0aW1nOiBcIi9pbWcvc3BvdGlmeS5wbmdcIixcblx0XHR9LFxuXHRdKTtcblx0Y29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBwcm9qZWN0V3JhcHBlciA9IHVzZVJlZihudWxsKTtcblx0Y29uc3QgaGFuZGxlU2xpZGVyID0gKGRpcmVjdGlvbikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKChwcm9qZWN0cy5sZW5ndGggLSAxKSAqIDgwKTtcblx0XHRpZiAoZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XG5cdFx0XHRpZiAoc2Nyb2xsID09IDApIHtcblx0XHRcdFx0c2V0U2Nyb2xsKC0ocHJvamVjdHMubGVuZ3RoIC0gMSkgKiA4MCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTY3JvbGwoc2Nyb2xsICsgODApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuXHRcdFx0aWYgKHNjcm9sbCA8PSAwICYmIHNjcm9sbCA+IC0ocHJvamVjdHMubGVuZ3RoIC0gMSkgKiA4MCkge1xuXHRcdFx0XHRzZXRTY3JvbGwoc2Nyb2xsIC0gODApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0U2Nyb2xsKDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc29sZS5sb2cocHJvamVjdHMpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS13cmFwcGVyXCI+XG5cdFx0XHRcdDxoMj5Qcm9qZWN0czwvaDI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY2xpY2tcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU2xpZGVyKFwibGVmdFwiKX0+XG5cdFx0XHRcdFx0PEJzQ2hldnJvbkxlZnQgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIiByZWY9e3Byb2plY3RXcmFwcGVyfT5cblx0XHRcdFx0XHR7cHJvamVjdHMgJiZcblx0XHRcdFx0XHRcdHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcm9qZWN0LmNsYXNzfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e3Byb2plY3QudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Byb2plY3QuYm9keX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnRuc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3Byb2plY3QuY29kZUxpbmt9IGNsYXNzTmFtZT1cImJ0biBjb2RlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDb2RlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3Byb2plY3QubGl2ZUxpbmt9IGNsYXNzTmFtZT1cImJ0biBsaXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRMaXZlIFByb2plY3Rcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9qZWN0LmltZ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNsaWNrXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVNsaWRlcihcInJpZ2h0XCIpfT5cblx0XHRcdFx0XHQ8QnNDaGV2cm9uUmlnaHQgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuY3VzdG9tLXdyYXBwZXIgPiBoMiB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC53cmFwIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXHRcdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5sZWZ0LWNsaWNrLFxuXHRcdFx0XHQucmlnaHQtY2xpY2sge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwdnc7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHotaW5kZXg6IDk5O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3J9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5wcm9qZWN0cyB7XG5cdFx0XHRcdFx0d2lkdGg6IDgwdnc7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0bWF4LWhlaWdodDogNTAwcHg7XG5cdFx0XHRcdFx0ZmxleDogMSAwIGF1dG87XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7c2Nyb2xsfXZ3KTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHQucHJvamVjdCB7XG5cdFx0XHRcdFx0d2lkdGg6IDgwdnc7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdG1heC1oZWlnaHQ6IDUwMHB4O1xuXHRcdFx0XHRcdGZsZXg6IDEgMCBhdXRvO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmxlZnQge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQucmlnaHQge1xuXHRcdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdFx0XHRcdG1heC1oZWlnaHQ6IDUwMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5idG5zIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYnRuIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jb2RlIHtcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAke2NvbG9yfTtcblx0XHRcdFx0XHRjb2xvcjogJHtjb2xvcn07XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY29kZTpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHtjb2xvcn07XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmxpdmUge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmZmYwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5saXZlOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdGNvbG9yOiAke2NvbG9yfTtcblx0XHRcdFx0XHRib3JkZXI6ICR7Y29sb3J9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0LnJpZ2h0IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZWZ0IHtcblx0XHRcdFx0XHRcdHdpZHRoOiA4MHZ3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHQud3JhcCB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2plY3Qge1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmxlZnQge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmxlZnQsXG5cdFx0XHRcdFx0LnJpZ2h0IHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0MHZ3O1xuXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */
/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/components/Projects.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

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
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/Technologies.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Technologies = ({
  color,
  descriptionTitle,
  descriptionText,
  handleColorChange
}) => {
  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "technologies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "custom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "The Essentials"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "custom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    id: "vscode",
    onFocus: () => handleColorChange("#333", "VS Code is my editor of choice. A great plugin library, easy to navigate UI, and built-in terminal make this an easy choice for me. Prettier and Color Highlight have changed my life forever!", "VS Code"),
    tabIndex: "3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiVisualstudio"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), __jsx("div", {
    id: "docker",
    onFocus: () => handleColorChange("#032144", "For local wordPress development, Lando is my go-to for setting up an environment. Lando is an open source, docker based local development tool that makes setting up environments as easy as editing a single text file. With pre-built recipes for WordPress, you simply edit your .lando.yml file to include any build tools you may need, update your project name, and you're off to the races.", "Docker"),
    tabIndex: "4",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaDocker"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), __jsx("div", {
    id: "react",
    onFocus: () => handleColorChange("#29B1EF", "This site is built with NextJS! For more complex web projects, react is my library of choice. NextJS is a framework built on react, that makes deploying a project absolutely painless. While I am still learning the ins and outs, it provides the functionality to create lightning fast, SEO friendly sites that you can deploy with a single line in the terminal.", "Next.js"),
    tabIndex: "5",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaReact"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), __jsx("div", {
    id: "github",
    onFocus: () => handleColorChange("#2DBD4E", "All of my work and personal projects are managed with github. I've learned how to set up my config file to handle multiple SSH Keys for multiple accounts, the important of .gitignore, and a little bit of how to collaborate with co-workers (although I haven't taken charge of the merge just yet!).", "Github"),
    tabIndex: "6",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiGithubBadge"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })), __jsx("div", {
    id: "sass",
    onFocus: () => handleColorChange("#CF649A", "I don't even remember my world before Sass. Sass allows you to break up and organize your css files, nest elements, and introduces variables and mixins to allow for sweeping changes to things like default colors or base styles without having to touch every line. ", "Sass"),
    tabIndex: "7",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiSass"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })), __jsx("div", {
    id: "stackoverflow",
    onFocus: () => handleColorChange("#F48025", "I will be the first to admit when I don't know something, and I think that's important! With your ego out of the way, you are much more willing to seek out help, and more receptive to the help that is provided. StackOverflow is practically my home, constantly helping me through niche problems and other small gaps in my knowledge.", "Stackoverflow"),
    tabIndex: "8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiStackoverflow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  })), __jsx("div", {
    id: "wordpress",
    onFocus: () => handleColorChange("#207297", "Love it or hate it, WordPress is still a huge player in the web development world. My first full-time job in the field was doing WordPress development at an agency, and I've learned a great deal about it. From the basics like custom menus, post types, and fields, to more complex tasks like custom queries, api integration, ajax calls to custom PHP scripts, and even some basic custom plugin development. While I am constantly woriking to grow my skillset, I think it's safe to say that I am currently most comfortable working in WordPress.", "WordPress"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiWordpress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })), __jsx("div", {
    id: "gulp",
    onFocus: () => handleColorChange("#CF4647", "When it comes to WordPess development, WPGulp is indispensable. It will compile and minify your custom sass/JS with auto-prefixing for your compiled css, provides live browser reloading, and even image optimization. What more do I need to say?", "WPGulp"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGulp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "description-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, descriptionTitle), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]) + " " + "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3829142508", [color, color, color, color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, descriptionText))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3829142508",
    dynamic: [color, color, color, color, color, color],
    __self: undefined
  }, `.full-width.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:0px;z-index:1;background:${color};width:100%;}.technologies.__jsx-style-dynamic-selector{background:${color};padding-top:40px;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector{width:100%;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector{width:100%;margin:0;padding:0;}.technologies.__jsx-style-dynamic-selector>.full-width.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:0;padding:15px 10%;padding-left:15px;color:#fff;left:0;right:0;margin:auto;}.icons.__jsx-style-dynamic-selector{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:92%;left:0;right:0;margin:auto;overflow:visible;background:${color};-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.icon.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:1%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fffff0;width:20%;color:#fff;padding:25px 0;font-size:24px;-webkit-transition:0.3s all;transition:0.3s all;color:#333;height:75px;}.icon.__jsx-style-dynamic-selector>svg{padding:5%;font-size:2em;}.icon.__jsx-style-dynamic-selector:focus{outline:none;border:1px solid rgba(0,0,0,0);font-size:2.1em;color:#fff;background:${color};}.description.__jsx-style-dynamic-selector{-webkit-transition:0.3s all;transition:0.3s all;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:auto;}.description-text.__jsx-style-dynamic-selector{background:#fffff0;box-shadow:0px 0px 7px 4px rgba(0,0,0,0.15);color:#333;width:90%;height:auto;padding:25px 15px;margin:50px auto;}.underline.__jsx-style-dynamic-selector{height:4px;background:${color};width:60%;}@media (min-width:768px){.description-text.__jsx-style-dynamic-selector{height:510px!important;}.technologies.__jsx-style-dynamic-selector{left:0;right:0;margin:auto;padding-bottom:50px;display:block;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector{width:90%;}.technologies.__jsx-style-dynamic-selector>.custom-wrapper.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:30px auto;margin-left:0;padding-left:0;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-bottom:50px;}.icons.__jsx-style-dynamic-selector{padding:15px;padding-top:0;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;}.icon.__jsx-style-dynamic-selector{height:120px;width:40%;margin:5px 15px;margin-left:0;}.icon.__jsx-style-dynamic-selector:nth-child(1),.icon.__jsx-style-dynamic-selector:nth-child(2){margin-top:0;}.description.__jsx-style-dynamic-selector,.icons.__jsx-style-dynamic-selector{background:none;height:100%;width:100%;}.description-text.__jsx-style-dynamic-selector{height:100%;margin:auto;width:100%;margin-bottom:50px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9UZWNobm9sb2dpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0prQixBQUdzQixBQU93QixBQUs5QixBQUdBLEFBS0QsQUFVUSxBQVdGLEFBb0JKLEFBSUUsQUFRTyxBQVFELEFBU1IsQUFPWSxBQUloQixBQU9HLEFBR08sQUFNSixBQVFBLEFBV0EsQUFRQSxBQUlHLEFBS0osT0FuREosRUFqRlMsQ0F3RmpCLENBaEdELEFBR1MsQUE4Q00sQUE2QjBCLENBK0Q1QixDQXhGc0IsQUE0RHBCLEFBV0osQUFRVixFQXZHYSxBQTZERCxDQThDQSxDQXRIQyxBQWlGQyxFQTlCaUMsQ0FqRXRDLEdBaUZULEFBd0NnQixDQWlCTCxDQTVGWixDQXpDa0IsQ0FrRkcsQUF1QkwsQ0F1QkosRUFwSVosQ0ErRmdCLElBMkNJLElBaEJMLEFBV2QsQ0F0SlEsQUFPUyxFQXdISixFQXpHRixBQTRDSyxFQWdEaEIsQ0FWYyxDQXZHSixBQXdFRyxHQWtCSCxFQWlEVixDQWdCQSxDQXBJTyxFQWZSLENBUHlDLEVBaUU3QixDQXlCWixBQWFDLENBaEZRLENBeURHLE9BeERDLENBMEM0QixHQWU5QixBQWtDUyxRQTFGcEIsRUF5RGEsS0ExQ0UsRUFYSixLQXNEUSxFQWxGUCxHQTZCSixPQUNDLENBN0JULEVBaUVBLEdBaUJrQixFQXBETCxBQThGZSxNQXRETCxNQXZDTCxHQW9EbEIsWUE1Q1csQUEyRWlCLEVBbEZhLFFBUWpCLGdDQVBSLGVBc0NRLHFCQXNEQSxxQkEzRnhCLE1BaUZ3QixJQTFFSiwrQ0ErQkEsK0JBc0RKLGVBakZJLFlBdUVDLE9BdEVWLFVBQ0MsR0FzRVgsUUFyRWUsRUErRU4sS0F0REcsSUF3RFosSUFoRmUsSUF5QmhCLFdBeEJxQixnREFDVCxXQUNDLFlBRWIiLCJmaWxlIjoiL1VzZXJzL3NlYW5seW9ucy9TaXRlcy9wb3J0Zm9saW92Mi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhRG9ja2VyLCBGYVJlYWN0LCBGYUd1bHAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7XG4gIERpVmlzdWFsc3R1ZGlvLFxuICBEaUdpdGh1YkJhZGdlLFxuICBEaVNhc3MsXG4gIERpU3RhY2tvdmVyZmxvdyxcbiAgRGlXb3JkcHJlc3Ncbn0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoe1xuICBjb2xvcixcbiAgZGVzY3JpcHRpb25UaXRsZSxcbiAgZGVzY3JpcHRpb25UZXh0LFxuICBoYW5kbGVDb2xvckNoYW5nZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlY2hub2xvZ2llc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+VGhlIEVzc2VudGlhbHM8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20td3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICBpZD1cInZzY29kZVwiXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29sb3JDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgIFwiVlMgQ29kZSBpcyBteSBlZGl0b3Igb2YgY2hvaWNlLiBBIGdyZWF0IHBsdWdpbiBsaWJyYXJ5LCBlYXN5IHRvIG5hdmlnYXRlIFVJLCBhbmQgYnVpbHQtaW4gdGVybWluYWwgbWFrZSB0aGlzIGFuIGVhc3kgY2hvaWNlIGZvciBtZS4gUHJldHRpZXIgYW5kIENvbG9yIEhpZ2hsaWdodCBoYXZlIGNoYW5nZWQgbXkgbGlmZSBmb3JldmVyIVwiLFxuICAgICAgICAgICAgICAgICAgXCJWUyBDb2RlXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9XCIzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERpVmlzdWFsc3R1ZGlvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIGlkPVwiZG9ja2VyXCJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT5cbiAgICAgICAgICAgICAgICBoYW5kbGVDb2xvckNoYW5nZShcbiAgICAgICAgICAgICAgICAgIFwiIzAzMjE0NFwiLFxuICAgICAgICAgICAgICAgICAgXCJGb3IgbG9jYWwgd29yZFByZXNzIGRldmVsb3BtZW50LCBMYW5kbyBpcyBteSBnby10byBmb3Igc2V0dGluZyB1cCBhbiBlbnZpcm9ubWVudC4gTGFuZG8gaXMgYW4gb3BlbiBzb3VyY2UsIGRvY2tlciBiYXNlZCBsb2NhbCBkZXZlbG9wbWVudCB0b29sIHRoYXQgbWFrZXMgc2V0dGluZyB1cCBlbnZpcm9ubWVudHMgYXMgZWFzeSBhcyBlZGl0aW5nIGEgc2luZ2xlIHRleHQgZmlsZS4gV2l0aCBwcmUtYnVpbHQgcmVjaXBlcyBmb3IgV29yZFByZXNzLCB5b3Ugc2ltcGx5IGVkaXQgeW91ciAubGFuZG8ueW1sIGZpbGUgdG8gaW5jbHVkZSBhbnkgYnVpbGQgdG9vbHMgeW91IG1heSBuZWVkLCB1cGRhdGUgeW91ciBwcm9qZWN0IG5hbWUsIGFuZCB5b3UncmUgb2ZmIHRvIHRoZSByYWNlcy5cIixcbiAgICAgICAgICAgICAgICAgIFwiRG9ja2VyXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9XCI0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhRG9ja2VyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIGlkPVwicmVhY3RcIlxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZUNvbG9yQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgXCIjMjlCMUVGXCIsXG4gICAgICAgICAgICAgICAgICBcIlRoaXMgc2l0ZSBpcyBidWlsdCB3aXRoIE5leHRKUyEgRm9yIG1vcmUgY29tcGxleCB3ZWIgcHJvamVjdHMsIHJlYWN0IGlzIG15IGxpYnJhcnkgb2YgY2hvaWNlLiBOZXh0SlMgaXMgYSBmcmFtZXdvcmsgYnVpbHQgb24gcmVhY3QsIHRoYXQgbWFrZXMgZGVwbG95aW5nIGEgcHJvamVjdCBhYnNvbHV0ZWx5IHBhaW5sZXNzLiBXaGlsZSBJIGFtIHN0aWxsIGxlYXJuaW5nIHRoZSBpbnMgYW5kIG91dHMsIGl0IHByb3ZpZGVzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSBsaWdodG5pbmcgZmFzdCwgU0VPIGZyaWVuZGx5IHNpdGVzIHRoYXQgeW91IGNhbiBkZXBsb3kgd2l0aCBhIHNpbmdsZSBsaW5lIGluIHRoZSB0ZXJtaW5hbC5cIixcbiAgICAgICAgICAgICAgICAgIFwiTmV4dC5qc1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhYkluZGV4PVwiNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYVJlYWN0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIGlkPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT5cbiAgICAgICAgICAgICAgICBoYW5kbGVDb2xvckNoYW5nZShcbiAgICAgICAgICAgICAgICAgIFwiIzJEQkQ0RVwiLFxuICAgICAgICAgICAgICAgICAgXCJBbGwgb2YgbXkgd29yayBhbmQgcGVyc29uYWwgcHJvamVjdHMgYXJlIG1hbmFnZWQgd2l0aCBnaXRodWIuIEkndmUgbGVhcm5lZCBob3cgdG8gc2V0IHVwIG15IGNvbmZpZyBmaWxlIHRvIGhhbmRsZSBtdWx0aXBsZSBTU0ggS2V5cyBmb3IgbXVsdGlwbGUgYWNjb3VudHMsIHRoZSBpbXBvcnRhbnQgb2YgLmdpdGlnbm9yZSwgYW5kIGEgbGl0dGxlIGJpdCBvZiBob3cgdG8gY29sbGFib3JhdGUgd2l0aCBjby13b3JrZXJzIChhbHRob3VnaCBJIGhhdmVuJ3QgdGFrZW4gY2hhcmdlIG9mIHRoZSBtZXJnZSBqdXN0IHlldCEpLlwiLFxuICAgICAgICAgICAgICAgICAgXCJHaXRodWJcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWJJbmRleD1cIjZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RGlHaXRodWJCYWRnZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICBpZD1cInNhc3NcIlxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZUNvbG9yQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgXCIjQ0Y2NDlBXCIsXG4gICAgICAgICAgICAgICAgICBcIkkgZG9uJ3QgZXZlbiByZW1lbWJlciBteSB3b3JsZCBiZWZvcmUgU2Fzcy4gU2FzcyBhbGxvd3MgeW91IHRvIGJyZWFrIHVwIGFuZCBvcmdhbml6ZSB5b3VyIGNzcyBmaWxlcywgbmVzdCBlbGVtZW50cywgYW5kIGludHJvZHVjZXMgdmFyaWFibGVzIGFuZCBtaXhpbnMgdG8gYWxsb3cgZm9yIHN3ZWVwaW5nIGNoYW5nZXMgdG8gdGhpbmdzIGxpa2UgZGVmYXVsdCBjb2xvcnMgb3IgYmFzZSBzdHlsZXMgd2l0aG91dCBoYXZpbmcgdG8gdG91Y2ggZXZlcnkgbGluZS4gXCIsXG4gICAgICAgICAgICAgICAgICBcIlNhc3NcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWJJbmRleD1cIjdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RGlTYXNzIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIGlkPVwic3RhY2tvdmVyZmxvd1wiXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29sb3JDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICBcIiNGNDgwMjVcIixcbiAgICAgICAgICAgICAgICAgIFwiSSB3aWxsIGJlIHRoZSBmaXJzdCB0byBhZG1pdCB3aGVuIEkgZG9uJ3Qga25vdyBzb21ldGhpbmcsIGFuZCBJIHRoaW5rIHRoYXQncyBpbXBvcnRhbnQhIFdpdGggeW91ciBlZ28gb3V0IG9mIHRoZSB3YXksIHlvdSBhcmUgbXVjaCBtb3JlIHdpbGxpbmcgdG8gc2VlayBvdXQgaGVscCwgYW5kIG1vcmUgcmVjZXB0aXZlIHRvIHRoZSBoZWxwIHRoYXQgaXMgcHJvdmlkZWQuIFN0YWNrT3ZlcmZsb3cgaXMgcHJhY3RpY2FsbHkgbXkgaG9tZSwgY29uc3RhbnRseSBoZWxwaW5nIG1lIHRocm91Z2ggbmljaGUgcHJvYmxlbXMgYW5kIG90aGVyIHNtYWxsIGdhcHMgaW4gbXkga25vd2xlZGdlLlwiLFxuICAgICAgICAgICAgICAgICAgXCJTdGFja292ZXJmbG93XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9XCI4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERpU3RhY2tvdmVyZmxvdyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICBpZD1cIndvcmRwcmVzc1wiXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29sb3JDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICBcIiMyMDcyOTdcIixcbiAgICAgICAgICAgICAgICAgIFwiTG92ZSBpdCBvciBoYXRlIGl0LCBXb3JkUHJlc3MgaXMgc3RpbGwgYSBodWdlIHBsYXllciBpbiB0aGUgd2ViIGRldmVsb3BtZW50IHdvcmxkLiBNeSBmaXJzdCBmdWxsLXRpbWUgam9iIGluIHRoZSBmaWVsZCB3YXMgZG9pbmcgV29yZFByZXNzIGRldmVsb3BtZW50IGF0IGFuIGFnZW5jeSwgYW5kIEkndmUgbGVhcm5lZCBhIGdyZWF0IGRlYWwgYWJvdXQgaXQuIEZyb20gdGhlIGJhc2ljcyBsaWtlIGN1c3RvbSBtZW51cywgcG9zdCB0eXBlcywgYW5kIGZpZWxkcywgdG8gbW9yZSBjb21wbGV4IHRhc2tzIGxpa2UgY3VzdG9tIHF1ZXJpZXMsIGFwaSBpbnRlZ3JhdGlvbiwgYWpheCBjYWxscyB0byBjdXN0b20gUEhQIHNjcmlwdHMsIGFuZCBldmVuIHNvbWUgYmFzaWMgY3VzdG9tIHBsdWdpbiBkZXZlbG9wbWVudC4gV2hpbGUgSSBhbSBjb25zdGFudGx5IHdvcmlraW5nIHRvIGdyb3cgbXkgc2tpbGxzZXQsIEkgdGhpbmsgaXQncyBzYWZlIHRvIHNheSB0aGF0IEkgYW0gY3VycmVudGx5IG1vc3QgY29tZm9ydGFibGUgd29ya2luZyBpbiBXb3JkUHJlc3MuXCIsXG4gICAgICAgICAgICAgICAgICBcIldvcmRQcmVzc1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhYkluZGV4PVwiOVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEaVdvcmRwcmVzcyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICBpZD1cImd1bHBcIlxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZUNvbG9yQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgXCIjQ0Y0NjQ3XCIsXG4gICAgICAgICAgICAgICAgICBcIldoZW4gaXQgY29tZXMgdG8gV29yZFBlc3MgZGV2ZWxvcG1lbnQsIFdQR3VscCBpcyBpbmRpc3BlbnNhYmxlLiBJdCB3aWxsIGNvbXBpbGUgYW5kIG1pbmlmeSB5b3VyIGN1c3RvbSBzYXNzL0pTIHdpdGggYXV0by1wcmVmaXhpbmcgZm9yIHlvdXIgY29tcGlsZWQgY3NzLCBwcm92aWRlcyBsaXZlIGJyb3dzZXIgcmVsb2FkaW5nLCBhbmQgZXZlbiBpbWFnZSBvcHRpbWl6YXRpb24uIFdoYXQgbW9yZSBkbyBJIG5lZWQgdG8gc2F5P1wiLFxuICAgICAgICAgICAgICAgICAgXCJXUEd1bHBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWJJbmRleD1cIjlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFHdWxwIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgPGgyPntkZXNjcmlwdGlvblRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvblRleHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cdFx0XHRcdC5mdWxsLXdpZHRoIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHtjb2xvcn07XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHtjb2xvcn07XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDQwcHg7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHQudGVjaG5vbG9naWVzID4gLmN1c3RvbS13cmFwcGVye1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyA+IC5jdXN0b20td3JhcHBlciA+IC5jb250ZW50e1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0cGFkZGluZzowO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50ZWNobm9sb2dpZXMgPiAuZnVsbC13aWR0aCA+IC5jdXN0b20td3JhcHBlciA+IGgyIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweCAxMCU7XG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjE1cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbnMge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA0MHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0d2lkdGg6IDkyJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRvdmVyZmxvdzogdmlzaWJsZTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9yfTtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXg6IDEgMCBhdXRvO1xuXHRcdFx0XHRcdG1hcmdpbjogMSU7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRcdFx0XHRcdC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xuXHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6ICM5YmNiZjY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0aGVpZ2h0OiA3NXB4O1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0Lmljb24gPiA6Z2xvYmFsKHN2Zykge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDUlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29uOmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyLjFlbTtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9yfTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZGVzY3JpcHRpb24ge1xuLyogXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgke2NvbG9yfSA1MCUsICNmZmYgNTAlKTsgKi9cblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRlc2NyaXB0aW9uLXRleHQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNTBweCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcblx0XHRcdFx0XHQuZGVzY3JpcHRpb24tdGV4dHtcblx0XHRcdFx0XHRcdGhlaWdodDo1MTBweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC50ZWNobm9sb2dpZXN7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGxlZnQ6MDtcblx0XHRcdFx0XHRcdHJpZ2h0OjA7XG5cdFx0XHRcdFx0XHRtYXJnaW46YXV0bztcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOjUwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQudGVjaG5vbG9naWVzID4gLmN1c3RvbS13cmFwcGVye1xuXHRcdFx0XHRcdFx0d2lkdGg6OTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQudGVjaG5vbG9naWVzID4gLmN1c3RvbS13cmFwcGVyID4gaDJ7XG5cdFx0XHRcdFx0XHRtYXJnaW46MzBweCBhdXRvO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MDtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDowO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jb250ZW50e1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206NTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb25ze1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwYWRkaW5nOjE1cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDowO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjA7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6d3JhcDtcblx0XHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaWNvbntcblx0XHRcdFx0XHRcdGhlaWdodDoxMjBweDtcblx0XHRcdFx0XHRcdHdpZHRoOjQwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjo1cHggMTVweDtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb246bnRoLWNoaWxkKDEpLFxuXHRcdFx0XHRcdC5pY29uOm50aC1jaGlsZCgyKXtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdC5pY29uc3tcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcblx0XHRcdFx0XHRcdGhlaWdodDoxMDAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmRlc2NyaXB0aW9uLXRleHR7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjphdXRvO1xuXHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iXX0= */
/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/components/Technologies.js */`));
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
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_BuildSteps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BuildSteps */ "./components/BuildSteps.js");
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function HomePage() {
  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("#272935");
  const {
    0: descriptionTitle,
    1: setDescriptionTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("VS Code");
  const {
    0: descriptionText,
    1: setDescriptionText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("VS Code is my editor of choice. A great plugin library, easy to navigate UI, and built-in terminal make this an easy choice for me. Prettier and Color Highlight have changed my life forever!");

  const handleColorChange = (col, title, text) => {
    setColor(col);
    setDescriptionTitle(text);
    setDescriptionText(title);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_Technologies__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: color,
    descriptionTitle: descriptionTitle,
    descriptionText: descriptionText,
    handleColorChange: handleColorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_BuildSteps__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]) + " " + "custom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]) + " " + "footer-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]) + " " + "footer-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Get in touch!")), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "If you'd like to discuss any of my skills, projects, or technologies of choice, drop me a line! I'm always looking for the next opportunity to learn, share, and grow as a developer."), __jsx("a", {
    href: "https://github.com/itsseanl",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGitSquare"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), "https://github.com/itsseanl"), __jsx("a", {
    href: "https://www.linkedin.com/in/itsseanl/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), "https://www.linkedin.com/in/itsseanl/")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]) + " " + "footer-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["470838016", [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color]]]) + " " + "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "470838016",
    dynamic: [color, __webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png"), color, color, color],
    __self: this
  }, `*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#fffff0;line-height:1.5em;}h1, h2, h3, h4, h5, h6{font-family:"Lobster";color:#333;}p{font-family:"Ubuntu";}.full-width{position:-webkit-sticky;position:sticky;top:0;background:#fff;padding:15px;}.custom-wrapper{width:90%;max-width:1200px;left:0;right:0;margin:auto;}*{-webkit-transition:0.3s background;transition:0.3s background;}.experience{background:#fff;}.underline{height:4px;background:${color};width:60%;}.short{width:40%;}main{z-index:1;background:#fff;}.featured-project{width:100%;left:0;right:0;margin:auto;}.featured-project>p{width:90%;left:0;right:0;margin:50px auto;}.featured{box-shadow:inset 0px 2px 12px 2px rgba(0,0,0,0.3);background:rgba(255,255,255,0.8);background-blend-mode:lighten;background-image:url(${__webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png")});background-size:cover;background-position:center;background-repeat:no-repeat;min-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 5%;text-align:center;}.overlay{background:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;max-width:1200px;left:0;right:0;margin:auto;}.theBtns{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:100%;}.theLink{padding:15px;-webkit-text-decoration:none;text-decoration:none;font-family:"Lobster",sans-serif;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);margin:15px;width:50%!important;max-width:300px;}.codeLink{background:#FFFFF0;color:#333;}.siteLink{background:#333;color:#FFFFF0;}.experience{padding-bottom:50px;}.experience>.full-width>.custom-wrapper>.section-heading{width:100%;left:0;right:0;padding:1px 25px;z-index:9999;position:-webkit-sticky;position:sticky;top:0;background:#fff;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tiny{width:20%;}.exp-item{width:100%;left:0;right:0;margin:25px auto;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);background:#fffff0;padding:25px 15px;}.exp-item svg{font-size:28px;}footer{background:${color};height:auto;padding:50px 0;}.footer-left>.footer-heading>h2{color:#fff;background:${color};margin:5px;}.footer-left>.footer-heading{left:0;right:0;display:block;width:90%;color:#fff !important;background:${color};}.footer-heading>.underline{background:#fff;position:relative;}.footer-left{color:#fff;font-size:24px;}.footer-left>a{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;font-family:"Lobster",sans-serif;}.footer-left>a>svg{padding-right:15px;font-size:36px;}@media(min-width:768px){.experience>.custom-wrapper>h2{padding-left:0;}.exp-item:nth-child(1),.exp-item:nth-child(3){margin-left:0;}.exp-item:nth-child(2),.exp-item:nth-child(4){margin-right:0;}.custom-wrapper{width:90%;max-width:1200px;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.exp-item{width:45%;}footer>.custom-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.footer-left,.footer-right{width:45%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:500px;}.footer-left{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:15px;}.footer-right{margin-right:15px;}.footer-heading,.footer-left>p,.footer-left>a{text-align:left;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:left!important width:100%;-webkit-box-align:left!important width:100%;-ms-flex-align:left!important width:100%;align-items:left!important width:100%;font-size:14px;}.footer-left>p{font-size:18px;}.footer-right>form{width:100%;}.footer-right>form>label{color:#fff;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VzQixBQUcwQixBQUliLEFBV2EsQUFJRCxBQUdMLEFBTU4sQUFPaUIsQUFJVCxBQUlMLEFBS0QsQUFHQSxBQUlDLEFBTUQsQUFNMkMsQUFrQmpCLEFBWXZCLEFBUUQsQUFVTSxBQUlILEFBS0ksQUFHUixBQVdFLEFBS0gsQUFHQyxBQVNJLEFBR3lCLEFBTTdCLEFBTUwsQUFVVSxBQUlOLEFBS0EsQUFTUSxBQU1ILEFBSUQsQUFJQyxBQUdMLEFBSUcsQUFLSCxBQUdHLEFBT0YsQUFTYSxBQUtMLEFBS0YsQUFPRCxBQUlKLEFBR0EsT0FoR0wsRUF0S0MsQ0F3Qk8sQUFvQmhCLEFBR2lCLEFBVVQsQUFrRlIsQUF3RWtCLEFBU2pCLEFBVWEsQ0EvTDJCLEFBWWpDLEFBd0VBLEFBbUJBLEFBa0JpQyxBQW9CMUIsQUFLTSxBQTJFbkIsQUFHQSxFQWxLbUIsQ0F1R3BCLENBckRELEFBaUJjLEFBZ0NiLEFBUUEsQUFnREMsQ0E1TkYsQUErRWMsQUE2REssQUF5RUksQ0EvTGQsQ0FOQSxBQXdFQSxBQW1CQSxBQXFHUCxDQW5QZ0IsQUE4R1AsQUFtRkksQ0ExRWYsQ0F6R0EsQ0FuQkEsQUFlVSxBQTROSyxHQTVLRyxDQVhsQixBQUthLEFBd0VLLEFBbUJBLEFBc0NsQixDQTdKTSxBQTJMTCxFQTNDUyxDQXpEVixBQUlBLEdBeEdBLEFBcUVjLENBdkRQLEFBdUpQLEFBbUJBLElBbE1pQixBQW9EakIsQ0FvSHVCLENBeEpqQixBQXlJTyxFQWhJRixBQWlDWCxDQWtFYSxBQW1CbUMsR0E5SGhDLElBNENxQixDQXZCMUIsQUF5SEEsQ0FMSyxFQWhJakIsRUF6QkMsQUE0SGlCLEtBdEZqQixBQWtJeUMsQUFlNUIsQ0F0S0EsQUFXZCxBQW1JQyxDQTVEa0MsSUF1RGxDLE9BaEV3QixBQXlDRCxBQWlGUCxBQVFFLENBMU1uQixRQTJDZ0MsSUFrRlgsU0EzQzRCLEFBeUJ6QyxBQXdHaUIsS0E1RHhCLENBM0NpQixJQWtCRSxDQWpFSSxBQXlLVixFQVpZLElBOUsyQixLQWlFcEQsTUFrQkEsT0FvRW9CLElBN0JPLEVBcUNJLEdBeEhuQixZQUNRLEFBOEJJLFlBckVELFFBd0NOLENBWkcsQ0EySUssV0F0SkQsQ0FoQkksRUF5QzVCLFlBNkdDLFFBdUJrQixLQTVLVSxZQTZLM0IsZUFyRGlCLENBdkhELFVBbUVsQixDQXlGd0IsTUEzSlYsUUF5QkMsT0EySU0sR0FrQkosUUF4S0csT0F5S2xCLDZCQTdKZ0IsWUF6QkssQ0FzSFIsZUFDbUIsYUFvQ2hDLEtBU2lCLFdBdEpQLElBMEdaLEVBOUZZLEFBMklWLEtBdEplLE1BWWpCLFdBWE8sS0FmaUIsRUFnQmhCLFFBQ0ssWUFDYiw2RUFqQm9CLDZGQUNILGdCQUNFLGtCQUVuQiIsImZpbGUiOiIvVXNlcnMvc2Vhbmx5b25zL1NpdGVzL3BvcnRmb2xpb3YyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRUaW1lciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgRmFVc2VycywgRmFUb29scywgRmFHbGFzc2VzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge1xuXHRGYURvY2tlcixcblx0RmFSZWFjdCxcblx0RmFHdWxwLFxuXHRGYUdpdFNxdWFyZSxcblx0RmFMaW5rZWRpbixcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmltcG9ydCBNeUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm1cIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IEJ1aWxkU3RlcHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVpbGRTdGVwc1wiO1xuaW1wb3J0IHJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCIjMjcyOTM1XCIpO1xuXHRjb25zdCBbZGVzY3JpcHRpb25UaXRsZSwgc2V0RGVzY3JpcHRpb25UaXRsZV0gPSB1c2VTdGF0ZShcIlZTIENvZGVcIik7XG5cdGNvbnN0IFtkZXNjcmlwdGlvblRleHQsIHNldERlc2NyaXB0aW9uVGV4dF0gPSB1c2VTdGF0ZShcblx0XHRcIlZTIENvZGUgaXMgbXkgZWRpdG9yIG9mIGNob2ljZS4gQSBncmVhdCBwbHVnaW4gbGlicmFyeSwgZWFzeSB0byBuYXZpZ2F0ZSBVSSwgYW5kIGJ1aWx0LWluIHRlcm1pbmFsIG1ha2UgdGhpcyBhbiBlYXN5IGNob2ljZSBmb3IgbWUuIFByZXR0aWVyIGFuZCBDb2xvciBIaWdobGlnaHQgaGF2ZSBjaGFuZ2VkIG15IGxpZmUgZm9yZXZlciFcIlxuXHQpO1xuXG5cdGNvbnN0IGhhbmRsZUNvbG9yQ2hhbmdlID0gKGNvbCwgdGl0bGUsIHRleHQpID0+IHtcblx0XHRzZXRDb2xvcihjb2wpO1xuXHRcdHNldERlc2NyaXB0aW9uVGl0bGUodGV4dCk7XG5cdFx0c2V0RGVzY3JpcHRpb25UZXh0KHRpdGxlKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE15SGVhZGVyIC8+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8VGVjaG5vbG9naWVzXG5cdFx0XHRcdFx0Y29sb3I9e2NvbG9yfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uVGl0bGU9e2Rlc2NyaXB0aW9uVGl0bGV9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb25UZXh0PXtkZXNjcmlwdGlvblRleHR9XG5cdFx0XHRcdFx0aGFuZGxlQ29sb3JDaGFuZ2U9e2hhbmRsZUNvbG9yQ2hhbmdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnVpbGRTdGVwcyBjb2xvcj17Y29sb3J9IC8+XG5cblx0XHRcdFx0PFByb2plY3RzIGNvbG9yPXtjb2xvcn0gLz5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxmb290ZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXdyYXBwZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5HZXQgaW4gdG91Y2ghPC9oMj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdElmIHlvdSdkIGxpa2UgdG8gZGlzY3VzcyBhbnkgb2YgbXkgc2tpbGxzLCBwcm9qZWN0cywgb3Jcblx0XHRcdFx0XHRcdFx0dGVjaG5vbG9naWVzIG9mIGNob2ljZSwgZHJvcCBtZSBhIGxpbmUhIEknbSBhbHdheXMgbG9va2luZyBmb3IgdGhlXG5cdFx0XHRcdFx0XHRcdG5leHQgb3Bwb3J0dW5pdHkgdG8gbGVhcm4sIHNoYXJlLCBhbmQgZ3JvdyBhcyBhIGRldmVsb3Blci5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaXRzc2VhbmxcIj5cblx0XHRcdFx0XHRcdFx0PEZhR2l0U3F1YXJlIC8+XG5cdFx0XHRcdFx0XHRcdGh0dHBzOi8vZ2l0aHViLmNvbS9pdHNzZWFubFxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pdHNzZWFubC9cIj5cblx0XHRcdFx0XHRcdFx0PEZhTGlua2VkaW4gLz5cblx0XHRcdFx0XHRcdFx0aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l0c3NlYW5sL1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIGNvbG9yPXtjb2xvcn0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdCAgICA6Z2xvYmFsKCopIHtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICB9XG5cdFx0ICBodG1sLFxuXHRcdCAgYm9keSB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcblx0XHQgIH1cblx0XHQgIDpnbG9iYWwoaDEsXG5cdFx0ICBoMixcblx0XHQgIGgzLFxuXHRcdCAgaDQsXG5cdFx0ICBoNSxcblx0XHQgIGg2KSB7XG5cdFx0XHRmb250LWZhbWlseTogXCJMb2JzdGVyXCI7XG5cdFx0XHRjb2xvcjogIzMzMztcblx0XHQgIH1cblx0XHQgIDpnbG9iYWwocCkge1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiVWJ1bnR1XCI7XG5cdFx0ICB9XG5cdFx0XHQuZnVsbC13aWR0aHtcblx0XHRcdFx0cG9zaXRpb246c3RpY2t5O1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHR9XG5cdFx0XHQuY3VzdG9tLXdyYXBwZXJ7XG5cdFx0XHRcdHdpZHRoOjkwJTtcblx0XHRcdFx0bWF4LXdpZHRoOjEyMDBweDtcblx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRyaWdodDowO1xuXHRcdFx0XHRtYXJnaW46YXV0bztcblx0XHRcdH1cblx0XHRcdDpnbG9iYWwoKiApe1xuXHRcdFx0XHR0cmFuc2l0aW9uOjAuM3MgYmFja2dyb3VuZDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9yfTtcblx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zaG9ydCB7XG5cdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYWluIHtcblx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkLXByb2plY3Qge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mZWF0dXJlZC1wcm9qZWN0ID4gcCB7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogNTBweCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mZWF0dXJlZCB7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtyZXF1aXJlKFwiLi4vYXNzZXRzL2ltZy9wcm9qZWN0LnBuZ1wiKX0pO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0bWluLWhlaWdodDogNDAwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogNTBweCA1JTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5vdmVybGF5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOjEyMDBweDtcblx0XHRcdFx0XHRsZWZ0OjA7XG5cdFx0XHRcdFx0cmlnaHQ6MDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRoZUJ0bnN7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGZsZXg6IDEgMCBhdXRvO1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50aGVMaW5re1xuXHRcdFx0XHRcdHBhZGRpbmc6MTVweDtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRmb250LWZhbWlseTpcIkxvYnN0ZXJcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRtYXJnaW46MTVweDtcblx0XHRcdFx0XHR3aWR0aDo1MCUhaW1wb3J0YW50O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNvZGVMaW5re1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6I0ZGRkZGMDtcblx0XHRcdFx0XHRjb2xvcjojMzMzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zaXRlTGlua3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiMzMzM7XG5cdFx0XHRcdFx0Y29sb3I6I0ZGRkZGMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5leHBlcmllbmNlIHtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTo1MHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHBlcmllbmNlID4gLmZ1bGwtd2lkdGggPiAuY3VzdG9tLXdyYXBwZXIgPiAuc2VjdGlvbi1oZWFkaW5nIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDFweCAyNXB4O1xuXHRcdFx0XHRcdHotaW5kZXg6OTk5OTtcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmV4cC1pdGVtcyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50aW55IHtcblx0XHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHAtaXRlbSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IDI1cHggYXV0bztcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMTVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwLWl0ZW0gOmdsb2JhbChzdmcpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9yfTtcblxuXHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb3Rlci1sZWZ0ID4gLmZvb3Rlci1oZWFkaW5nID4gaDIge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuXHRcdFx0XHRcdG1hcmdpbjo1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5mb290ZXItbGVmdCA+IC5mb290ZXItaGVhZGluZyB7XG5cdFx0XHRcdFx0bGVmdDowO1xuXHRcdFx0XHRcdHJpZ2h0OjA7XG5cdFxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6OTAlO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHtjb2xvcn07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZm9vdGVyLWhlYWRpbmcgPiAudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9vdGVyLWxlZnR7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHRmb250LXNpemU6MjRweDtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9vdGVyLWxlZnQgPiBhe1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTpcIkxvYnN0ZXJcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZm9vdGVyLWxlZnQgPiBhID4gOmdsb2JhbChzdmcpe1xuXHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6MTVweDtcblx0XHRcdFx0XHRmb250LXNpemU6MzZweDtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYShtaW4td2lkdGg6NzY4cHgpe1xuXHRcdFx0XHRcdC5leHBlcmllbmNlID4gLmN1c3RvbS13cmFwcGVyID4gaDJ7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmV4cC1pdGVtOm50aC1jaGlsZCgxKSxcblx0XHRcdFx0XHQuZXhwLWl0ZW06bnRoLWNoaWxkKDMpe1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmV4cC1pdGVtOm50aC1jaGlsZCgyKSxcblx0XHRcdFx0XHQuZXhwLWl0ZW06bnRoLWNoaWxkKDQpe1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jdXN0b20td3JhcHBlcntcblx0XHRcdFx0XHRcdHdpZHRoOjkwJTtcblx0XHRcdFx0XHRcdG1heC13aWR0aDoxMjAwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5leHAtaXRlbXN7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6d3JhcDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmV4cC1pdGVte1xuXHRcdFx0XHRcdFx0d2lkdGg6NDUlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb290ZXIgPiAuY3VzdG9tLXdyYXBwZXJ7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6bm93cmFwO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZvb3Rlci1sZWZ0LFxuXHRcdFx0XHRcdFx0LmZvb3Rlci1yaWdodHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6NDUlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDo1MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5mb290ZXItbGVmdHtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6ZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5mb290ZXItcmlnaHR7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDoxNXB4OyBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5mb290ZXItaGVhZGluZyxcblx0XHRcdFx0XHRcdC5mb290ZXItbGVmdCA+IHAsXG5cdFx0XHRcdFx0XHQuZm9vdGVyLWxlZnQgPiBhe1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpsZWZ0O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpsZWZ0IWltcG9ydGFudFxuXHRcdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5mb290ZXItbGVmdCA+IHB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQuZm9vdGVyLXJpZ2h0ID4gZm9ybXtcblx0XHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5mb290ZXItcmlnaHQgPiBmb3JtID4gbGFiZWwge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXX0= */
/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/pages/index.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seanlyons/Sites/portfoliov2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

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