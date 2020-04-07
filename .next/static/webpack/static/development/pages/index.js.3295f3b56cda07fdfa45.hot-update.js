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


var _jsxFileName = "/root/sites/portfoliov2/components/ContactForm.js";

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
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleOnSubmit,
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
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
    __self: this
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
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
    __self: this
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-706162266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-706162266" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-706162266" + " " + "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "706162266",
    __self: this
  }, "button.jsx-706162266{background:#fffff0;font-family:\"Ubuntu\",sans-serif;font-size:18px;font-weight:600;width:100%;padding:15px;margin:5px 0;}form.jsx-706162266{background:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px auto;}input.jsx-706162266,textarea.jsx-706162266{width:100%;margin:5px 0;padding:15px;font-size:16px;resize:none;border:none;}textarea.jsx-706162266{height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3NpdGVzL3BvcnRmb2xpb3YyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZlLEFBR3lCLEFBU0gsQUFTTCxBQVFFLFdBUEEsRUFRZCxHQWpCYyxHQVRvQixLQW1CcEIsYUFDRSxjQW5CQSxDQW9CSCxZQUNBLEVBcEJJLFVBcUJqQixNQXBCWSxRQU9XLEdBTlQsYUFDQSxhQUNkLGlEQUt3QixtR0FDSiw2RkFDRixpQkFDbEIiLCJmaWxlIjoiL3Jvb3Qvc2l0ZXMvcG9ydGZvbGlvdjIvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcblxuXHRjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe1xuICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgbWVzc2FnZTogJydcbiAgfSlcblxuICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChzdGF0dXMsIG1zZykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbXNnIH1cbiAgICAgIH0pXG4gICAgICBzZXRJbnB1dHMoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBpbmZvOiB7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gZSA9PiB7XG4gICAgZS5wZXJzaXN0KClcbiAgICBzZXRJbnB1dHMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSkpXG4gICAgc2V0U3RhdHVzKHtcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFN0YXR1cyhwcmV2U3RhdHVzID0+ICh7IC4uLnByZXZTdGF0dXMsIHN1Ym1pdHRpbmc6IHRydWUgfSkpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXRzKVxuICAgIH0pXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KClcbiAgICBoYW5kbGVSZXNwb25zZShyZXMuc3RhdHVzLCB0ZXh0KVxuICB9XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMubWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N0YXR1cy5zdWJtaXR0aW5nfT5cbiAgICAgICAgICB7IXN0YXR1cy5zdWJtaXR0aW5nXG4gICAgICAgICAgICA/ICFzdGF0dXMuc3VibWl0dGVkXG4gICAgICAgICAgICAgID8gJ1N1Ym1pdCdcbiAgICAgICAgICAgICAgOiAnU3VibWl0dGVkJ1xuICAgICAgICAgICAgOiAnU3VibWl0dGluZy4uLid9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3N0YXR1cy5pbmZvLmVycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVycm9yOiB7c3RhdHVzLmluZm8ubXNnfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshc3RhdHVzLmluZm8uZXJyb3IgJiYgc3RhdHVzLmluZm8ubXNnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmMDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDE1cHggYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dCxcblx0XHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0cmVzaXplOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXX0= */\n/*@ sourceURL=/root/sites/portfoliov2/components/ContactForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./node_modules/deepmerge/dist/es.js":
false,

/***/ "./node_modules/formik/dist/formik.esm.js":
false,

/***/ "./node_modules/lodash-es/_DataView.js":
false,

/***/ "./node_modules/lodash-es/_Hash.js":
false,

/***/ "./node_modules/lodash-es/_ListCache.js":
false,

/***/ "./node_modules/lodash-es/_Map.js":
false,

/***/ "./node_modules/lodash-es/_MapCache.js":
false,

/***/ "./node_modules/lodash-es/_Promise.js":
false,

/***/ "./node_modules/lodash-es/_Set.js":
false,

/***/ "./node_modules/lodash-es/_Stack.js":
false,

/***/ "./node_modules/lodash-es/_Symbol.js":
false,

/***/ "./node_modules/lodash-es/_Uint8Array.js":
false,

/***/ "./node_modules/lodash-es/_WeakMap.js":
false,

/***/ "./node_modules/lodash-es/_arrayEach.js":
false,

/***/ "./node_modules/lodash-es/_arrayFilter.js":
false,

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash-es/_arrayMap.js":
false,

/***/ "./node_modules/lodash-es/_arrayPush.js":
false,

/***/ "./node_modules/lodash-es/_assignValue.js":
false,

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash-es/_baseAssign.js":
false,

/***/ "./node_modules/lodash-es/_baseAssignIn.js":
false,

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash-es/_baseClone.js":
false,

/***/ "./node_modules/lodash-es/_baseCreate.js":
false,

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash-es/_baseGetTag.js":
false,

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash-es/_baseIsMap.js":
false,

/***/ "./node_modules/lodash-es/_baseIsNative.js":
false,

/***/ "./node_modules/lodash-es/_baseIsSet.js":
false,

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash-es/_baseKeys.js":
false,

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
false,

/***/ "./node_modules/lodash-es/_baseTimes.js":
false,

/***/ "./node_modules/lodash-es/_baseToString.js":
false,

/***/ "./node_modules/lodash-es/_baseUnary.js":
false,

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
false,

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
false,

/***/ "./node_modules/lodash-es/_cloneDataView.js":
false,

