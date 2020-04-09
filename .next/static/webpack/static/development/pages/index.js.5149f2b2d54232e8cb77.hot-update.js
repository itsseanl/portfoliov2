webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "/root/sites/portfoliov2/components/ContactForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ContactForm = function ContactForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  }),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: '',
    message: ''
  }),
      inputs = _useState2[0],
      setInputs = _useState2[1];

  var handleResponse = function handleResponse(status, msg) {
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

  var handleOnChange = function handleOnChange(e) {
    e.persist();
    setInputs(function (prev) {
      return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value));
    });
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  var handleOnSubmit = function handleOnSubmit(e) {
    var res, text;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleOnSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setStatus(function (prevStatus) {
              return _objectSpread({}, prevStatus, {
                submitting: true
              });
            });
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('/api/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(inputs)
            }));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

          case 7:
            text = _context.sent;
            handleResponse(res.status, text);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleOnSubmit,
    className: "jsx-1236726730",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1236726730",
    __self: _this,
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
    className: "jsx-1236726730",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-1236726730",
    __self: _this,
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
    className: "jsx-1236726730",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-1236726730",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-1236726730" + " " + "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-1236726730" + " " + "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1236726730",
    __self: _this
  }, "label.jsx-1236726730{font-family\"lobster\",sans-serif;}button.jsx-1236726730{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-1236726730{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-1236726730,textarea.jsx-1236726730{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-1236726730{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZlLEFBR3NDLEFBR2IsQUFTSCxBQVNMLEFBUUUsV0FQQSxFQVFkLEdBakJjLEdBVG9CLEtBbUJwQixRQXRCZCxLQXVCZ0IsY0FuQkEsQ0FvQkgsWUFDQSxFQXBCSSxVQXFCakIsTUFwQlksUUFPVyxHQU5ULGFBQ0EsYUFDZCxpREFLd0IsbUdBQ0osNkZBQ0YsaUJBQ2xCIiwiZmlsZSI6Ii9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XG5cblx0Y29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKHtcbiAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfVxuICB9KVxuXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIG1lc3NhZ2U6ICcnXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoc3RhdHVzLCBtc2cpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIHN1Ym1pdHRlZDogdHJ1ZSxcbiAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG1zZyB9XG4gICAgICB9KVxuICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgaW5mbzogeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2cgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IGUgPT4ge1xuICAgIGUucGVyc2lzdCgpXG4gICAgc2V0SW5wdXRzKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pKVxuICAgIHNldFN0YXR1cyh7XG4gICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRTdGF0dXMocHJldlN0YXR1cyA9PiAoeyAuLi5wcmV2U3RhdHVzLCBzdWJtaXR0aW5nOiB0cnVlIH0pKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NlbmQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0cylcbiAgICB9KVxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpXG4gICAgaGFuZGxlUmVzcG9uc2UocmVzLnN0YXR1cywgdGV4dClcbiAgfVxuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdGF0dXMuc3VibWl0dGluZ30+XG4gICAgICAgICAgeyFzdGF0dXMuc3VibWl0dGluZ1xuICAgICAgICAgICAgPyAhc3RhdHVzLnN1Ym1pdHRlZFxuICAgICAgICAgICAgICA/ICdTdWJtaXQnXG4gICAgICAgICAgICAgIDogJ1N1Ym1pdHRlZCdcbiAgICAgICAgICAgIDogJ1N1Ym1pdHRpbmcuLi4nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzdGF0dXMuaW5mby5lcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5FcnJvcjoge3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG4gICAgICB7IXN0YXR1cy5pbmZvLmVycm9yICYmIHN0YXR1cy5pbmZvLm1zZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPntzdGF0dXMuaW5mby5tc2d9PC9kaXY+XG4gICAgICApfVxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRsYWJlbHtcblx0XHRcdFx0XHRmb250LWZhbWlseVwibG9ic3RlclwiLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDE1cHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dCxcblx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0cmVzaXplOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXX0= */\n/*@ sourceURL=/root/sites/portfoliov2/components/ContactForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=index.js.5149f2b2d54232e8cb77.hot-update.js.map