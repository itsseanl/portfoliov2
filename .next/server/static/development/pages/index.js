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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/seanlyons/Sites/portfoliov2/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_Technologies__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("section", {
    className: "jsx-1077328083" + " " + "featured-project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1077328083" + " " + "featured",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1077328083" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Featured Project"), __jsx("div", {
    className: "jsx-1077328083" + " " + "underline short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Project Title")), __jsx("p", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Praesent ornare ornare tellus, et porta arcu consectetur at. Morbi sed ante odio. Vivamus tortor sem, feugiat vitae tincidunt sed, sollicitudin ut ex. Quisque pharetra mi quis sem dapibus, eget sagittis tortor facilisis. Fusce pellentesque vehicula eros, vel feugiat ante sodales eget. Pellentesque fringilla mattis velit nec fermentum. Maecenas maximus enim vitae lacus ullamcorper porttitor. Sed a nisl scelerisque, vestibulum felis ac, tempor lectus. Nulla orci ante, dignissim quis magna vel, molestie ullamcorper tortor. Donec id nunc placerat enim gravida cursus. Donec fringilla tincidunt mauris lobortis porta. Aliquam consequat ultricies tempor. Nullam in lobortis felis, non volutpat risus. Null euismod turpis ut ipsum mollis, quis lacinia nisl mattis. Nullam eu facilisis"))), __jsx("section", {
    className: "jsx-1077328083" + " " + "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Skills & Experience"), __jsx("div", {
    className: "jsx-1077328083" + " " + "exp-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1077328083" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdTimer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Project Management"), __jsx("div", {
    className: "jsx-1077328083" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "coming soon")), __jsx("div", {
    className: "jsx-1077328083" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsers"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Team-Based Workflow"), __jsx("div", {
    className: "jsx-1077328083" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "coming soon")), __jsx("div", {
    className: "jsx-1077328083" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTools"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Site Maintenance"), __jsx("div", {
    className: "jsx-1077328083" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "coming soon")), __jsx("div", {
    className: "jsx-1077328083" + " " + "exp-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGlasses"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Attention to Detail"), __jsx("div", {
    className: "jsx-1077328083" + " " + "underline tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "coming soon"))))), __jsx("footer", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1077328083" + " " + "footer-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Get in touch!"), __jsx("div", {
    className: "jsx-1077328083" + " " + "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("form", {
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("input", {
    placeholder: "name",
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("input", {
    placeholder: "email",
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "Message...",
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    value: "submit",
    className: "jsx-1077328083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1077328083",
    __self: this
  }, `.experience{background:rgb(51,51,51);background:linear-gradient( 0deg, rgba(51,51,51,1) 10%, rgba(255,255,255,1) 10% );}.underline{height:4px;background:#333;width:60%;}.short{width:40%;}main{z-index:1;background:#fff;}.featured-project{width:100%;left:0;right:0;margin:auto;}.featured-project>p{width:90%;left:0;right:0;margin:50px auto;}.featured{box-shadow:inset 0px 2px 12px 2px rgba(0,0,0,0.3);background:rgba(255,255,255,0.8);background-blend-mode:lighten;background-image:url(${__webpack_require__(/*! ../assets/img/project.png */ "./assets/img/project.png")});background-size:cover;background-position:center;background-repeat:no-repeat;min-height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 5%;text-align:center;}.overlay{background:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:auto;}.experience>h2{width:100%;left:0;right:0;padding:25px 10%;position:-webkit-sticky;position:sticky;top:0;background:#fff;}.exp-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.tiny{width:20%;}.exp-item{width:90%;left:0;right:0;margin:25px auto;box-shadow:0px 2px 12px 2px rgba(0,0,0,0.3);background:#fffff0;padding:25px 15px;}.exp-item svg{font-size:28px;}footer{background:#333;margin-top:-20px;}footer>.footer-heading>h2{color:#fff;background:#333;}footer>.footer-heading>.underline{background:#fff;width:60%;}footer>.footer-heading{padding-left:10%;padding-right:10%;position:relative;color:#fff !important;background:#333;}footer>form{background:#333;min-height:1050px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer>.underline{background:#fff;position:relative;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWFubHlvbnMvU2l0ZXMvcG9ydGZvbGlvdjIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZzQixBQUdpQyxBQVFoQixBQUtELEFBR0EsQUFJQyxBQU1ELEFBTTJDLEFBaUJqQixBQVl6QixBQVVFLEFBS0gsQUFHQSxBQVNLLEFBR0MsQUFJTCxBQUlLLEFBS0MsQUFRRCxBQVFBLFVBMUdqQixBQUdpQixBQVVULEFBa0RSLEFBR1EsQ0F2RVMsQUFZVCxBQXlDQSxBQWtDUyxJQVBqQixDQUdrQixBQVNQLEFBWVEsQUFRQSxDQTdGVixBQXFEQSxBQXdCVSxDQW5GVixBQXlDQSxPQTFEUCxBQXdCZ0IsQUFxREEsQ0FoRWxCLEFBS2EsQUF5Q0ssQUFzQ2xCLENBNUZXLEFBdUZYLE1BL0NjLEFBMkNkLENBcUJjLEFBUWQsQ0FoQm1CLEVBL0ZuQixDQWFBLElBTUEsQUFxRGdELENBbEIvQixPQWhDb0IsR0EwRWQscUJBbkNBLENBb0NOLFFBMUVjLEFBZ0N4QixHQWtCYSxHQWpCSCxFQTBDakIsY0F6Q0EsQUFpQm1CLEVBL0VuQixBQTZDdUIsQ0FnRUEsS0FoRjZCLFVBbURwRCw2QkFid0IsWUFyQ0QscUJBZ0JDLENBZkksQUErRUosMkJBOUVLLDRCQUNYLFVBbUNsQixPQWxDYywwQkFhTSxDQWdFQSwrQ0E1RUcsNkNBYVgsQ0FnRVosVUE5RGEsWUFDYixVQWZ3QixtR0FDSiw2RkFDSCxnQkFDRSxrQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3NlYW5seW9ucy9TaXRlcy9wb3J0Zm9saW92Mi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1kVGltZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IEZhVXNlcnMsIEZhVG9vbHMsIEZhR2xhc3NlcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IE15SGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UZWNobm9sb2dpZXNcIjtcbmltcG9ydCB7IHN0eWxlZCwgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0PE15SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PFRlY2hub2xvZ2llcyAvPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZC1wcm9qZWN0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5GZWF0dXJlZCBQcm9qZWN0PC9oMj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgc2hvcnRcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGg0PlByb2plY3QgVGl0bGU8L2g0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0UHJhZXNlbnQgb3JuYXJlIG9ybmFyZSB0ZWxsdXMsIGV0IHBvcnRhIGFyY3UgY29uc2VjdGV0dXIgYXQuIE1vcmJpXG5cdFx0XHRcdFx0XHRcdHNlZCBhbnRlIG9kaW8uIFZpdmFtdXMgdG9ydG9yIHNlbSwgZmV1Z2lhdCB2aXRhZSB0aW5jaWR1bnQgc2VkLFxuXHRcdFx0XHRcdFx0XHRzb2xsaWNpdHVkaW4gdXQgZXguIFF1aXNxdWUgcGhhcmV0cmEgbWkgcXVpcyBzZW0gZGFwaWJ1cywgZWdldFxuXHRcdFx0XHRcdFx0XHRzYWdpdHRpcyB0b3J0b3IgZmFjaWxpc2lzLiBGdXNjZSBwZWxsZW50ZXNxdWUgdmVoaWN1bGEgZXJvcywgdmVsXG5cdFx0XHRcdFx0XHRcdGZldWdpYXQgYW50ZSBzb2RhbGVzIGVnZXQuIFBlbGxlbnRlc3F1ZSBmcmluZ2lsbGEgbWF0dGlzIHZlbGl0IG5lY1xuXHRcdFx0XHRcdFx0XHRmZXJtZW50dW0uIE1hZWNlbmFzIG1heGltdXMgZW5pbSB2aXRhZSBsYWN1cyB1bGxhbWNvcnBlclxuXHRcdFx0XHRcdFx0XHRwb3J0dGl0b3IuIFNlZCBhIG5pc2wgc2NlbGVyaXNxdWUsIHZlc3RpYnVsdW0gZmVsaXMgYWMsIHRlbXBvclxuXHRcdFx0XHRcdFx0XHRsZWN0dXMuIE51bGxhIG9yY2kgYW50ZSwgZGlnbmlzc2ltIHF1aXMgbWFnbmEgdmVsLCBtb2xlc3RpZVxuXHRcdFx0XHRcdFx0XHR1bGxhbWNvcnBlciB0b3J0b3IuIERvbmVjIGlkIG51bmMgcGxhY2VyYXQgZW5pbSBncmF2aWRhIGN1cnN1cy5cblx0XHRcdFx0XHRcdFx0RG9uZWMgZnJpbmdpbGxhIHRpbmNpZHVudCBtYXVyaXMgbG9ib3J0aXMgcG9ydGEuIEFsaXF1YW0gY29uc2VxdWF0XG5cdFx0XHRcdFx0XHRcdHVsdHJpY2llcyB0ZW1wb3IuIE51bGxhbSBpbiBsb2JvcnRpcyBmZWxpcywgbm9uIHZvbHV0cGF0IHJpc3VzLlxuXHRcdFx0XHRcdFx0XHROdWxsIGV1aXNtb2QgdHVycGlzIHV0IGlwc3VtIG1vbGxpcywgcXVpcyBsYWNpbmlhIG5pc2wgbWF0dGlzLlxuXHRcdFx0XHRcdFx0XHROdWxsYW0gZXUgZmFjaWxpc2lzXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwZXJpZW5jZVwiPlxuXHRcdFx0XHRcdDxoMj5Ta2lsbHMgJiBFeHBlcmllbmNlPC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4cC1pdGVtc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8TWRUaW1lciAvPlxuXHRcdFx0XHRcdFx0XHQ8aDM+UHJvamVjdCBNYW5hZ2VtZW50PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGlueVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD5jb21pbmcgc29vbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8RmFVc2VycyAvPlxuXHRcdFx0XHRcdFx0XHQ8aDM+VGVhbS1CYXNlZCBXb3JrZmxvdzwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8cD5jb21pbmcgc29vbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8RmFUb29scyAvPlxuXHRcdFx0XHRcdFx0XHQ8aDM+U2l0ZSBNYWludGVuYW5jZTwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRpbnlcIj48L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8cD5jb21pbmcgc29vbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleHAtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8RmFHbGFzc2VzIC8+XG5cdFx0XHRcdFx0XHRcdDxoMz5BdHRlbnRpb24gdG8gRGV0YWlsPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGlueVwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxwPmNvbWluZyBzb29uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxmb290ZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWhlYWRpbmdcIj5cblx0XHRcdFx0XHQ8aDI+R2V0IGluIHRvdWNoITwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiPjwvaW5wdXQ+XG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiZW1haWxcIj48L2lucHV0PlxuXHRcdFx0XHRcdDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UuLi5cIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIj48L2lucHV0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5leHBlcmllbmNlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoNTEsIDUxLCA1MSk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0XHRcdFx0MGRlZyxcblx0XHRcdFx0XHRcdHJnYmEoNTEsIDUxLCA1MSwgMSkgMTAlLFxuXHRcdFx0XHRcdFx0cmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMCVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuc2hvcnQge1xuXHRcdFx0XHRcdHdpZHRoOiA0MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWFpbiB7XG5cdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mZWF0dXJlZC1wcm9qZWN0IHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuZmVhdHVyZWQtcHJvamVjdCA+IHAge1xuXHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRtYXJnaW46IDUwcHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuZmVhdHVyZWQge1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cmVxdWlyZShcIi4uL2Fzc2V0cy9pbWcvcHJvamVjdC5wbmdcIil9KTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDUwcHggNSU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm92ZXJsYXkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHQuZXhwZXJpZW5jZSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmV4cGVyaWVuY2UgPiBoMiB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDEwJTtcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmV4cC1pdGVtcyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50aW55IHtcblx0XHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHAtaXRlbSB7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMjVweCBhdXRvO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdFx0cGFkZGluZzogMjVweCAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5leHAtaXRlbSA6Z2xvYmFsKHN2Zykge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb290ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogLTIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyID4gLmZvb3Rlci1oZWFkaW5nID4gaDIge1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyID4gLmZvb3Rlci1oZWFkaW5nID4gLnVuZGVybGluZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblxuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9vdGVyID4gLmZvb3Rlci1oZWFkaW5nIHtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwJTtcblx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMCU7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvb3RlciA+IGZvcm0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdFx0bWluLWhlaWdodDogMTA1MHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvb3RlciA+IC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59XG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmMDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiO1xuICB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19 */
/*@ sourceURL=/Users/seanlyons/Sites/portfoliov2/pages/index.js */`));
}

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"]`

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