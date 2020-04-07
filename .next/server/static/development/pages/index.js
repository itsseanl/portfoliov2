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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Email"), __jsx("input", {
    id: "email",
    type: "email",
    onChange: handleOnChange,
    required: true,
    value: inputs.email,
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Message"), __jsx("textarea", {
    id: "message",
    onChange: handleOnChange,
    required: true,
    value: inputs.message,
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-706162266" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-706162266" + " " + "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "706162266",
    __self: undefined
  }, "button.jsx-706162266{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-706162266{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-706162266,textarea.jsx-706162266{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-706162266{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZlLEFBR3lCLEFBU0gsQUFTTCxBQVFFLFdBUEEsRUFRZCxHQWpCYyxHQVRvQixLQW1CcEIsYUFDRSxjQW5CQSxDQW9CSCxZQUNBLEVBcEJJLFVBcUJqQixNQXBCWSxRQU9XLEdBTlQsYUFDQSxhQUNkLGlEQUt3QixtR0FDSiw2RkFDRixpQkFDbEIiLCJmaWxlIjoiL3Jvb3Qvc2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcblxuXHRjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe1xuICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgbWVzc2FnZTogJydcbiAgfSlcblxuICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChzdGF0dXMsIG1zZykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbXNnIH1cbiAgICAgIH0pXG4gICAgICBzZXRJbnB1dHMoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBpbmZvOiB7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gZSA9PiB7XG4gICAgZS5wZXJzaXN0KClcbiAgICBzZXRJbnB1dHMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSkpXG4gICAgc2V0U3RhdHVzKHtcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFN0YXR1cyhwcmV2U3RhdHVzID0+ICh7IC4uLnByZXZTdGF0dXMsIHN1Ym1pdHRpbmc6IHRydWUgfSkpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXRzKVxuICAgIH0pXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KClcbiAgICBoYW5kbGVSZXNwb25zZShyZXMuc3RhdHVzLCB0ZXh0KVxuICB9XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMubWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N0YXR1cy5zdWJtaXR0aW5nfT5cbiAgICAgICAgICB7IXN0YXR1cy5zdWJtaXR0aW5nXG4gICAgICAgICAgICA/ICFzdGF0dXMuc3VibWl0dGVkXG4gICAgICAgICAgICAgID8gJ1N1Ym1pdCdcbiAgICAgICAgICAgICAgOiAnU3VibWl0dGVkJ1xuICAgICAgICAgICAgOiAnU3VibWl0dGluZy4uLid9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3N0YXR1cy5pbmZvLmVycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVycm9yOiB7c3RhdHVzLmluZm8ubXNnfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshc3RhdHVzLmluZm8uZXJyb3IgJiYgc3RhdHVzLmluZm8ubXNnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDE1cHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dCxcblx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0cmVzaXplOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXX0= */\n/*@ sourceURL=/root/sites/portfoliov2/components/ContactForm.js */"));
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MyHeader = () => {
  return __jsx(Header, null, __jsx("h1", null, "Sean Lyons"), __jsx("ul", null, __jsx("li", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], null)), __jsx("li", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], null))));
};

const Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header`
  background: #fffff0;
  padding: 25px 5%;
  color: #333;
  // border-bottom: 8px solid #333;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "technologies"
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "section-heading"
  }, "The Essentials"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icons"
  }, __jsx("div", {
    id: "vscode",
    onFocus: () => setTechs("#272935", "Curabitur semper congue nisi volutpat vestibulum. Etiam vitae dui dui. Etiam condimentum pellentesque quam id dapibus. Suspendisse pulvinar porta dapibus. Nam hendrerit mi ac volutpat dignissim. Suspendisse potenti. Sed tempus scelerisque tortor, vitae tincidunt nulla. Quisque sagittis erat urna, vel volutpat est iaculis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris molestie tellus lectus, eu vulputate orci dapibus nec. Phasellus tempor ipsum non risus fermentum, et rutrum magna mattis. Donec eleifend porta eros. Integer vel justo dignissim elit tempor blandit. Nunc ut tortor in erat elementum pretium. Duis ut ex vel erat venenatis fermentum elementum sit amet massa. Etiam semper urna vestibulum, pretium tortor vestibulum, dictum dui.", "VS Code"),
    tabIndex: "3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiVisualstudio"], null)), __jsx("div", {
    id: "docker",
    onFocus: () => setTechs("#032144", "Maecenas et lectus sapien. Aliquam neque elit, suscipit eu tincidunt quis, fermentum sed metus. Vivamus pretium elementum facilisis. Nullam ac mollis elit. Donec rhoncus pulvinar justo, nec accumsan ligula tincidunt id. Sed non enim posuere, condimentum leo quis, viverra est. Morbi ac mattis ipsum. Praesent laoreet nisi non justo commodo, vitae fermentum metus ultricies. Quisque neque erat, tincidunt at mauris vel, vulputate tempor nisi. Curabitur et tincidunt diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Docker"),
    tabIndex: "4",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaDocker"], null)), __jsx("div", {
    id: "react",
    onFocus: () => setTechs("#29B1EF", "Aliquam eget finibus erat, mattis eleifend dui. Ut tempus ullamcorper justo non volutpat. Duis imperdiet pellentesque orci id feugiat. Duis fringilla, nulla sed porta porttitor, mi elit interdum elit, sit amet rutrum nunc enim ac elit. Morbi a condimentum augue, at gravida turpis. Suspendisse semper orci nunc, id faucibus ante vehicula vitae. Ut mattis felis sed nunc bibendum consequat. Vivamus tincidunt nibh vel libero pretium tincidunt. In nunc enim, lobortis sit amet vehicula ut, hendrerit vitae tellus.", "Next.js"),
    tabIndex: "5",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaReact"], null)), __jsx("div", {
    id: "github",
    onFocus: () => setTechs("#2DBD4E", "Duis vel varius nibh, nec malesuada turpis. Quisque mollis maximus felis eu tempor. Praesent nec tristique lacus, vel gravida odio. Mauris ac maximus tellus. Sed eu risus nunc. Nulla cursus semper rhoncus. Donec vitae neque purus. Nunc iaculis tellus at molestie finibus. Sed in tincidunt odio. Sed et turpis ac tortor luctus eleifend a eget est.", "Github"),
    tabIndex: "6",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiGithubBadge"], null)), __jsx("div", {
    id: "sass",
    onFocus: () => setTechs("#CF649A", "Nulla non augue a massa egestas sagittis quis sit amet urna. Duis vitae quam id dui fermentum lacinia. Pellentesque vel ante id nisl viverra dictum eu sed ex. Vivamus purus lacus, iaculis molestie lorem sit amet, pulvinar gravida libero. Cras tincidunt, turpis eget maximus consequat, mauris sapien bibendum lacus, ut pulvinar elit diam non sapien. Nunc placerat purus malesuada accumsan viverra. Vestibulum convallis justo eu urna dictum, at fringilla sem auctor.", "Sass"),
    tabIndex: "7",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiSass"], null)), __jsx("div", {
    id: "stackoverflow",
    onFocus: () => setTechs("#F48025", "Fusce arcu magna, congue vel gravida in, dictum a erat. Aenean vestibulum augue quis lobortis porttitor. Integer ante urna, elementum id porttitor quis, efficitur ut libero. Sed eget feugiat urna. Phasellus in posuere orci. Mauris sollicitudin urna quis risus semper commodo. Mauris ullamcorper mi et nunc sagittis, a molestie neque consequat. Aliquam pretium pulvinar sem, eu laoreet nisl vehicula luctus. Proin ante elit, vestibulum at neque faucibus, scelerisque viverra ante. Nullam facilisis nisi eget tortor iaculis porttitor.", "Stackoverflow"),
    tabIndex: "8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiStackoverflow"], null)), __jsx("div", {
    id: "wordpress",
    onFocus: () => setTechs("#D7DADE", "Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.", "WordPress"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiWordpress"], null)), __jsx("div", {
    id: "gulp",
    onFocus: () => setTechs("#D7DADE", "Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.", "WPGulp"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGulp"], null))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description-text"
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]])
  }, descriptionTitle), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "underline"
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]])
  }, descriptionText))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1725400583",
    dynamic: [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]
  }, `.section-heading.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:0px;z-index:1;background:${accentColor};width:100%;}.technologies.__jsx-style-dynamic-selector{background:${accentColor};padding-top:40px;}.technologies.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:0;padding:15px 10%;color:#fff;left:0;right:0;margin:auto;}.icons.__jsx-style-dynamic-selector{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:92%;left:0;right:0;margin:auto;background:${accentColor};overflow:visible;background:${accentColor};-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.icon.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:1%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fffff0;width:20%;color:#fff;padding:25px 0;font-size:24px;-webkit-transition:0.3s all;transition:0.3s all;color:#333;height:75px;}.icon.__jsx-style-dynamic-selector>svg{padding:5%;font-size:2em;}.icon.__jsx-style-dynamic-selector:focus{outline:none;border:1px solid rgba(0,0,0,0);font-size:2.1em;color:#fff;background:${accentColor};}.description.__jsx-style-dynamic-selector{background-image:linear-gradient(${accentColor} 50%,#fff 50%);-webkit-transition:0.3s all;transition:0.3s all;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:auto;}.description-text.__jsx-style-dynamic-selector{background:#fffff0;box-shadow:0px 0px 7px 4px rgba(0,0,0,0.15);color:#333;width:90%;height:auto;padding:25px 15px;margin:50px auto;}.underline.__jsx-style-dynamic-selector{height:4px;background:${accentColor};width:60%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtKZSxBQUdzQixBQU93QixBQUkvQixBQVNRLEFBWUYsQUFtQkosQUFJRSxBQU9nRSxBQVMxRCxBQVNSLFNBcEVNLEVBd0NILEFBNkIwQixFQXpCTixFQXZCckIsRUFaQSxFQW1Ea0MsTUFuQmhELENBeENZLFdBRUosR0FkQyxBQU9TLElBUVQsQUF5Q1EsSUF2RE4sR0FnRkEsQ0FqRUUsS0FSYixDQU55QyxFQXVEN0IsQ0F5QlosRUFWWSxDQXZEWixPQXlDeUMsR0FlOUIsRUFYVSxRQVlSLEtBekNFLEVBWkosS0FzRFEsRUF4RVAsR0FtQkosT0FDQyxDQW5CVCxFQXVEQSxHQWlCa0IsRUFwREwsUUF1Q0MsSUF0QzJCLEdBb0R6QyxZQTNDVyxVQUNhLGVBVE4saUJBQ3VCLGFBcUNsQiwyQkFwQ1AsMkJBUUksd0JBNkJJLE1BcEN4QiwrREFXb0IsbUJBQ1QsVUFDQyxDQXdCUSxVQXZCSixlQUNBLGVBQ0ssZ0RBQ1QsS0FxQkMsTUFwQkEsTUFxQmIsTUFwQkEiLCJmaWxlIjoiL3Jvb3Qvc2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9UZWNobm9sb2dpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYURvY2tlciwgRmFSZWFjdCwgRmFHdWxwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge1xuXHREaVZpc3VhbHN0dWRpbyxcblx0RGlHaXRodWJCYWRnZSxcblx0RGlTYXNzLFxuXHREaVN0YWNrb3ZlcmZsb3csXG5cdERpV29yZHByZXNzXG59IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVGVjaG5vbG9naWVzID0gKCkgPT4ge1xuXHRjb25zdCBbYWNjZW50Q29sb3IsIHNldEFjY2VudENvbG9yXSA9IHVzZVN0YXRlKFwiIzMzM1wiKTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uVGV4dCwgc2V0RGVzY3JpcHRpb25UZXh0XSA9IHVzZVN0YXRlKFxuXHRcdFwiQ3VyYWJpdHVyIHNlbXBlciBjb25ndWUgbmlzaSB2b2x1dHBhdCB2ZXN0aWJ1bHVtLiBFdGlhbSB2aXRhZSBkdWkgZHVpLiBFdGlhbSBjb25kaW1lbnR1bSBwZWxsZW50ZXNxdWUgcXVhbSBpZCBkYXBpYnVzLiBTdXNwZW5kaXNzZSBwdWx2aW5hciBwb3J0YSBkYXBpYnVzLiBOYW0gaGVuZHJlcml0IG1pIGFjIHZvbHV0cGF0IGRpZ25pc3NpbS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gU2VkIHRlbXB1cyBzY2VsZXJpc3F1ZSB0b3J0b3IsIHZpdGFlIHRpbmNpZHVudCBudWxsYS4gUXVpc3F1ZSBzYWdpdHRpcyBlcmF0IHVybmEsIHZlbCB2b2x1dHBhdCBlc3QgaWFjdWxpcyB2ZWhpY3VsYS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyBtb2xlc3RpZSB0ZWxsdXMgbGVjdHVzLCBldSB2dWxwdXRhdGUgb3JjaSBkYXBpYnVzIG5lYy4gUGhhc2VsbHVzIHRlbXBvciBpcHN1bSBub24gcmlzdXMgZmVybWVudHVtLCBldCBydXRydW0gbWFnbmEgbWF0dGlzLiBEb25lYyBlbGVpZmVuZCBwb3J0YSBlcm9zLiBJbnRlZ2VyIHZlbCBqdXN0byBkaWduaXNzaW0gZWxpdCB0ZW1wb3IgYmxhbmRpdC4gTnVuYyB1dCB0b3J0b3IgaW4gZXJhdCBlbGVtZW50dW0gcHJldGl1bS4gRHVpcyB1dCBleCB2ZWwgZXJhdCB2ZW5lbmF0aXMgZmVybWVudHVtIGVsZW1lbnR1bSBzaXQgYW1ldCBtYXNzYS4gRXRpYW0gc2VtcGVyIHVybmEgdmVzdGlidWx1bSwgcHJldGl1bSB0b3J0b3IgdmVzdGlidWx1bSwgZGljdHVtIGR1aS5cIlxuXHQpO1xuXHRjb25zdCBbZGVzY3JpcHRpb25UaXRsZSwgc2V0RGVzY3JpcHRpb25UaXRsZV0gPSB1c2VTdGF0ZShcIlZTIENvZGVcIik7XG5cblx0Y29uc3Qgc2V0VGVjaHMgPSAoY29sb3IsIHRleHQsIHRpdGxlKSA9PiB7XG5cdFx0c2V0QWNjZW50Q29sb3IoY29sb3IpO1xuXHRcdHNldERlc2NyaXB0aW9uVGl0bGUodGl0bGUpO1xuXHRcdHNldERlc2NyaXB0aW9uVGV4dCh0ZXh0KTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZWNobm9sb2dpZXNcIj5cblx0XHRcdDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj5UaGUgRXNzZW50aWFsczwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cInZzY29kZVwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiMyNzI5MzVcIixcblx0XHRcdFx0XHRcdFx0XCJDdXJhYml0dXIgc2VtcGVyIGNvbmd1ZSBuaXNpIHZvbHV0cGF0IHZlc3RpYnVsdW0uIEV0aWFtIHZpdGFlIGR1aSBkdWkuIEV0aWFtIGNvbmRpbWVudHVtIHBlbGxlbnRlc3F1ZSBxdWFtIGlkIGRhcGlidXMuIFN1c3BlbmRpc3NlIHB1bHZpbmFyIHBvcnRhIGRhcGlidXMuIE5hbSBoZW5kcmVyaXQgbWkgYWMgdm9sdXRwYXQgZGlnbmlzc2ltLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBTZWQgdGVtcHVzIHNjZWxlcmlzcXVlIHRvcnRvciwgdml0YWUgdGluY2lkdW50IG51bGxhLiBRdWlzcXVlIHNhZ2l0dGlzIGVyYXQgdXJuYSwgdmVsIHZvbHV0cGF0IGVzdCBpYWN1bGlzIHZlaGljdWxhLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIG1vbGVzdGllIHRlbGx1cyBsZWN0dXMsIGV1IHZ1bHB1dGF0ZSBvcmNpIGRhcGlidXMgbmVjLiBQaGFzZWxsdXMgdGVtcG9yIGlwc3VtIG5vbiByaXN1cyBmZXJtZW50dW0sIGV0IHJ1dHJ1bSBtYWduYSBtYXR0aXMuIERvbmVjIGVsZWlmZW5kIHBvcnRhIGVyb3MuIEludGVnZXIgdmVsIGp1c3RvIGRpZ25pc3NpbSBlbGl0IHRlbXBvciBibGFuZGl0LiBOdW5jIHV0IHRvcnRvciBpbiBlcmF0IGVsZW1lbnR1bSBwcmV0aXVtLiBEdWlzIHV0IGV4IHZlbCBlcmF0IHZlbmVuYXRpcyBmZXJtZW50dW0gZWxlbWVudHVtIHNpdCBhbWV0IG1hc3NhLiBFdGlhbSBzZW1wZXIgdXJuYSB2ZXN0aWJ1bHVtLCBwcmV0aXVtIHRvcnRvciB2ZXN0aWJ1bHVtLCBkaWN0dW0gZHVpLlwiLFxuXHRcdFx0XHRcdFx0XHRcIlZTIENvZGVcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjNcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERpVmlzdWFsc3R1ZGlvIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJkb2NrZXJcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjMDMyMTQ0XCIsXG5cdFx0XHRcdFx0XHRcdFwiTWFlY2VuYXMgZXQgbGVjdHVzIHNhcGllbi4gQWxpcXVhbSBuZXF1ZSBlbGl0LCBzdXNjaXBpdCBldSB0aW5jaWR1bnQgcXVpcywgZmVybWVudHVtIHNlZCBtZXR1cy4gVml2YW11cyBwcmV0aXVtIGVsZW1lbnR1bSBmYWNpbGlzaXMuIE51bGxhbSBhYyBtb2xsaXMgZWxpdC4gRG9uZWMgcmhvbmN1cyBwdWx2aW5hciBqdXN0bywgbmVjIGFjY3Vtc2FuIGxpZ3VsYSB0aW5jaWR1bnQgaWQuIFNlZCBub24gZW5pbSBwb3N1ZXJlLCBjb25kaW1lbnR1bSBsZW8gcXVpcywgdml2ZXJyYSBlc3QuIE1vcmJpIGFjIG1hdHRpcyBpcHN1bS4gUHJhZXNlbnQgbGFvcmVldCBuaXNpIG5vbiBqdXN0byBjb21tb2RvLCB2aXRhZSBmZXJtZW50dW0gbWV0dXMgdWx0cmljaWVzLiBRdWlzcXVlIG5lcXVlIGVyYXQsIHRpbmNpZHVudCBhdCBtYXVyaXMgdmVsLCB2dWxwdXRhdGUgdGVtcG9yIG5pc2kuIEN1cmFiaXR1ciBldCB0aW5jaWR1bnQgZGlhbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIixcblx0XHRcdFx0XHRcdFx0XCJEb2NrZXJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZhRG9ja2VyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJyZWFjdFwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiMyOUIxRUZcIixcblx0XHRcdFx0XHRcdFx0XCJBbGlxdWFtIGVnZXQgZmluaWJ1cyBlcmF0LCBtYXR0aXMgZWxlaWZlbmQgZHVpLiBVdCB0ZW1wdXMgdWxsYW1jb3JwZXIganVzdG8gbm9uIHZvbHV0cGF0LiBEdWlzIGltcGVyZGlldCBwZWxsZW50ZXNxdWUgb3JjaSBpZCBmZXVnaWF0LiBEdWlzIGZyaW5naWxsYSwgbnVsbGEgc2VkIHBvcnRhIHBvcnR0aXRvciwgbWkgZWxpdCBpbnRlcmR1bSBlbGl0LCBzaXQgYW1ldCBydXRydW0gbnVuYyBlbmltIGFjIGVsaXQuIE1vcmJpIGEgY29uZGltZW50dW0gYXVndWUsIGF0IGdyYXZpZGEgdHVycGlzLiBTdXNwZW5kaXNzZSBzZW1wZXIgb3JjaSBudW5jLCBpZCBmYXVjaWJ1cyBhbnRlIHZlaGljdWxhIHZpdGFlLiBVdCBtYXR0aXMgZmVsaXMgc2VkIG51bmMgYmliZW5kdW0gY29uc2VxdWF0LiBWaXZhbXVzIHRpbmNpZHVudCBuaWJoIHZlbCBsaWJlcm8gcHJldGl1bSB0aW5jaWR1bnQuIEluIG51bmMgZW5pbSwgbG9ib3J0aXMgc2l0IGFtZXQgdmVoaWN1bGEgdXQsIGhlbmRyZXJpdCB2aXRhZSB0ZWxsdXMuXCIsXG5cdFx0XHRcdFx0XHRcdFwiTmV4dC5qc1wiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiNVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RmFSZWFjdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwiZ2l0aHViXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiIzJEQkQ0RVwiLFxuXHRcdFx0XHRcdFx0XHRcIkR1aXMgdmVsIHZhcml1cyBuaWJoLCBuZWMgbWFsZXN1YWRhIHR1cnBpcy4gUXVpc3F1ZSBtb2xsaXMgbWF4aW11cyBmZWxpcyBldSB0ZW1wb3IuIFByYWVzZW50IG5lYyB0cmlzdGlxdWUgbGFjdXMsIHZlbCBncmF2aWRhIG9kaW8uIE1hdXJpcyBhYyBtYXhpbXVzIHRlbGx1cy4gU2VkIGV1IHJpc3VzIG51bmMuIE51bGxhIGN1cnN1cyBzZW1wZXIgcmhvbmN1cy4gRG9uZWMgdml0YWUgbmVxdWUgcHVydXMuIE51bmMgaWFjdWxpcyB0ZWxsdXMgYXQgbW9sZXN0aWUgZmluaWJ1cy4gU2VkIGluIHRpbmNpZHVudCBvZGlvLiBTZWQgZXQgdHVycGlzIGFjIHRvcnRvciBsdWN0dXMgZWxlaWZlbmQgYSBlZ2V0IGVzdC5cIixcblx0XHRcdFx0XHRcdFx0XCJHaXRodWJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjZcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERpR2l0aHViQmFkZ2UgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cInNhc3NcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjQ0Y2NDlBXCIsXG5cdFx0XHRcdFx0XHRcdFwiTnVsbGEgbm9uIGF1Z3VlIGEgbWFzc2EgZWdlc3RhcyBzYWdpdHRpcyBxdWlzIHNpdCBhbWV0IHVybmEuIER1aXMgdml0YWUgcXVhbSBpZCBkdWkgZmVybWVudHVtIGxhY2luaWEuIFBlbGxlbnRlc3F1ZSB2ZWwgYW50ZSBpZCBuaXNsIHZpdmVycmEgZGljdHVtIGV1IHNlZCBleC4gVml2YW11cyBwdXJ1cyBsYWN1cywgaWFjdWxpcyBtb2xlc3RpZSBsb3JlbSBzaXQgYW1ldCwgcHVsdmluYXIgZ3JhdmlkYSBsaWJlcm8uIENyYXMgdGluY2lkdW50LCB0dXJwaXMgZWdldCBtYXhpbXVzIGNvbnNlcXVhdCwgbWF1cmlzIHNhcGllbiBiaWJlbmR1bSBsYWN1cywgdXQgcHVsdmluYXIgZWxpdCBkaWFtIG5vbiBzYXBpZW4uIE51bmMgcGxhY2VyYXQgcHVydXMgbWFsZXN1YWRhIGFjY3Vtc2FuIHZpdmVycmEuIFZlc3RpYnVsdW0gY29udmFsbGlzIGp1c3RvIGV1IHVybmEgZGljdHVtLCBhdCBmcmluZ2lsbGEgc2VtIGF1Y3Rvci5cIixcblx0XHRcdFx0XHRcdFx0XCJTYXNzXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI3XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVNhc3MgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cInN0YWNrb3ZlcmZsb3dcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjRjQ4MDI1XCIsXG5cdFx0XHRcdFx0XHRcdFwiRnVzY2UgYXJjdSBtYWduYSwgY29uZ3VlIHZlbCBncmF2aWRhIGluLCBkaWN0dW0gYSBlcmF0LiBBZW5lYW4gdmVzdGlidWx1bSBhdWd1ZSBxdWlzIGxvYm9ydGlzIHBvcnR0aXRvci4gSW50ZWdlciBhbnRlIHVybmEsIGVsZW1lbnR1bSBpZCBwb3J0dGl0b3IgcXVpcywgZWZmaWNpdHVyIHV0IGxpYmVyby4gU2VkIGVnZXQgZmV1Z2lhdCB1cm5hLiBQaGFzZWxsdXMgaW4gcG9zdWVyZSBvcmNpLiBNYXVyaXMgc29sbGljaXR1ZGluIHVybmEgcXVpcyByaXN1cyBzZW1wZXIgY29tbW9kby4gTWF1cmlzIHVsbGFtY29ycGVyIG1pIGV0IG51bmMgc2FnaXR0aXMsIGEgbW9sZXN0aWUgbmVxdWUgY29uc2VxdWF0LiBBbGlxdWFtIHByZXRpdW0gcHVsdmluYXIgc2VtLCBldSBsYW9yZWV0IG5pc2wgdmVoaWN1bGEgbHVjdHVzLiBQcm9pbiBhbnRlIGVsaXQsIHZlc3RpYnVsdW0gYXQgbmVxdWUgZmF1Y2lidXMsIHNjZWxlcmlzcXVlIHZpdmVycmEgYW50ZS4gTnVsbGFtIGZhY2lsaXNpcyBuaXNpIGVnZXQgdG9ydG9yIGlhY3VsaXMgcG9ydHRpdG9yLlwiLFxuXHRcdFx0XHRcdFx0XHRcIlN0YWNrb3ZlcmZsb3dcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjhcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERpU3RhY2tvdmVyZmxvdyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiI0Q3REFERVwiLFxuXHRcdFx0XHRcdFx0XHRcIlV0IGFjY3Vtc2FuIGxlY3R1cyBhIGVuaW0gcHVsdmluYXIgdnVscHV0YXRlLiBWZXN0aWJ1bHVtIHZ1bHB1dGF0ZSBsZWN0dXMgcXVpcyBxdWFtIG1vbGxpcyBiaWJlbmR1bS4gUHJvaW4gbWFsZXN1YWRhIG1vbGxpcyB2ZWxpdCwgaWQgdGVtcHVzIGF1Z3VlIHRpbmNpZHVudCB1dC4gVXQgaGVuZHJlcml0IG51bGxhIGlkIGF1Z3VlIGV1aXNtb2QsIHNlZCBwcmV0aXVtIHB1cnVzIGZyaW5naWxsYS4gUHJvaW4gc2l0IGFtZXQgY29udmFsbGlzIG1pLiBTZWQgb3JuYXJlIGNvbmRpbWVudHVtIHNhcGllbiwgaW4gdWxsYW1jb3JwZXIgbmliaCBncmF2aWRhIG5vbi4gUHJhZXNlbnQgYXJjdSBlbmltLCB2ZXN0aWJ1bHVtIHV0IGxhY3VzIHN1c2NpcGl0LCBmYWNpbGlzaXMgcnV0cnVtIGVzdC4gRG9uZWMgZmVybWVudHVtIGVyYXQgYXJjdSwgYWMgZGFwaWJ1cyBuaXNpIHZlc3RpYnVsdW0gc2l0IGFtZXQuIE1vcmJpIHNlZCB0aW5jaWR1bnQgb2Rpby4gQWxpcXVhbSBiaWJlbmR1bSBtb2xlc3RpZSBvZGlvLCBjb25kaW1lbnR1bSB0cmlzdGlxdWUgc2FwaWVuIHZ1bHB1dGF0ZSBuZWMuIFZlc3RpYnVsdW0gdml0YWUgbWFsZXN1YWRhIG5pc2wuIE1hdXJpcyB2YXJpdXMgYSBudWxsYSBhdCBtYWxlc3VhZGEuXCIsXG5cdFx0XHRcdFx0XHRcdFwiV29yZFByZXNzXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI5XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVdvcmRwcmVzcyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwiZ3VscFwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiNEN0RBREVcIixcblx0XHRcdFx0XHRcdFx0XCJVdCBhY2N1bXNhbiBsZWN0dXMgYSBlbmltIHB1bHZpbmFyIHZ1bHB1dGF0ZS4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGVjdHVzIHF1aXMgcXVhbSBtb2xsaXMgYmliZW5kdW0uIFByb2luIG1hbGVzdWFkYSBtb2xsaXMgdmVsaXQsIGlkIHRlbXB1cyBhdWd1ZSB0aW5jaWR1bnQgdXQuIFV0IGhlbmRyZXJpdCBudWxsYSBpZCBhdWd1ZSBldWlzbW9kLCBzZWQgcHJldGl1bSBwdXJ1cyBmcmluZ2lsbGEuIFByb2luIHNpdCBhbWV0IGNvbnZhbGxpcyBtaS4gU2VkIG9ybmFyZSBjb25kaW1lbnR1bSBzYXBpZW4sIGluIHVsbGFtY29ycGVyIG5pYmggZ3JhdmlkYSBub24uIFByYWVzZW50IGFyY3UgZW5pbSwgdmVzdGlidWx1bSB1dCBsYWN1cyBzdXNjaXBpdCwgZmFjaWxpc2lzIHJ1dHJ1bSBlc3QuIERvbmVjIGZlcm1lbnR1bSBlcmF0IGFyY3UsIGFjIGRhcGlidXMgbmlzaSB2ZXN0aWJ1bHVtIHNpdCBhbWV0LiBNb3JiaSBzZWQgdGluY2lkdW50IG9kaW8uIEFsaXF1YW0gYmliZW5kdW0gbW9sZXN0aWUgb2RpbywgY29uZGltZW50dW0gdHJpc3RpcXVlIHNhcGllbiB2dWxwdXRhdGUgbmVjLiBWZXN0aWJ1bHVtIHZpdGFlIG1hbGVzdWFkYSBuaXNsLiBNYXVyaXMgdmFyaXVzIGEgbnVsbGEgYXQgbWFsZXN1YWRhLlwiLFxuXHRcdFx0XHRcdFx0XHRcIldQR3VscFwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiOVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RmFHdWxwIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGV4dFwiPlxuXHRcdFx0XHRcdDxoMj57ZGVzY3JpcHRpb25UaXRsZX08L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+PC9kaXY+XG5cdFx0XHRcdFx0PHA+e2Rlc2NyaXB0aW9uVGV4dH08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5zZWN0aW9uLWhlYWRpbmcge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7XG5cdFx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGVjaG5vbG9naWVzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNDBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGVjaG5vbG9naWVzID4gaDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4IDEwJTtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblxuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29ucyB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDQwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR3aWR0aDogOTIlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuXHRcdFx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleDogMSAwIGF1dG87XG5cdFx0XHRcdFx0bWFyZ2luOiAxJTtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG5cdFx0XHRcdFx0Ly8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogIzliY2JmNjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRoZWlnaHQ6IDc1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lmljb24gPiA6Z2xvYmFsKHN2Zykge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDUlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29uOmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyLjFlbTtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgke2FjY2VudENvbG9yfSA1MCUsICNmZmYgNTAlKTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRlc2NyaXB0aW9uLXRleHQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNTBweCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iXX0= */
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, null), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("main", {
    className: "jsx-296167489"
  }, __jsx(_components_Technologies__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("section", {
    className: "jsx-296167489" + " " + "featured-project"
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "featured"
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "overlay"
  }, __jsx("h2", {
    className: "jsx-296167489"
  }, "Featured Project"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline short"
  }), __jsx("h4", {
    className: "jsx-296167489"
  }, "Project Title")), __jsx("p", {
    className: "jsx-296167489"
  }, "Praesent ornare ornare tellus, et porta arcu consectetur at. Morbi sed ante odio. Vivamus tortor sem, feugiat vitae tincidunt sed, sollicitudin ut ex. Quisque pharetra mi quis sem dapibus, eget sagittis tortor facilisis. Fusce pellentesque vehicula eros, vel feugiat ante sodales eget. Pellentesque fringilla mattis velit nec fermentum. Maecenas maximus enim vitae lacus ullamcorper porttitor. Sed a nisl scelerisque, vestibulum felis ac, tempor lectus. Nulla orci ante, dignissim quis magna vel, molestie ullamcorper tortor. Donec id nunc placerat enim gravida cursus. Donec fringilla tincidunt mauris lobortis porta. Aliquam consequat ultricies tempor. Nullam in lobortis felis, non volutpat risus. Null euismod turpis ut ipsum mollis, quis lacinia nisl mattis. Nullam eu facilisis"))), __jsx("section", {
    className: "jsx-296167489" + " " + "experience"
  }, __jsx("h2", {
    className: "jsx-296167489"
  }, "Skills & Experience"), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-items"
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item"
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdTimer"], null), __jsx("h3", {
    className: "jsx-296167489"
  }, "Project Management"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny"
  }), __jsx("p", {
    className: "jsx-296167489"
  }, "coming soon")), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsers"], null), __jsx("h3", {
    className: "jsx-296167489"
  }, "Team-Based Workflow"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny"
  }), __jsx("p", {
    className: "jsx-296167489"
  }, "coming soon")), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTools"], null), __jsx("h3", {
    className: "jsx-296167489"
  }, "Site Maintenance"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny"
  }), __jsx("p", {
    className: "jsx-296167489"
  }, "coming soon")), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGlasses"], null), __jsx("h3", {
    className: "jsx-296167489"
  }, "Attention to Detail"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny"
  }), __jsx("p", {
    className: "jsx-296167489"
  }, "coming soon"))))), __jsx("footer", {
    className: "jsx-296167489"
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "footer-heading"
  }, __jsx("h2", {
    className: "jsx-296167489"
  }, "Get in touch!"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline"
  }), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], null))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "296167489"
  }, `.experience{background:rgb(51,51,51);background:linear-gradient( 0deg, rgba(51,51,51,1) 10%, rgba(255,255,255,1) 10% );}.underline{height:4px;background:#333;width:60%;}.short{width:40%;}main{z-index:1;background:#fff;}.featured-project{width:100%;left:0;right:0;margin:auto;}.featured-project>p{width:90%;left:0;right:0;margin:50px auto;}.featured{box-shadow:inset 0px 2px 12px 2px rgba(0,0,0,0.3);background:rgba(255,255,255,0.8);background-blend-mode:lighten;background-image:url(${__webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png")});background-size:cover;background-position:center;background-repeat:no-repeat;min-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 5%;text-align:center;}.overlay{background:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:auto;}.experience>h2{width:100%;left:0;right:0;padding:25px 10%;position:-webkit-sticky;position:sticky;top:0;background:#fff;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tiny{width:20%;}.exp-item{width:90%;left:0;right:0;margin:25px auto;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);background:#fffff0;padding:25px 15px;}.exp-item svg{font-size:28px;}footer{background:#333;margin-top:-20px;height:auto;padding:50px 0;}footer>.footer-heading>h2{color:#fff;background:#333;}footer>.footer-heading>.underline{background:#fff;width:60%;}footer>.footer-heading{padding-left:10%;padding-right:10%;position:relative;color:#fff !important;background:#333;}form>footer>.underline{background:#fff;position:relative;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFc0IsQUFHaUMsQUFRaEIsQUFLRCxBQUdBLEFBSUMsQUFNRCxBQU0yQyxBQWlCakIsQUFZekIsQUFVRSxBQUtILEFBR0EsQUFTSyxBQUdDLEFBTUwsQUFJSyxBQUtDLEFBUUQsVUFwR2pCLEFBR2lCLEFBVVQsQUFrRFIsQUFHUSxDQXZFUyxBQVlULEFBeUNBLEFBb0NTLElBVGpCLENBR2tCLEFBV1AsQUFZUSxDQXZGVixBQXFEQSxBQTBCVSxDQXJGVixBQXlDQSxPQTFEUCxBQXdCZ0IsQUFxREEsQ0FoRWxCLEFBS2EsQUF5Q0ssQUF3Q2xCLENBOUZXLEFBeUZYLE1BakRjLEFBMkNELENBdUJiLENBUm1CLEVBakduQixDQWFBLElBTUEsQUFxRGdELENBbEIvQixFQTZCRCxLQTdEcUIsR0E0RWQsT0FkdkIsY0F2QnVCLENBc0NOLFFBNUVjLEFBZ0N4QixHQWtCYSxHQWpCSCxFQTRDakIsY0EzQ0EsQUFpQm1CLEVBL0VuQixBQTZDdUIsTUFoQjZCLFVBbURwRCw2QkFid0IsWUFyQ0QscUJBZ0JDLENBZkksMkJBQ0MsNEJBQ1gsVUFtQ2xCLE9BbENjLDBCQWFNLGdEQVpHLDZDQWFYLFdBRUMsWUFDYixVQWZ3QixtR0FDSiw2RkFDSCxnQkFDRSxrQkFDbkIiLCJmaWxlIjoiL3Jvb3Qvc2l0ZXMvcG9ydGZvbGlvdjIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZFRpbWVyIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBGYVVzZXJzLCBGYVRvb2xzLCBGYUdsYXNzZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBNeUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm1cIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8R2xvYmFsU3R5bGUgLz5cblx0XHRcdDxNeUhlYWRlciAvPlxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxUZWNobm9sb2dpZXMgLz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWQtcHJvamVjdFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDI+RmVhdHVyZWQgUHJvamVjdDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHNob3J0XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxoND5Qcm9qZWN0IFRpdGxlPC9oND5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFByYWVzZW50IG9ybmFyZSBvcm5hcmUgdGVsbHVzLCBldCBwb3J0YSBhcmN1IGNvbnNlY3RldHVyIGF0LiBNb3JiaVxuXHRcdFx0XHRcdFx0XHRzZWQgYW50ZSBvZGlvLiBWaXZhbXVzIHRvcnRvciBzZW0sIGZldWdpYXQgdml0YWUgdGluY2lkdW50IHNlZCxcblx0XHRcdFx0XHRcdFx0c29sbGljaXR1ZGluIHV0IGV4LiBRdWlzcXVlIHBoYXJldHJhIG1pIHF1aXMgc2VtIGRhcGlidXMsIGVnZXRcblx0XHRcdFx0XHRcdFx0c2FnaXR0aXMgdG9ydG9yIGZhY2lsaXNpcy4gRnVzY2UgcGVsbGVudGVzcXVlIHZlaGljdWxhIGVyb3MsIHZlbFxuXHRcdFx0XHRcdFx0XHRmZXVnaWF0IGFudGUgc29kYWxlcyBlZ2V0LiBQZWxsZW50ZXNxdWUgZnJpbmdpbGxhIG1hdHRpcyB2ZWxpdCBuZWNcblx0XHRcdFx0XHRcdFx0ZmVybWVudHVtLiBNYWVjZW5hcyBtYXhpbXVzIGVuaW0gdml0YWUgbGFjdXMgdWxsYW1jb3JwZXJcblx0XHRcdFx0XHRcdFx0cG9ydHRpdG9yLiBTZWQgYSBuaXNsIHNjZWxlcmlzcXVlLCB2ZXN0aWJ1bHVtIGZlbGlzIGFjLCB0ZW1wb3Jcblx0XHRcdFx0XHRcdFx0bGVjdHVzLiBOdWxsYSBvcmNpIGFudGUsIGRpZ25pc3NpbSBxdWlzIG1hZ25hIHZlbCwgbW9sZXN0aWVcblx0XHRcdFx0XHRcdFx0dWxsYW1jb3JwZXIgdG9ydG9yLiBEb25lYyBpZCBudW5jIHBsYWNlcmF0IGVuaW0gZ3JhdmlkYSBjdXJzdXMuXG5cdFx0XHRcdFx0XHRcdERvbmVjIGZyaW5naWxsYSB0aW5jaWR1bnQgbWF1cmlzIGxvYm9ydGlzIHBvcnRhLiBBbGlxdWFtIGNvbnNlcXVhdFxuXHRcdFx0XHRcdFx0XHR1bHRyaWNpZXMgdGVtcG9yLiBOdWxsYW0gaW4gbG9ib3J0aXMgZmVsaXMsIG5vbiB2b2x1dHBhdCByaXN1cy5cblx0XHRcdFx0XHRcdFx0TnVsbCBldWlzbW9kIHR1cnBpcyB1dCBpcHN1bSBtb2xsaXMsIHF1aXMgbGFjaW5pYSBuaXNsIG1hdHRpcy5cblx0XHRcdFx0XHRcdFx0TnVsbGFtIGV1IGZhY2lsaXNpc1xuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIj5cblx0XHRcdFx0XHQ8aDI+U2tpbGxzICYgRXhwZXJpZW5jZTwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbXNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PE1kVGltZXIgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlByb2plY3QgTWFuYWdlbWVudDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhVXNlcnMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlRlYW0tQmFzZWQgV29ya2Zsb3c8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhVG9vbHMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPlNpdGUgTWFpbnRlbmFuY2U8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PEZhR2xhc3NlcyAvPlxuXHRcdFx0XHRcdFx0XHQ8aDM+QXR0ZW50aW9uIHRvIERldGFpbDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8cD5jb21pbmcgc29vbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0XHQ8Zm9vdGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0PGgyPkdldCBpbiB0b3VjaCE8L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+PC9kaXY+XG5cdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHRcdFx0XHRcdDBkZWcsXG5cdFx0XHRcdFx0XHRyZ2JhKDUxLCA1MSwgNTEsIDEpIDEwJSxcblx0XHRcdFx0XHRcdHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnNob3J0IHtcblx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZmVhdHVyZWQtcHJvamVjdCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkLXByb2plY3QgPiBwIHtcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiA1MHB4IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkIHtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3JlcXVpcmUoXCIuLi9hc3NldHMvaW1nL3Byb2plY3QucG5nXCIpfSk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDUlO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5vdmVybGF5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cGVyaWVuY2Uge1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHBlcmllbmNlID4gaDIge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAxMCU7XG5cdFx0XHRcdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5leHAtaXRlbXMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGlueSB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwLWl0ZW0ge1xuXHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IDI1cHggYXV0bztcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMTVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwLWl0ZW0gOmdsb2JhbChzdmcpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyID4gLmZvb3Rlci1oZWFkaW5nID4gaDIge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyID4gLmZvb3Rlci1oZWFkaW5nID4gLnVuZGVybGluZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblxuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyID4gLmZvb3Rlci1oZWFkaW5nIHtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwJTtcblx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMCU7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvcm0gPiBmb290ZXIgPiAudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufVxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZjA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIjtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBwIHtcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIjtcbiAgfVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdfQ== */
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

/***/ 4:
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