/***/ "./node_modules/lodash-es/_cloneRegExp.js":
false,

/***/ "./node_modules/lodash-es/_cloneSymbol.js":
false,

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
false,

/***/ "./node_modules/lodash-es/_copyArray.js":
false,

/***/ "./node_modules/lodash-es/_copyObject.js":
false,

/***/ "./node_modules/lodash-es/_copySymbols.js":
false,

/***/ "./node_modules/lodash-es/_copySymbolsIn.js":
false,

/***/ "./node_modules/lodash-es/_coreJsData.js":
false,

/***/ "./node_modules/lodash-es/_defineProperty.js":
false,

/***/ "./node_modules/lodash-es/_freeGlobal.js":
false,

/***/ "./node_modules/lodash-es/_getAllKeys.js":
false,

/***/ "./node_modules/lodash-es/_getAllKeysIn.js":
false,

/***/ "./node_modules/lodash-es/_getMapData.js":
false,

/***/ "./node_modules/lodash-es/_getNative.js":
false,

/***/ "./node_modules/lodash-es/_getPrototype.js":
false,

/***/ "./node_modules/lodash-es/_getRawTag.js":
false,

/***/ "./node_modules/lodash-es/_getSymbols.js":
false,

/***/ "./node_modules/lodash-es/_getSymbolsIn.js":
false,

/***/ "./node_modules/lodash-es/_getTag.js":
false,

/***/ "./node_modules/lodash-es/_getValue.js":
false,

/***/ "./node_modules/lodash-es/_hashClear.js":
false,

/***/ "./node_modules/lodash-es/_hashDelete.js":
false,

/***/ "./node_modules/lodash-es/_hashGet.js":
false,

/***/ "./node_modules/lodash-es/_hashHas.js":
false,

/***/ "./node_modules/lodash-es/_hashSet.js":
false,

/***/ "./node_modules/lodash-es/_initCloneArray.js":
false,

/***/ "./node_modules/lodash-es/_initCloneByTag.js":
false,

/***/ "./node_modules/lodash-es/_initCloneObject.js":
false,

/***/ "./node_modules/lodash-es/_isIndex.js":
false,

/***/ "./node_modules/lodash-es/_isKeyable.js":
false,

/***/ "./node_modules/lodash-es/_isMasked.js":
false,

/***/ "./node_modules/lodash-es/_isPrototype.js":
false,

/***/ "./node_modules/lodash-es/_listCacheClear.js":
false,

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash-es/_listCacheGet.js":
false,

/***/ "./node_modules/lodash-es/_listCacheHas.js":
false,

/***/ "./node_modules/lodash-es/_listCacheSet.js":
false,

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash-es/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash-es/_nativeCreate.js":
false,

/***/ "./node_modules/lodash-es/_nativeKeys.js":
false,

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
false,

/***/ "./node_modules/lodash-es/_nodeUtil.js":
false,

/***/ "./node_modules/lodash-es/_objectToString.js":
false,

/***/ "./node_modules/lodash-es/_overArg.js":
false,

/***/ "./node_modules/lodash-es/_root.js":
false,

/***/ "./node_modules/lodash-es/_stackClear.js":
false,

/***/ "./node_modules/lodash-es/_stackDelete.js":
false,

/***/ "./node_modules/lodash-es/_stackGet.js":
false,

/***/ "./node_modules/lodash-es/_stackHas.js":
false,

/***/ "./node_modules/lodash-es/_stackSet.js":
false,

/***/ "./node_modules/lodash-es/_stringToPath.js":
false,

/***/ "./node_modules/lodash-es/_toKey.js":
false,

/***/ "./node_modules/lodash-es/_toSource.js":
false,

/***/ "./node_modules/lodash-es/clone.js":
false,

/***/ "./node_modules/lodash-es/cloneDeep.js":
false,

/***/ "./node_modules/lodash-es/eq.js":
false,

/***/ "./node_modules/lodash-es/isArguments.js":
false,

/***/ "./node_modules/lodash-es/isArray.js":
false,

/***/ "./node_modules/lodash-es/isArrayLike.js":
false,

/***/ "./node_modules/lodash-es/isBuffer.js":
false,

/***/ "./node_modules/lodash-es/isFunction.js":
false,

/***/ "./node_modules/lodash-es/isLength.js":
false,

/***/ "./node_modules/lodash-es/isMap.js":
false,

/***/ "./node_modules/lodash-es/isObject.js":
false,

/***/ "./node_modules/lodash-es/isObjectLike.js":
false,

/***/ "./node_modules/lodash-es/isPlainObject.js":
false,

/***/ "./node_modules/lodash-es/isSet.js":
false,

/***/ "./node_modules/lodash-es/isSymbol.js":
false,

/***/ "./node_modules/lodash-es/isTypedArray.js":
false,

/***/ "./node_modules/lodash-es/keys.js":
false,

/***/ "./node_modules/lodash-es/keysIn.js":
false,

/***/ "./node_modules/lodash-es/memoize.js":
false,

/***/ "./node_modules/lodash-es/stubArray.js":
false,

/***/ "./node_modules/lodash-es/stubFalse.js":
false,

/***/ "./node_modules/lodash-es/toPath.js":
false,

/***/ "./node_modules/lodash-es/toString.js":
false,

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false

})
//# sourceMappingURL=index.js.3295f3b56cda07fdfa45.hot-update.js.map