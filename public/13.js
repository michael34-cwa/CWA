(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/modules/auth/pages/forgot/Page.js":
/*!********************************************************!*\
  !*** ./resources/js/modules/auth/pages/forgot/Page.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service */ \"./resources/js/modules/auth/service.js\");\n/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ree-validate */ \"./node_modules/ree-validate/dist/ree-validate.esm.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Form */ \"./resources/js/modules/auth/pages/forgot/components/Form.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//import libs\n\n\n\n\n\n\n // import components\n\n // initialize component\n\nvar Page =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Page, _Component);\n\n  function Page(props) {\n    var _this;\n\n    _classCallCheck(this, Page);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));\n    _this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      email: 'required|email'\n    });\n    _this.state = {\n      credentials: {\n        email: \"\"\n      },\n      successMesg: '',\n      errors: _this.validator.errors,\n      fields: _this.validator.fields\n    };\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Page, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').attr('style', 'background-color: #eee');\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').removeAttr('style');\n    } // event to handle input change\n\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(name, value) {\n      var _this2 = this;\n\n      var errors = this.validator.errors;\n      this.setState({\n        successMesg: \"\"\n      });\n      this.setState({\n        credentials: _objectSpread({}, this.state.credentials, _defineProperty({}, name, value))\n      });\n      errors.remove(name);\n      this.validator.validate(name, value).then(function () {\n        _this2.setState({\n          errors: errors\n        });\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      var credentials = this.state.credentials;\n      var errors = this.validator.errors;\n      this.validator.validateAll(credentials).then(function (success) {\n        if (success) {\n          _this3.submit(credentials);\n        } else {\n          _this3.setState({\n            errors: errors\n          });\n        }\n      });\n    }\n  }, {\n    key: \"submit\",\n    value: function submit(credentials) {\n      var _this4 = this;\n\n      this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_5__[\"forgot\"])(credentials)).then(function (res) {\n        _this4.setState({\n          successMesg: res\n        });\n      }).catch(function (_ref) {\n        var error = _ref.error,\n            statusCode = _ref.statusCode;\n        var errors = _this4.validator.errors;\n\n        if (statusCode === 401) {\n          errors.add(\"email\", error);\n        }\n\n        _this4.setState({\n          errors: errors\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // check if user is authenticated then redirect him to home page\n      if (this.props.isAuthenticated) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], {\n          to: \"/\"\n        });\n      }\n\n      var email = this.state.credentials.email;\n      var props = {\n        email: email,\n        successMesg: this.state.successMesg,\n        errors: this.state.errors,\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container login-page\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-12\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"login\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"anchor\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card has-shadow\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card-body\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"logo-area\"\n      }, \"CWA\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        class: \"login-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], props)))))))));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(Page, \"displayName\", 'ForgotPage');\n\n_defineProperty(Page, \"propTypes\", {\n  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2ZvcmdvdC9QYWdlLmpzP2RmY2EiXSwibmFtZXMiOlsiUGFnZSIsInByb3BzIiwidmFsaWRhdG9yIiwiUmVlVmFsaWRhdGUiLCJlbWFpbCIsInN0YXRlIiwiY3JlZGVudGlhbHMiLCJzdWNjZXNzTWVzZyIsImVycm9ycyIsImZpZWxkcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCIkIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbW92ZSIsInZhbGlkYXRlIiwidGhlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlQWxsIiwic3VjY2VzcyIsInN1Ym1pdCIsImRpc3BhdGNoIiwiZm9yZ290IiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1c0NvZGUiLCJhZGQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVDOztDQUdEOztJQUNNQSxJOzs7OztBQU9KLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhFQUFNQSxLQUFOO0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFJQyxvREFBSixDQUFnQjtBQUMvQkMsV0FBSyxFQUFFO0FBRHdCLEtBQWhCLENBQWpCO0FBSUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBQUU7QUFDWEYsYUFBSyxFQUFFO0FBREksT0FERjtBQUlYRyxpQkFBVyxFQUFDLEVBSkQ7QUFLWEMsWUFBTSxFQUFFLE1BQUtOLFNBQUwsQ0FBZU0sTUFMWjtBQU1YQyxZQUFNLEVBQUUsTUFBS1AsU0FBTCxDQUFlTztBQU5a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QUFFLEtBQUtBLFlBSlA7QUFLWkUsb0JBQVksRUFBRSxLQUFLQTtBQUxQLE9BQWQ7QUFRQSxhQUFRO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ047QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGFBQUssRUFBQztBQUFYLGVBREQsRUFFQztBQUFLLGFBQUssRUFBQztBQUFYLFNBQ0MsMkRBQUMsd0RBQUQsRUFBVVgsS0FBVixDQURELENBRkQsQ0FERixDQUZGLENBREYsQ0FERixDQURGLENBRE0sQ0FBUjtBQW1CRDs7OztFQXBIZ0JrQywrQzs7Z0JBQWJuQyxJLGlCQUNpQixZOztnQkFEakJBLEksZUFFZTtBQUNqQmtDLGlCQUFlLEVBQUVFLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFEZjtBQUVqQlgsVUFBUSxFQUFFUyxpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBRlIsQzs7QUFxSE50QyxtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2R1bGVzL2F1dGgvcGFnZXMvZm9yZ290L1BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBsaWJzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBmb3Jnb3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgUmVlVmFsaWRhdGUgZnJvbSAncmVlLXZhbGlkYXRlJ1xyXG4gLy8gaW1wb3J0IGNvbXBvbmVudHNcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0Zvcm0nXHJcbiBcclxuLy8gaW5pdGlhbGl6ZSBjb21wb25lbnRcclxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0ZvcmdvdFBhZ2UnXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBcclxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFJlZVZhbGlkYXRlKHsgXHJcbiAgICAgIGVtYWlsOiAncmVxdWlyZWR8ZW1haWwnLCAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3NNZXNnOicnLFxyXG4gICAgICBlcnJvcnM6IHRoaXMudmFsaWRhdG9yLmVycm9ycywgXHJcbiAgICAgIGZpZWxkczogdGhpcy52YWxpZGF0b3IuZmllbGRzXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICQoJ2JvZHknKS5hdHRyKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlJylcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQXR0cignc3R5bGUnKVxyXG4gIH1cclxuICBcclxuICAvLyBldmVudCB0byBoYW5kbGUgaW5wdXQgY2hhbmdlXHJcbiAgaGFuZGxlQ2hhbmdlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBjb25zdCB7IGVycm9ycyB9ID0gdGhpcy52YWxpZGF0b3JcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzTWVzZzogXCJcIiB9KTsgXHJcbiAgICB0aGlzLnNldFN0YXRlKHtjcmVkZW50aWFsczogeyAuLi50aGlzLnN0YXRlLmNyZWRlbnRpYWxzLCBbbmFtZV06IHZhbHVlIH19KVxyXG4gICAgZXJyb3JzLnJlbW92ZShuYW1lKVxyXG4gICAgXHJcbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgeyBjcmVkZW50aWFscyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMudmFsaWRhdG9yXHJcbiAgXHJcbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZUFsbChjcmVkZW50aWFscylcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXQoY3JlZGVudGlhbHMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIHN1Ym1pdChjcmVkZW50aWFscykge1xyXG5cclxuICAgIHRoaXMucHJvcHNcclxuICAgICAgLmRpc3BhdGNoKGZvcmdvdChjcmVkZW50aWFscykpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7ICBcclxuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VjY2Vzc01lc2c6IHJlcyB9KTsgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHsgZXJyb3IsIHN0YXR1c0NvZGUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB0aGlzLnZhbGlkYXRvcjtcclxuXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkge1xyXG4gICAgICAgICAgZXJyb3JzLmFkZChcImVtYWlsXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiBcclxuICAgIC8vIGNoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCB0aGVuIHJlZGlyZWN0IGhpbSB0byBob21lIHBhZ2VcclxuICAgIGlmICh0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHsgICBlbWFpbCAgfSA9IHRoaXMuc3RhdGUuY3JlZGVudGlhbHNcclxuICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgc3VjY2Vzc01lc2c6IHRoaXMuc3RhdGUuc3VjY2Vzc01lc2csXHJcbiAgICAgIGVycm9yczogdGhpcy5zdGF0ZS5lcnJvcnMsXHJcbiAgICAgIGhhbmRsZUNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXHJcbiAgICAgIGhhbmRsZVN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXRcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbG9naW4tcGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5jaG9yXCIvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoYXMtc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLWFyZWFcIj5DV0E8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSB7Li4ucHJvcHN9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/modules/auth/pages/forgot/Page.js\n");

