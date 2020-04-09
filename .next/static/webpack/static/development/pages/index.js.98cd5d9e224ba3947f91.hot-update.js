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
    className: "jsx-31746794",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-31746794",
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
    className: "jsx-31746794",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-31746794",
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
    className: "jsx-31746794",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-31746794",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-31746794" + " " + "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-31746794" + " " + "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "31746794",
    __self: _this
  }, "label.jsx-31746794{font-family:\"Lobster\",sans-serif;font-size:18px;text-align:left;width:100%;}button.jsx-31746794{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-31746794{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-31746794,textarea.jsx-31746794{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-31746794{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZlLEFBR3VDLEFBTWQsQUFTSCxBQVNMLEFBUUUsV0FQQSxFQVFkLEdBakJjLEdBVG9CLEtBbUJwQixTQXpCQyxJQTBCQyxXQXpCQSxHQU1BLENBb0JILFlBekJGLEFBMEJFLEVBcEJJLFNBTGpCLENBMEJBLE1BcEJZLFFBT1csR0FOVCxhQUNBLGFBQ2QsaURBS3dCLG1HQUNKLDZGQUNGLGlCQUNsQiIsImZpbGUiOiIvcm9vdC9zaXRlcy9wb3J0Zm9saW92Mi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xuXG5cdGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSh7XG4gICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cbiAgfSlcblxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9KVxuXG4gIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHN0YXR1cywgbXNnKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBtc2cgfVxuICAgICAgfSlcbiAgICAgIHNldElucHV0cyh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIGluZm86IHsgZXJyb3I6IHRydWUsIG1zZzogbXNnIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBlID0+IHtcbiAgICBlLnBlcnNpc3QoKVxuICAgIHNldElucHV0cyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KSlcbiAgICBzZXRTdGF0dXMoe1xuICAgICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U3RhdHVzKHByZXZTdGF0dXMgPT4gKHsgLi4ucHJldlN0YXR1cywgc3VibWl0dGluZzogdHJ1ZSB9KSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZW5kJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dHMpXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKVxuICAgIGhhbmRsZVJlc3BvbnNlKHJlcy5zdGF0dXMsIHRleHQpXG4gIH1cblx0XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3RhdHVzLnN1Ym1pdHRpbmd9PlxuICAgICAgICAgIHshc3RhdHVzLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgID8gIXN0YXR1cy5zdWJtaXR0ZWRcbiAgICAgICAgICAgICAgPyAnU3VibWl0J1xuICAgICAgICAgICAgICA6ICdTdWJtaXR0ZWQnXG4gICAgICAgICAgICA6ICdTdWJtaXR0aW5nLi4uJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7c3RhdHVzLmluZm8uZXJyb3IgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+RXJyb3I6IHtzdGF0dXMuaW5mby5tc2d9PC9kaXY+XG4gICAgICApfVxuICAgICAgeyFzdGF0dXMuaW5mby5lcnJvciAmJiBzdGF0dXMuaW5mby5tc2cgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57c3RhdHVzLmluZm8ubXNnfTwvZGl2PlxuICAgICAgKX1cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0bGFiZWx7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6XCJMb2JzdGVyXCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOjE4cHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0bWFyZ2luOiA1cHggMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3JtIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMzMzO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbjogMTVweCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlucHV0LFxuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWFyZ2luOiA1cHggMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRyZXNpemU6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRleHRhcmVhIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcbiJdfQ== */\n/*@ sourceURL=/root/sites/portfoliov2/components/ContactForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=index.js.98cd5d9e224ba3947f91.hot-update.js.map