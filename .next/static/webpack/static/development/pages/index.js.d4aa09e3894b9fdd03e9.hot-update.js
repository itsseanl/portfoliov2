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
    className: "jsx-115583177",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-115583177",
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
    className: "jsx-115583177",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-115583177",
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
    className: "jsx-115583177",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-115583177",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-115583177" + " " + "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-115583177" + " " + "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "115583177",
    __self: _this
  }, "label.jsx-115583177{font-family:\"Lobster\",sans-serif;font-size:18px;text-align:left;}button.jsx-115583177{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-115583177{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-115583177,textarea.jsx-115583177{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-115583177{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZlLEFBR3VDLEFBS2QsQUFTSCxBQVNMLEFBUUUsV0FQQSxFQVFkLEdBakJjLEdBVG9CLEtBbUJwQixTQXhCQyxJQXlCQyxXQXhCQSxHQUtBLENBb0JILFlBeEJiLEFBeUJhLEVBcEJJLFVBcUJqQixNQXBCWSxRQU9XLEdBTlQsYUFDQSxhQUNkLGlEQUt3QixtR0FDSiw2RkFDRixpQkFDbEIiLCJmaWxlIjoiL3Jvb3Qvc2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcblxuXHRjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe1xuICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgbWVzc2FnZTogJydcbiAgfSlcblxuICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChzdGF0dXMsIG1zZykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbXNnIH1cbiAgICAgIH0pXG4gICAgICBzZXRJbnB1dHMoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBpbmZvOiB7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gZSA9PiB7XG4gICAgZS5wZXJzaXN0KClcbiAgICBzZXRJbnB1dHMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSkpXG4gICAgc2V0U3RhdHVzKHtcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFN0YXR1cyhwcmV2U3RhdHVzID0+ICh7IC4uLnByZXZTdGF0dXMsIHN1Ym1pdHRpbmc6IHRydWUgfSkpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXRzKVxuICAgIH0pXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KClcbiAgICBoYW5kbGVSZXNwb25zZShyZXMuc3RhdHVzLCB0ZXh0KVxuICB9XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMubWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N0YXR1cy5zdWJtaXR0aW5nfT5cbiAgICAgICAgICB7IXN0YXR1cy5zdWJtaXR0aW5nXG4gICAgICAgICAgICA/ICFzdGF0dXMuc3VibWl0dGVkXG4gICAgICAgICAgICAgID8gJ1N1Ym1pdCdcbiAgICAgICAgICAgICAgOiAnU3VibWl0dGVkJ1xuICAgICAgICAgICAgOiAnU3VibWl0dGluZy4uLid9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3N0YXR1cy5pbmZvLmVycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVycm9yOiB7c3RhdHVzLmluZm8ubXNnfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshc3RhdHVzLmluZm8uZXJyb3IgJiYgc3RhdHVzLmluZm8ubXNnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGxhYmVse1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OlwiTG9ic3RlclwiLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZToxOHB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246bGVmdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRtYXJnaW46IDVweCAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcm0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luOiAxNXB4IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5wdXQsXG5cdFx0XHRcdHRleHRhcmVhIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRtYXJnaW46IDVweCAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdHJlc2l6ZTogbm9uZTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdGhlaWdodDogMjAwcHg7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIl19 */\n/*@ sourceURL=/root/sites/portfoliov2/components/ContactForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=index.js.d4aa09e3894b9fdd03e9.hot-update.js.map