/***/ }),

/***/ "./resources/js/modules/auth/pages/forgot/components/Form.js":
/*!*******************************************************************!*\
  !*** ./resources/js/modules/auth/pages/forgot/components/Form.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar displayName = 'Forget Password';\nvar propTypes = {\n  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  successMesg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar Form = function Form(_ref) {\n  var email = _ref.email,\n      successMesg = _ref.successMesg,\n      errors = _ref.errors,\n      handleChange = _ref.handleChange,\n      handleSubmit = _ref.handleSubmit;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"form\",\n    role: \"form\",\n    onSubmit: handleSubmit,\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"card-title\"\n  }, \"Forget Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\",\n    className: \"sr-only\"\n  }, \"Email\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    class: \"fa fa-envelope-o\",\n    \"aria-hidden\": \"true\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    className: \"form-control form-control-lg rounded-0 \".concat(errors.has(\"email\") && \"is-invalid\"),\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"Enter Email address\",\n    value: email || \"\",\n    onChange: function onChange(e) {\n      return handleChange(e.target.name, e.target.value);\n    },\n    required: true,\n    autoFocus: true\n  }), errors.has(\"email\") && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, errors.first(\"email\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-lg btn-primary btn-block\",\n    type: \"submit\",\n    disabled: errors.has()\n  }, \"Submit\"), successMesg ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"suess-msg text-center\"\n  }, successMesg) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    class: \"logintext\"\n  }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/admin\"\n  }, \"Login\"), \" \"));\n};\n\nForm.displayName = displayName;\nForm.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2ZvcmdvdC9jb21wb25lbnRzL0Zvcm0uanM/Y2ZiZiJdLCJuYW1lcyI6WyJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImVtYWlsIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN1Y2Nlc3NNZXNnIiwib2JqZWN0IiwiZXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiZnVuYyIsImhhbmRsZVN1Ym1pdCIsIkZvcm0iLCJoYXMiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZmlyc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxpQkFBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEUjtBQUVoQkMsYUFBVyxFQUFFSCxpREFBUyxDQUFDSSxNQUZQO0FBR2hCQyxRQUFNLEVBQUVMLGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJGLFVBSFQ7QUFJaEJJLGNBQVksRUFBRU4saURBQVMsQ0FBQ08sSUFBVixDQUFlTCxVQUpiO0FBS2hCTSxjQUFZLEVBQUVSLGlEQUFTLENBQUNPLElBQVYsQ0FBZUw7QUFMYixDQUFsQjs7QUFRQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnRTtBQUFBLE1BQTdEVixLQUE2RCxRQUE3REEsS0FBNkQ7QUFBQSxNQUF0REksV0FBc0QsUUFBdERBLFdBQXNEO0FBQUEsTUFBekNFLE1BQXlDLFFBQXpDQSxNQUF5QztBQUFBLE1BQWpDQyxZQUFpQyxRQUFqQ0EsWUFBaUM7QUFBQSxNQUFuQkUsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQzNFLFNBQ0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBdUIsUUFBSSxFQUFDLE1BQTVCO0FBQW1DLFlBQVEsRUFBRUEsWUFBN0M7QUFBMkQsY0FBVTtBQUFyRSxLQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsdUJBREYsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUF1QixhQUFTLEVBQUM7QUFBakMsYUFERixFQUlFO0FBQUcsU0FBSyxFQUFDLGtCQUFUO0FBQTRCLG1CQUFZO0FBQXhDLElBSkYsRUFLRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsYUFBUyxtREFBNENILE1BQU0sQ0FBQ0ssR0FBUCxDQUNuRCxPQURtRCxLQUVoRCxZQUZJLENBRlg7QUFLRSxRQUFJLEVBQUMsT0FMUDtBQU1FLE1BQUUsRUFBQyxPQU5MO0FBT0UsZUFBVyxFQUFDLHFCQVBkO0FBUUUsU0FBSyxFQUFFWCxLQUFLLElBQUksRUFSbEI7QUFTRSxZQUFRLEVBQUUsa0JBQUFZLENBQUM7QUFBQSxhQUFJTCxZQUFZLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFWLEVBQWdCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBekIsQ0FBaEI7QUFBQSxLQVRiO0FBVUUsWUFBUSxNQVZWO0FBV0UsYUFBUztBQVhYLElBTEYsRUFrQkdULE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLE9BQVgsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQW1DTCxNQUFNLENBQUNVLEtBQVAsQ0FBYSxPQUFiLENBQW5DLENBbkJKLENBSEYsRUEwQkU7QUFDRSxhQUFTLEVBQUMsa0NBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFlBQVEsRUFBRVYsTUFBTSxDQUFDSyxHQUFQO0FBSFosY0ExQkYsRUFpQ0VQLFdBQVcsR0FBRztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQXdDQSxXQUF4QyxDQUFILEdBQWdFLEVBakM3RSxFQWtDRjtBQUFHLFNBQUssRUFBQztBQUFULFVBQXNCLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsYUFBdEIsTUFsQ0UsQ0FERjtBQXNDRCxDQXZDRDs7QUF5Q0FNLElBQUksQ0FBQ1osV0FBTCxHQUFtQkEsV0FBbkI7QUFDQVksSUFBSSxDQUFDWCxTQUFMLEdBQWlCQSxTQUFqQjtBQUVlVyxtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2R1bGVzL2F1dGgvcGFnZXMvZm9yZ290L2NvbXBvbmVudHMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IGRpc3BsYXlOYW1lID0gJ0ZvcmdldCBQYXNzd29yZCdcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN1Y2Nlc3NNZXNnOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGVycm9yczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmNvbnN0IEZvcm0gPSAoeyBlbWFpbCwgc3VjY2Vzc01lc2csIGVycm9ycywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgcm9sZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkZvcmdldCBQYXNzd29yZDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIHJvdW5kZWQtMCAke2Vycm9ycy5oYXMoXHJcbiAgICAgICAgICAgIFwiZW1haWxcIlxyXG4gICAgICAgICAgKSAmJiBcImlzLWludmFsaWRcIn1gfVxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbCB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMuaGFzKFwiZW1haWxcIikgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5maXJzdChcImVtYWlsXCIpfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBkaXNhYmxlZD17ZXJyb3JzLmhhcygpfVxyXG4gICAgICA+XHJcbiAgICAgICAgU3VibWl0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgIHtzdWNjZXNzTWVzZyA/IDxkaXYgY2xhc3NOYW1lPVwic3Vlc3MtbXNnIHRleHQtY2VudGVyXCI+e3N1Y2Nlc3NNZXNnfTwvZGl2PiA6ICcnfVxyXG4gIDxwIGNsYXNzPVwibG9naW50ZXh0XCI+IDxMaW5rIHRvPScvYWRtaW4nPkxvZ2luPC9MaW5rPiA8L3A+XHJcbiAgICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb3JtLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcclxuRm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/modules/auth/pages/forgot/components/Form.js\n");

/***/ }),

/***/ "./resources/js/modules/auth/pages/forgot/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/auth/pages/forgot/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ \"./resources/js/modules/auth/pages/forgot/Page.js\");\n// import libs\n // import components\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isAuthenticated: state.auth.isAuthenticated\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2ZvcmdvdC9pbmRleC5qcz80Yzk0Il0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aCIsImNvbm5lY3QiLCJQYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFNBQU87QUFDTEMsbUJBQWUsRUFBRUQsS0FBSyxDQUFDRSxJQUFOLENBQVdEO0FBRHZCLEdBQVA7QUFHRCxDQUpEOztBQU1lRSwwSEFBTyxDQUFDSixlQUFELENBQVAsQ0FBeUJLLDZDQUF6QixDQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21vZHVsZXMvYXV0aC9wYWdlcy9mb3Jnb3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbGlic1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG4vLyBpbXBvcnQgY29tcG9uZW50c1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/modules/auth/pages/forgot/index.js\n");

/***/ })

}]);