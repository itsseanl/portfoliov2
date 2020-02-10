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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ContactForm = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: (values, {
      setSubmitting
    }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
    /* and other goodies */

  }) => __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    name: "name",
    onChange: handleChange,
    value: values.name,
    placeholder: "name",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("input", {
    type: "email",
    name: "email",
    onChange: handleChange,
    value: values.email,
    placeholder: "email",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("textarea", {
    name: "message",
    onChange: handleChange,
    value: values.message,
    placeholder: "Message...",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    value: "submit",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Submit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "706162266",
    __self: undefined
  }, "button.jsx-706162266{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-706162266{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-706162266,textarea.jsx-706162266{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-706162266{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGUsQUFHeUIsQUFTSCxBQVNMLEFBUUUsV0FQQSxFQVFkLEdBakJjLEdBVG9CLEtBbUJwQixhQUNFLGNBbkJBLENBb0JILFlBQ0EsRUFwQkksVUFxQmpCLE1BcEJZLFFBT1csR0FOVCxhQUNBLGFBQ2QsaURBS3dCLG1HQUNKLDZGQUNGLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvc2Vhbmx5b25zL1NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Rm9ybWlrXG5cdFx0XHRcdGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1lc3NhZ2U6IFwiXCIgfX1cblx0XHRcdFx0dmFsaWRhdGU9e3ZhbHVlcyA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZXJyb3JzID0ge307XG5cdFx0XHRcdFx0aWYgKCF2YWx1ZXMuZW1haWwpIHtcblx0XHRcdFx0XHRcdGVycm9ycy5lbWFpbCA9IFwiUmVxdWlyZWRcIjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0IS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRlcnJvcnMuZW1haWwgPSBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZXJyb3JzO1xuXHRcdFx0XHR9fVxuXHRcdFx0XHRvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuXHRcdFx0XHRcdFx0c2V0U3VibWl0dGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSwgNDAwKTtcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0eyh7XG5cdFx0XHRcdFx0dmFsdWVzLFxuXHRcdFx0XHRcdGVycm9ycyxcblx0XHRcdFx0XHR0b3VjaGVkLFxuXHRcdFx0XHRcdGhhbmRsZUNoYW5nZSxcblx0XHRcdFx0XHRoYW5kbGVCbHVyLFxuXHRcdFx0XHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRcdFx0XHRpc1N1Ym1pdHRpbmdcblx0XHRcdFx0XHQvKiBhbmQgb3RoZXIgZ29vZGllcyAqL1xuXHRcdFx0XHR9KSA9PiAoXG5cdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMubmFtZX1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJuYW1lXCJcblx0XHRcdFx0XHRcdD48L2lucHV0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuZW1haWx9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0PjwvaW5wdXQ+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0bmFtZT1cIm1lc3NhZ2VcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTWVzc2FnZS4uLlwiXG5cdFx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFN1Ym1pdFxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDE1cHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dCxcblx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0cmVzaXplOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/components/ContactForm.js */"));
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
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MyHeader = () => {
  return __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Sean Lyons"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
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
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/components/Technologies.js";


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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "technologies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "The Essentials"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    id: "vscode",
    onFocus: () => setTechs("#272935", "Curabitur semper congue nisi volutpat vestibulum. Etiam vitae dui dui. Etiam condimentum pellentesque quam id dapibus. Suspendisse pulvinar porta dapibus. Nam hendrerit mi ac volutpat dignissim. Suspendisse potenti. Sed tempus scelerisque tortor, vitae tincidunt nulla. Quisque sagittis erat urna, vel volutpat est iaculis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris molestie tellus lectus, eu vulputate orci dapibus nec. Phasellus tempor ipsum non risus fermentum, et rutrum magna mattis. Donec eleifend porta eros. Integer vel justo dignissim elit tempor blandit. Nunc ut tortor in erat elementum pretium. Duis ut ex vel erat venenatis fermentum elementum sit amet massa. Etiam semper urna vestibulum, pretium tortor vestibulum, dictum dui.", "VS Code"),
    tabIndex: "3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#032144", "Maecenas et lectus sapien. Aliquam neque elit, suscipit eu tincidunt quis, fermentum sed metus. Vivamus pretium elementum facilisis. Nullam ac mollis elit. Donec rhoncus pulvinar justo, nec accumsan ligula tincidunt id. Sed non enim posuere, condimentum leo quis, viverra est. Morbi ac mattis ipsum. Praesent laoreet nisi non justo commodo, vitae fermentum metus ultricies. Quisque neque erat, tincidunt at mauris vel, vulputate tempor nisi. Curabitur et tincidunt diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Docker"),
    tabIndex: "4",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#29B1EF", "Aliquam eget finibus erat, mattis eleifend dui. Ut tempus ullamcorper justo non volutpat. Duis imperdiet pellentesque orci id feugiat. Duis fringilla, nulla sed porta porttitor, mi elit interdum elit, sit amet rutrum nunc enim ac elit. Morbi a condimentum augue, at gravida turpis. Suspendisse semper orci nunc, id faucibus ante vehicula vitae. Ut mattis felis sed nunc bibendum consequat. Vivamus tincidunt nibh vel libero pretium tincidunt. In nunc enim, lobortis sit amet vehicula ut, hendrerit vitae tellus.", "Next.js"),
    tabIndex: "5",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#2DBD4E", "Duis vel varius nibh, nec malesuada turpis. Quisque mollis maximus felis eu tempor. Praesent nec tristique lacus, vel gravida odio. Mauris ac maximus tellus. Sed eu risus nunc. Nulla cursus semper rhoncus. Donec vitae neque purus. Nunc iaculis tellus at molestie finibus. Sed in tincidunt odio. Sed et turpis ac tortor luctus eleifend a eget est.", "Github"),
    tabIndex: "6",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#CF649A", "Nulla non augue a massa egestas sagittis quis sit amet urna. Duis vitae quam id dui fermentum lacinia. Pellentesque vel ante id nisl viverra dictum eu sed ex. Vivamus purus lacus, iaculis molestie lorem sit amet, pulvinar gravida libero. Cras tincidunt, turpis eget maximus consequat, mauris sapien bibendum lacus, ut pulvinar elit diam non sapien. Nunc placerat purus malesuada accumsan viverra. Vestibulum convallis justo eu urna dictum, at fringilla sem auctor.", "Sass"),
    tabIndex: "7",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#F48025", "Fusce arcu magna, congue vel gravida in, dictum a erat. Aenean vestibulum augue quis lobortis porttitor. Integer ante urna, elementum id porttitor quis, efficitur ut libero. Sed eget feugiat urna. Phasellus in posuere orci. Mauris sollicitudin urna quis risus semper commodo. Mauris ullamcorper mi et nunc sagittis, a molestie neque consequat. Aliquam pretium pulvinar sem, eu laoreet nisl vehicula luctus. Proin ante elit, vestibulum at neque faucibus, scelerisque viverra ante. Nullam facilisis nisi eget tortor iaculis porttitor.", "Stackoverflow"),
    tabIndex: "8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#D7DADE", "Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.", "WordPress"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    onFocus: () => setTechs("#D7DADE", "Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.", "WPGulp"),
    tabIndex: "9",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "description-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, descriptionTitle), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]) + " " + "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1725400583", [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, descriptionText))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1725400583",
    dynamic: [accentColor, accentColor, accentColor, accentColor, accentColor, accentColor, accentColor],
    __self: undefined
  }, `.section-heading.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:0px;z-index:1;background:${accentColor};width:100%;}.technologies.__jsx-style-dynamic-selector{background:${accentColor};padding-top:40px;}.technologies.__jsx-style-dynamic-selector>h2.__jsx-style-dynamic-selector{margin:0;padding:15px 10%;color:#fff;left:0;right:0;margin:auto;}.icons.__jsx-style-dynamic-selector{padding-top:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:92%;left:0;right:0;margin:auto;background:${accentColor};overflow:visible;background:${accentColor};-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.icon.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:1%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fffff0;width:20%;color:#fff;padding:25px 0;font-size:24px;-webkit-transition:0.3s all;transition:0.3s all;color:#333;height:75px;}.icon.__jsx-style-dynamic-selector>svg{padding:5%;font-size:2em;}.icon.__jsx-style-dynamic-selector:focus{outline:none;border:1px solid rgba(0,0,0,0);font-size:2.1em;color:#fff;background:${accentColor};}.description.__jsx-style-dynamic-selector{background-image:linear-gradient(${accentColor} 50%,#fff 50%);-webkit-transition:0.3s all;transition:0.3s all;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:auto;}.description-text.__jsx-style-dynamic-selector{background:#fffff0;box-shadow:0px 0px 7px 4px rgba(0,0,0,0.15);color:#333;width:90%;height:auto;padding:25px 15px;margin:50px auto;}.underline.__jsx-style-dynamic-selector{height:4px;background:${accentColor};width:60%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9UZWNobm9sb2dpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0plLEFBR3NCLEFBT3dCLEFBSS9CLEFBU1EsQUFZRixBQW1CSixBQUlFLEFBT2dFLEFBUzFELEFBU1IsU0FwRU0sRUF3Q0gsQUE2QjBCLEVBekJOLEVBdkJyQixFQVpBLEVBbURrQyxNQW5CaEQsQ0F4Q1ksV0FFSixHQWRDLEFBT1MsSUFRVCxBQXlDUSxJQXZETixHQWdGQSxDQWpFRSxLQVJiLENBTnlDLEVBdUQ3QixDQXlCWixFQVZZLENBdkRaLE9BeUN5QyxHQWU5QixFQVhVLFFBWVIsS0F6Q0UsRUFaSixLQXNEUSxFQXhFUCxHQW1CSixPQUNDLENBbkJULEVBdURBLEdBaUJrQixFQXBETCxRQXVDQyxJQXRDMkIsR0FvRHpDLFlBM0NXLFVBQ2EsZUFUTixpQkFDdUIsYUFxQ2xCLDJCQXBDUCwyQkFRSSx3QkE2QkksTUFwQ3hCLCtEQVdvQixtQkFDVCxVQUNDLENBd0JRLFVBdkJKLGVBQ0EsZUFDSyxnREFDVCxLQXFCQyxNQXBCQSxNQXFCYixNQXBCQSIsImZpbGUiOiIvVXNlcnMvc2Vhbmx5b25zL1NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFEb2NrZXIsIEZhUmVhY3QsIEZhR3VscCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtcblx0RGlWaXN1YWxzdHVkaW8sXG5cdERpR2l0aHViQmFkZ2UsXG5cdERpU2Fzcyxcblx0RGlTdGFja292ZXJmbG93LFxuXHREaVdvcmRwcmVzc1xufSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+IHtcblx0Y29uc3QgW2FjY2VudENvbG9yLCBzZXRBY2NlbnRDb2xvcl0gPSB1c2VTdGF0ZShcIiMzMzNcIik7XG5cdGNvbnN0IFtkZXNjcmlwdGlvblRleHQsIHNldERlc2NyaXB0aW9uVGV4dF0gPSB1c2VTdGF0ZShcblx0XHRcIkN1cmFiaXR1ciBzZW1wZXIgY29uZ3VlIG5pc2kgdm9sdXRwYXQgdmVzdGlidWx1bS4gRXRpYW0gdml0YWUgZHVpIGR1aS4gRXRpYW0gY29uZGltZW50dW0gcGVsbGVudGVzcXVlIHF1YW0gaWQgZGFwaWJ1cy4gU3VzcGVuZGlzc2UgcHVsdmluYXIgcG9ydGEgZGFwaWJ1cy4gTmFtIGhlbmRyZXJpdCBtaSBhYyB2b2x1dHBhdCBkaWduaXNzaW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuIFNlZCB0ZW1wdXMgc2NlbGVyaXNxdWUgdG9ydG9yLCB2aXRhZSB0aW5jaWR1bnQgbnVsbGEuIFF1aXNxdWUgc2FnaXR0aXMgZXJhdCB1cm5hLCB2ZWwgdm9sdXRwYXQgZXN0IGlhY3VsaXMgdmVoaWN1bGEuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgbW9sZXN0aWUgdGVsbHVzIGxlY3R1cywgZXUgdnVscHV0YXRlIG9yY2kgZGFwaWJ1cyBuZWMuIFBoYXNlbGx1cyB0ZW1wb3IgaXBzdW0gbm9uIHJpc3VzIGZlcm1lbnR1bSwgZXQgcnV0cnVtIG1hZ25hIG1hdHRpcy4gRG9uZWMgZWxlaWZlbmQgcG9ydGEgZXJvcy4gSW50ZWdlciB2ZWwganVzdG8gZGlnbmlzc2ltIGVsaXQgdGVtcG9yIGJsYW5kaXQuIE51bmMgdXQgdG9ydG9yIGluIGVyYXQgZWxlbWVudHVtIHByZXRpdW0uIER1aXMgdXQgZXggdmVsIGVyYXQgdmVuZW5hdGlzIGZlcm1lbnR1bSBlbGVtZW50dW0gc2l0IGFtZXQgbWFzc2EuIEV0aWFtIHNlbXBlciB1cm5hIHZlc3RpYnVsdW0sIHByZXRpdW0gdG9ydG9yIHZlc3RpYnVsdW0sIGRpY3R1bSBkdWkuXCJcblx0KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uVGl0bGUsIHNldERlc2NyaXB0aW9uVGl0bGVdID0gdXNlU3RhdGUoXCJWUyBDb2RlXCIpO1xuXG5cdGNvbnN0IHNldFRlY2hzID0gKGNvbG9yLCB0ZXh0LCB0aXRsZSkgPT4ge1xuXHRcdHNldEFjY2VudENvbG9yKGNvbG9yKTtcblx0XHRzZXREZXNjcmlwdGlvblRpdGxlKHRpdGxlKTtcblx0XHRzZXREZXNjcmlwdGlvblRleHQodGV4dCk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidGVjaG5vbG9naWVzXCI+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+VGhlIEVzc2VudGlhbHM8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJ2c2NvZGVcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjMjcyOTM1XCIsXG5cdFx0XHRcdFx0XHRcdFwiQ3VyYWJpdHVyIHNlbXBlciBjb25ndWUgbmlzaSB2b2x1dHBhdCB2ZXN0aWJ1bHVtLiBFdGlhbSB2aXRhZSBkdWkgZHVpLiBFdGlhbSBjb25kaW1lbnR1bSBwZWxsZW50ZXNxdWUgcXVhbSBpZCBkYXBpYnVzLiBTdXNwZW5kaXNzZSBwdWx2aW5hciBwb3J0YSBkYXBpYnVzLiBOYW0gaGVuZHJlcml0IG1pIGFjIHZvbHV0cGF0IGRpZ25pc3NpbS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gU2VkIHRlbXB1cyBzY2VsZXJpc3F1ZSB0b3J0b3IsIHZpdGFlIHRpbmNpZHVudCBudWxsYS4gUXVpc3F1ZSBzYWdpdHRpcyBlcmF0IHVybmEsIHZlbCB2b2x1dHBhdCBlc3QgaWFjdWxpcyB2ZWhpY3VsYS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyBtb2xlc3RpZSB0ZWxsdXMgbGVjdHVzLCBldSB2dWxwdXRhdGUgb3JjaSBkYXBpYnVzIG5lYy4gUGhhc2VsbHVzIHRlbXBvciBpcHN1bSBub24gcmlzdXMgZmVybWVudHVtLCBldCBydXRydW0gbWFnbmEgbWF0dGlzLiBEb25lYyBlbGVpZmVuZCBwb3J0YSBlcm9zLiBJbnRlZ2VyIHZlbCBqdXN0byBkaWduaXNzaW0gZWxpdCB0ZW1wb3IgYmxhbmRpdC4gTnVuYyB1dCB0b3J0b3IgaW4gZXJhdCBlbGVtZW50dW0gcHJldGl1bS4gRHVpcyB1dCBleCB2ZWwgZXJhdCB2ZW5lbmF0aXMgZmVybWVudHVtIGVsZW1lbnR1bSBzaXQgYW1ldCBtYXNzYS4gRXRpYW0gc2VtcGVyIHVybmEgdmVzdGlidWx1bSwgcHJldGl1bSB0b3J0b3IgdmVzdGlidWx1bSwgZGljdHVtIGR1aS5cIixcblx0XHRcdFx0XHRcdFx0XCJWUyBDb2RlXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCIzXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVZpc3VhbHN0dWRpbyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwiZG9ja2VyXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiIzAzMjE0NFwiLFxuXHRcdFx0XHRcdFx0XHRcIk1hZWNlbmFzIGV0IGxlY3R1cyBzYXBpZW4uIEFsaXF1YW0gbmVxdWUgZWxpdCwgc3VzY2lwaXQgZXUgdGluY2lkdW50IHF1aXMsIGZlcm1lbnR1bSBzZWQgbWV0dXMuIFZpdmFtdXMgcHJldGl1bSBlbGVtZW50dW0gZmFjaWxpc2lzLiBOdWxsYW0gYWMgbW9sbGlzIGVsaXQuIERvbmVjIHJob25jdXMgcHVsdmluYXIganVzdG8sIG5lYyBhY2N1bXNhbiBsaWd1bGEgdGluY2lkdW50IGlkLiBTZWQgbm9uIGVuaW0gcG9zdWVyZSwgY29uZGltZW50dW0gbGVvIHF1aXMsIHZpdmVycmEgZXN0LiBNb3JiaSBhYyBtYXR0aXMgaXBzdW0uIFByYWVzZW50IGxhb3JlZXQgbmlzaSBub24ganVzdG8gY29tbW9kbywgdml0YWUgZmVybWVudHVtIG1ldHVzIHVsdHJpY2llcy4gUXVpc3F1ZSBuZXF1ZSBlcmF0LCB0aW5jaWR1bnQgYXQgbWF1cmlzIHZlbCwgdnVscHV0YXRlIHRlbXBvciBuaXNpLiBDdXJhYml0dXIgZXQgdGluY2lkdW50IGRpYW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCIsXG5cdFx0XHRcdFx0XHRcdFwiRG9ja2VyXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGYURvY2tlciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb25cIlxuXHRcdFx0XHRcdGlkPVwicmVhY3RcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjMjlCMUVGXCIsXG5cdFx0XHRcdFx0XHRcdFwiQWxpcXVhbSBlZ2V0IGZpbmlidXMgZXJhdCwgbWF0dGlzIGVsZWlmZW5kIGR1aS4gVXQgdGVtcHVzIHVsbGFtY29ycGVyIGp1c3RvIG5vbiB2b2x1dHBhdC4gRHVpcyBpbXBlcmRpZXQgcGVsbGVudGVzcXVlIG9yY2kgaWQgZmV1Z2lhdC4gRHVpcyBmcmluZ2lsbGEsIG51bGxhIHNlZCBwb3J0YSBwb3J0dGl0b3IsIG1pIGVsaXQgaW50ZXJkdW0gZWxpdCwgc2l0IGFtZXQgcnV0cnVtIG51bmMgZW5pbSBhYyBlbGl0LiBNb3JiaSBhIGNvbmRpbWVudHVtIGF1Z3VlLCBhdCBncmF2aWRhIHR1cnBpcy4gU3VzcGVuZGlzc2Ugc2VtcGVyIG9yY2kgbnVuYywgaWQgZmF1Y2lidXMgYW50ZSB2ZWhpY3VsYSB2aXRhZS4gVXQgbWF0dGlzIGZlbGlzIHNlZCBudW5jIGJpYmVuZHVtIGNvbnNlcXVhdC4gVml2YW11cyB0aW5jaWR1bnQgbmliaCB2ZWwgbGliZXJvIHByZXRpdW0gdGluY2lkdW50LiBJbiBudW5jIGVuaW0sIGxvYm9ydGlzIHNpdCBhbWV0IHZlaGljdWxhIHV0LCBoZW5kcmVyaXQgdml0YWUgdGVsbHVzLlwiLFxuXHRcdFx0XHRcdFx0XHRcIk5leHQuanNcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZhUmVhY3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cImdpdGh1YlwiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiMyREJENEVcIixcblx0XHRcdFx0XHRcdFx0XCJEdWlzIHZlbCB2YXJpdXMgbmliaCwgbmVjIG1hbGVzdWFkYSB0dXJwaXMuIFF1aXNxdWUgbW9sbGlzIG1heGltdXMgZmVsaXMgZXUgdGVtcG9yLiBQcmFlc2VudCBuZWMgdHJpc3RpcXVlIGxhY3VzLCB2ZWwgZ3JhdmlkYSBvZGlvLiBNYXVyaXMgYWMgbWF4aW11cyB0ZWxsdXMuIFNlZCBldSByaXN1cyBudW5jLiBOdWxsYSBjdXJzdXMgc2VtcGVyIHJob25jdXMuIERvbmVjIHZpdGFlIG5lcXVlIHB1cnVzLiBOdW5jIGlhY3VsaXMgdGVsbHVzIGF0IG1vbGVzdGllIGZpbmlidXMuIFNlZCBpbiB0aW5jaWR1bnQgb2Rpby4gU2VkIGV0IHR1cnBpcyBhYyB0b3J0b3IgbHVjdHVzIGVsZWlmZW5kIGEgZWdldCBlc3QuXCIsXG5cdFx0XHRcdFx0XHRcdFwiR2l0aHViXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI2XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaUdpdGh1YkJhZGdlIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJzYXNzXCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiI0NGNjQ5QVwiLFxuXHRcdFx0XHRcdFx0XHRcIk51bGxhIG5vbiBhdWd1ZSBhIG1hc3NhIGVnZXN0YXMgc2FnaXR0aXMgcXVpcyBzaXQgYW1ldCB1cm5hLiBEdWlzIHZpdGFlIHF1YW0gaWQgZHVpIGZlcm1lbnR1bSBsYWNpbmlhLiBQZWxsZW50ZXNxdWUgdmVsIGFudGUgaWQgbmlzbCB2aXZlcnJhIGRpY3R1bSBldSBzZWQgZXguIFZpdmFtdXMgcHVydXMgbGFjdXMsIGlhY3VsaXMgbW9sZXN0aWUgbG9yZW0gc2l0IGFtZXQsIHB1bHZpbmFyIGdyYXZpZGEgbGliZXJvLiBDcmFzIHRpbmNpZHVudCwgdHVycGlzIGVnZXQgbWF4aW11cyBjb25zZXF1YXQsIG1hdXJpcyBzYXBpZW4gYmliZW5kdW0gbGFjdXMsIHV0IHB1bHZpbmFyIGVsaXQgZGlhbSBub24gc2FwaWVuLiBOdW5jIHBsYWNlcmF0IHB1cnVzIG1hbGVzdWFkYSBhY2N1bXNhbiB2aXZlcnJhLiBWZXN0aWJ1bHVtIGNvbnZhbGxpcyBqdXN0byBldSB1cm5hIGRpY3R1bSwgYXQgZnJpbmdpbGxhIHNlbSBhdWN0b3IuXCIsXG5cdFx0XHRcdFx0XHRcdFwiU2Fzc1wiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiN1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RGlTYXNzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvblwiXG5cdFx0XHRcdFx0aWQ9XCJzdGFja292ZXJmbG93XCJcblx0XHRcdFx0XHRvbkZvY3VzPXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0VGVjaHMoXG5cdFx0XHRcdFx0XHRcdFwiI0Y0ODAyNVwiLFxuXHRcdFx0XHRcdFx0XHRcIkZ1c2NlIGFyY3UgbWFnbmEsIGNvbmd1ZSB2ZWwgZ3JhdmlkYSBpbiwgZGljdHVtIGEgZXJhdC4gQWVuZWFuIHZlc3RpYnVsdW0gYXVndWUgcXVpcyBsb2JvcnRpcyBwb3J0dGl0b3IuIEludGVnZXIgYW50ZSB1cm5hLCBlbGVtZW50dW0gaWQgcG9ydHRpdG9yIHF1aXMsIGVmZmljaXR1ciB1dCBsaWJlcm8uIFNlZCBlZ2V0IGZldWdpYXQgdXJuYS4gUGhhc2VsbHVzIGluIHBvc3VlcmUgb3JjaS4gTWF1cmlzIHNvbGxpY2l0dWRpbiB1cm5hIHF1aXMgcmlzdXMgc2VtcGVyIGNvbW1vZG8uIE1hdXJpcyB1bGxhbWNvcnBlciBtaSBldCBudW5jIHNhZ2l0dGlzLCBhIG1vbGVzdGllIG5lcXVlIGNvbnNlcXVhdC4gQWxpcXVhbSBwcmV0aXVtIHB1bHZpbmFyIHNlbSwgZXUgbGFvcmVldCBuaXNsIHZlaGljdWxhIGx1Y3R1cy4gUHJvaW4gYW50ZSBlbGl0LCB2ZXN0aWJ1bHVtIGF0IG5lcXVlIGZhdWNpYnVzLCBzY2VsZXJpc3F1ZSB2aXZlcnJhIGFudGUuIE51bGxhbSBmYWNpbGlzaXMgbmlzaSBlZ2V0IHRvcnRvciBpYWN1bGlzIHBvcnR0aXRvci5cIixcblx0XHRcdFx0XHRcdFx0XCJTdGFja292ZXJmbG93XCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFiSW5kZXg9XCI4XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEaVN0YWNrb3ZlcmZsb3cgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0b25Gb2N1cz17KCkgPT5cblx0XHRcdFx0XHRcdHNldFRlY2hzKFxuXHRcdFx0XHRcdFx0XHRcIiNEN0RBREVcIixcblx0XHRcdFx0XHRcdFx0XCJVdCBhY2N1bXNhbiBsZWN0dXMgYSBlbmltIHB1bHZpbmFyIHZ1bHB1dGF0ZS4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGVjdHVzIHF1aXMgcXVhbSBtb2xsaXMgYmliZW5kdW0uIFByb2luIG1hbGVzdWFkYSBtb2xsaXMgdmVsaXQsIGlkIHRlbXB1cyBhdWd1ZSB0aW5jaWR1bnQgdXQuIFV0IGhlbmRyZXJpdCBudWxsYSBpZCBhdWd1ZSBldWlzbW9kLCBzZWQgcHJldGl1bSBwdXJ1cyBmcmluZ2lsbGEuIFByb2luIHNpdCBhbWV0IGNvbnZhbGxpcyBtaS4gU2VkIG9ybmFyZSBjb25kaW1lbnR1bSBzYXBpZW4sIGluIHVsbGFtY29ycGVyIG5pYmggZ3JhdmlkYSBub24uIFByYWVzZW50IGFyY3UgZW5pbSwgdmVzdGlidWx1bSB1dCBsYWN1cyBzdXNjaXBpdCwgZmFjaWxpc2lzIHJ1dHJ1bSBlc3QuIERvbmVjIGZlcm1lbnR1bSBlcmF0IGFyY3UsIGFjIGRhcGlidXMgbmlzaSB2ZXN0aWJ1bHVtIHNpdCBhbWV0LiBNb3JiaSBzZWQgdGluY2lkdW50IG9kaW8uIEFsaXF1YW0gYmliZW5kdW0gbW9sZXN0aWUgb2RpbywgY29uZGltZW50dW0gdHJpc3RpcXVlIHNhcGllbiB2dWxwdXRhdGUgbmVjLiBWZXN0aWJ1bHVtIHZpdGFlIG1hbGVzdWFkYSBuaXNsLiBNYXVyaXMgdmFyaXVzIGEgbnVsbGEgYXQgbWFsZXN1YWRhLlwiLFxuXHRcdFx0XHRcdFx0XHRcIldvcmRQcmVzc1wiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhYkluZGV4PVwiOVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RGlXb3JkcHJlc3MgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uXCJcblx0XHRcdFx0XHRpZD1cImd1bHBcIlxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+XG5cdFx0XHRcdFx0XHRzZXRUZWNocyhcblx0XHRcdFx0XHRcdFx0XCIjRDdEQURFXCIsXG5cdFx0XHRcdFx0XHRcdFwiVXQgYWNjdW1zYW4gbGVjdHVzIGEgZW5pbSBwdWx2aW5hciB2dWxwdXRhdGUuIFZlc3RpYnVsdW0gdnVscHV0YXRlIGxlY3R1cyBxdWlzIHF1YW0gbW9sbGlzIGJpYmVuZHVtLiBQcm9pbiBtYWxlc3VhZGEgbW9sbGlzIHZlbGl0LCBpZCB0ZW1wdXMgYXVndWUgdGluY2lkdW50IHV0LiBVdCBoZW5kcmVyaXQgbnVsbGEgaWQgYXVndWUgZXVpc21vZCwgc2VkIHByZXRpdW0gcHVydXMgZnJpbmdpbGxhLiBQcm9pbiBzaXQgYW1ldCBjb252YWxsaXMgbWkuIFNlZCBvcm5hcmUgY29uZGltZW50dW0gc2FwaWVuLCBpbiB1bGxhbWNvcnBlciBuaWJoIGdyYXZpZGEgbm9uLiBQcmFlc2VudCBhcmN1IGVuaW0sIHZlc3RpYnVsdW0gdXQgbGFjdXMgc3VzY2lwaXQsIGZhY2lsaXNpcyBydXRydW0gZXN0LiBEb25lYyBmZXJtZW50dW0gZXJhdCBhcmN1LCBhYyBkYXBpYnVzIG5pc2kgdmVzdGlidWx1bSBzaXQgYW1ldC4gTW9yYmkgc2VkIHRpbmNpZHVudCBvZGlvLiBBbGlxdWFtIGJpYmVuZHVtIG1vbGVzdGllIG9kaW8sIGNvbmRpbWVudHVtIHRyaXN0aXF1ZSBzYXBpZW4gdnVscHV0YXRlIG5lYy4gVmVzdGlidWx1bSB2aXRhZSBtYWxlc3VhZGEgbmlzbC4gTWF1cmlzIHZhcml1cyBhIG51bGxhIGF0IG1hbGVzdWFkYS5cIixcblx0XHRcdFx0XHRcdFx0XCJXUEd1bHBcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJJbmRleD1cIjlcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZhR3VscCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRleHRcIj5cblx0XHRcdFx0XHQ8aDI+e2Rlc2NyaXB0aW9uVGl0bGV9PC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvblRleHR9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuc2VjdGlvbi1oZWFkaW5nIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDQwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRlY2hub2xvZ2llcyA+IGgyIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweCAxMCU7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbnMge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA0MHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0d2lkdGg6IDkyJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHRvdmVyZmxvdzogdmlzaWJsZTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXg6IDEgMCBhdXRvO1xuXHRcdFx0XHRcdG1hcmdpbjogMSU7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRcdFx0XHRcdC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xuXHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6ICM5YmNiZjY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0aGVpZ2h0OiA3NXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pY29uID4gOmdsb2JhbChzdmcpIHtcblx0XHRcdFx0XHRwYWRkaW5nOiA1JTtcblx0XHRcdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbjpmb2N1cyB7XG5cdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMi4xZW07XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY2NlbnRDb2xvcn07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHthY2NlbnRDb2xvcn0gNTAlLCAjZmZmIDUwJSk7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5kZXNjcmlwdGlvbi10ZXh0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMTVweDtcblx0XHRcdFx0XHRtYXJnaW46IDUwcHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQudW5kZXJsaW5lIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjY2VudENvbG9yfTtcblx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xuIl19 */
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_Technologies__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("section", {
    className: "jsx-296167489" + " " + "featured-project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "featured",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Featured Project"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Project Title")), __jsx("p", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Praesent ornare ornare tellus, et porta arcu consectetur at. Morbi sed ante odio. Vivamus tortor sem, feugiat vitae tincidunt sed, sollicitudin ut ex. Quisque pharetra mi quis sem dapibus, eget sagittis tortor facilisis. Fusce pellentesque vehicula eros, vel feugiat ante sodales eget. Pellentesque fringilla mattis velit nec fermentum. Maecenas maximus enim vitae lacus ullamcorper porttitor. Sed a nisl scelerisque, vestibulum felis ac, tempor lectus. Nulla orci ante, dignissim quis magna vel, molestie ullamcorper tortor. Donec id nunc placerat enim gravida cursus. Donec fringilla tincidunt mauris lobortis porta. Aliquam consequat ultricies tempor. Nullam in lobortis felis, non volutpat risus. Null euismod turpis ut ipsum mollis, quis lacinia nisl mattis. Nullam eu facilisis"))), __jsx("section", {
    className: "jsx-296167489" + " " + "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Skills & Experience"), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdTimer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Project Management"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "coming soon")), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsers"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Team-Based Workflow"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "coming soon")), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTools"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Site Maintenance"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "coming soon")), __jsx("div", {
    className: "jsx-296167489" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGlasses"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Attention to Detail"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "coming soon"))))), __jsx("footer", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-296167489" + " " + "footer-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-296167489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Get in touch!"), __jsx("div", {
    className: "jsx-296167489" + " " + "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "296167489",
    __self: this
  }, `.experience{background:rgb(51,51,51);background:linear-gradient( 0deg, rgba(51,51,51,1) 10%, rgba(255,255,255,1) 10% );}.underline{height:4px;background:#333;width:60%;}.short{width:40%;}main{z-index:1;background:#fff;}.featured-project{width:100%;left:0;right:0;margin:auto;}.featured-project>p{width:90%;left:0;right:0;margin:50px auto;}.featured{box-shadow:inset 0px 2px 12px 2px rgba(0,0,0,0.3);background:rgba(255,255,255,0.8);background-blend-mode:lighten;background-image:url(${__webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png")});background-size:cover;background-position:center;background-repeat:no-repeat;min-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 5%;text-align:center;}.overlay{background:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:auto;}.experience>h2{width:100%;left:0;right:0;padding:25px 10%;position:-webkit-sticky;position:sticky;top:0;background:#fff;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tiny{width:20%;}.exp-item{width:90%;left:0;right:0;margin:25px auto;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);background:#fffff0;padding:25px 15px;}.exp-item svg{font-size:28px;}footer{background:#333;margin-top:-20px;height:auto;padding:50px 0;}footer>.footer-heading>h2{color:#fff;background:#333;}footer>.footer-heading>.underline{background:#fff;width:60%;}footer>.footer-heading{padding-left:10%;padding-right:10%;position:relative;color:#fff !important;background:#333;}form>footer>.underline{background:#fff;position:relative;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVzQixBQUdpQyxBQVFoQixBQUtELEFBR0EsQUFJQyxBQU1ELEFBTTJDLEFBaUJqQixBQVl6QixBQVVFLEFBS0gsQUFHQSxBQVNLLEFBR0MsQUFNTCxBQUlLLEFBS0MsQUFRRCxVQXBHakIsQUFHaUIsQUFVVCxBQWtEUixBQUdRLENBdkVTLEFBWVQsQUF5Q0EsQUFvQ1MsSUFUakIsQ0FHa0IsQUFXUCxBQVlRLENBdkZWLEFBcURBLEFBMEJVLENBckZWLEFBeUNBLE9BMURQLEFBd0JnQixBQXFEQSxDQWhFbEIsQUFLYSxBQXlDSyxBQXdDbEIsQ0E5RlcsQUF5RlgsTUFqRGMsQUEyQ0QsQ0F1QmIsQ0FSbUIsRUFqR25CLENBYUEsSUFNQSxBQXFEZ0QsQ0FsQi9CLEVBNkJELEtBN0RxQixHQTRFZCxPQWR2QixjQXZCdUIsQ0FzQ04sUUE1RWMsQUFnQ3hCLEdBa0JhLEdBakJILEVBNENqQixjQTNDQSxBQWlCbUIsRUEvRW5CLEFBNkN1QixNQWhCNkIsVUFtRHBELDZCQWJ3QixZQXJDRCxxQkFnQkMsQ0FmSSwyQkFDQyw0QkFDWCxVQW1DbEIsT0FsQ2MsMEJBYU0sZ0RBWkcsNkNBYVgsV0FFQyxZQUNiLFVBZndCLG1HQUNKLDZGQUNILGdCQUNFLGtCQUNuQiIsImZpbGUiOiIvVXNlcnMvc2Vhbmx5b25zL1NpdGVzL3BvcnRmb2xpb3YyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRUaW1lciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgRmFVc2VycywgRmFUb29scywgRmFHbGFzc2VzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTXlIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgVGVjaG5vbG9naWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llc1wiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEdsb2JhbFN0eWxlIC8+XG5cdFx0XHQ8TXlIZWFkZXIgLz5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8VGVjaG5vbG9naWVzIC8+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVkLXByb2plY3RcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0PGgyPkZlYXR1cmVkIFByb2plY3Q8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSBzaG9ydFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDQ+UHJvamVjdCBUaXRsZTwvaDQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRQcmFlc2VudCBvcm5hcmUgb3JuYXJlIHRlbGx1cywgZXQgcG9ydGEgYXJjdSBjb25zZWN0ZXR1ciBhdC4gTW9yYmlcblx0XHRcdFx0XHRcdFx0c2VkIGFudGUgb2Rpby4gVml2YW11cyB0b3J0b3Igc2VtLCBmZXVnaWF0IHZpdGFlIHRpbmNpZHVudCBzZWQsXG5cdFx0XHRcdFx0XHRcdHNvbGxpY2l0dWRpbiB1dCBleC4gUXVpc3F1ZSBwaGFyZXRyYSBtaSBxdWlzIHNlbSBkYXBpYnVzLCBlZ2V0XG5cdFx0XHRcdFx0XHRcdHNhZ2l0dGlzIHRvcnRvciBmYWNpbGlzaXMuIEZ1c2NlIHBlbGxlbnRlc3F1ZSB2ZWhpY3VsYSBlcm9zLCB2ZWxcblx0XHRcdFx0XHRcdFx0ZmV1Z2lhdCBhbnRlIHNvZGFsZXMgZWdldC4gUGVsbGVudGVzcXVlIGZyaW5naWxsYSBtYXR0aXMgdmVsaXQgbmVjXG5cdFx0XHRcdFx0XHRcdGZlcm1lbnR1bS4gTWFlY2VuYXMgbWF4aW11cyBlbmltIHZpdGFlIGxhY3VzIHVsbGFtY29ycGVyXG5cdFx0XHRcdFx0XHRcdHBvcnR0aXRvci4gU2VkIGEgbmlzbCBzY2VsZXJpc3F1ZSwgdmVzdGlidWx1bSBmZWxpcyBhYywgdGVtcG9yXG5cdFx0XHRcdFx0XHRcdGxlY3R1cy4gTnVsbGEgb3JjaSBhbnRlLCBkaWduaXNzaW0gcXVpcyBtYWduYSB2ZWwsIG1vbGVzdGllXG5cdFx0XHRcdFx0XHRcdHVsbGFtY29ycGVyIHRvcnRvci4gRG9uZWMgaWQgbnVuYyBwbGFjZXJhdCBlbmltIGdyYXZpZGEgY3Vyc3VzLlxuXHRcdFx0XHRcdFx0XHREb25lYyBmcmluZ2lsbGEgdGluY2lkdW50IG1hdXJpcyBsb2JvcnRpcyBwb3J0YS4gQWxpcXVhbSBjb25zZXF1YXRcblx0XHRcdFx0XHRcdFx0dWx0cmljaWVzIHRlbXBvci4gTnVsbGFtIGluIGxvYm9ydGlzIGZlbGlzLCBub24gdm9sdXRwYXQgcmlzdXMuXG5cdFx0XHRcdFx0XHRcdE51bGwgZXVpc21vZCB0dXJwaXMgdXQgaXBzdW0gbW9sbGlzLCBxdWlzIGxhY2luaWEgbmlzbCBtYXR0aXMuXG5cdFx0XHRcdFx0XHRcdE51bGxhbSBldSBmYWNpbGlzaXNcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJleHBlcmllbmNlXCI+XG5cdFx0XHRcdFx0PGgyPlNraWxscyAmIEV4cGVyaWVuY2U8L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwLWl0ZW1zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4cC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxNZFRpbWVyIC8+XG5cdFx0XHRcdFx0XHRcdDxoMz5Qcm9qZWN0IE1hbmFnZW1lbnQ8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwPmNvbWluZyBzb29uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4cC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxGYVVzZXJzIC8+XG5cdFx0XHRcdFx0XHRcdDxoMz5UZWFtLUJhc2VkIFdvcmtmbG93PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGlueVwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxwPmNvbWluZyBzb29uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4cC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxGYVRvb2xzIC8+XG5cdFx0XHRcdFx0XHRcdDxoMz5TaXRlIE1haW50ZW5hbmNlPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGlueVwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxwPmNvbWluZyBzb29uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4cC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxGYUdsYXNzZXMgLz5cblx0XHRcdFx0XHRcdFx0PGgzPkF0dGVudGlvbiB0byBEZXRhaWw8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0aW55XCI+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHA+Y29taW5nIHNvb248L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdFx0PGZvb3Rlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXItaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxoMj5HZXQgaW4gdG91Y2ghPC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmV4cGVyaWVuY2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYig1MSwgNTEsIDUxKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0XHRcdFx0XHQwZGVnLFxuXHRcdFx0XHRcdFx0cmdiYSg1MSwgNTEsIDUxLCAxKSAxMCUsXG5cdFx0XHRcdFx0XHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwJVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnVuZGVybGluZSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zaG9ydCB7XG5cdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYWluIHtcblx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZlYXR1cmVkLXByb2plY3Qge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mZWF0dXJlZC1wcm9qZWN0ID4gcCB7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogNTBweCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mZWF0dXJlZCB7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtyZXF1aXJlKFwiLi4vYXNzZXRzL2ltZy9wcm9qZWN0LnBuZ1wiKX0pO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0bWluLWhlaWdodDogNDAwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogNTBweCA1JTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQub3ZlcmxheSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHBlcmllbmNlIHtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwZXJpZW5jZSA+IGgyIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI1cHggMTAlO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZXhwLWl0ZW1zIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnRpbnkge1xuXHRcdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cC1pdGVtIHtcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAyNXB4IGF1dG87XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDE1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cC1pdGVtIDpnbG9iYWwoc3ZnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvb3RlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0cGFkZGluZzogNTBweCAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvb3RlciA+IC5mb290ZXItaGVhZGluZyA+IGgyIHtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvb3RlciA+IC5mb290ZXItaGVhZGluZyA+IC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cblx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvb3RlciA+IC5mb290ZXItaGVhZGluZyB7XG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMCU7XG5cdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTAlO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3JtID4gZm9vdGVyID4gLnVuZGVybGluZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8Lz5cblx0KTtcbn1cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTogXCJMb2JzdGVyXCI7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCI7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXX0= */
/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/pages/index.js */`));
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

module.exports = __webpack_require__(/*! /Users/seanlyons/Sites/portfoliov2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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