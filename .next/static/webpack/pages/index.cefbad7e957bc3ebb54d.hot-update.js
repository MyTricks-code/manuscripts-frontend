"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\meteor-first-site\\blog-app-strapi\\my-project\\frontend\\components\\nav.js",
    _this = undefined;






var Nav = function Nav(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        className: "uk-navbar-container",
        "data-uk-navbar": true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "uk-navbar-left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
            className: "uk-navbar-nav",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  children: "Strapi Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "uk-navbar-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
            className: "uk-navbar-nav",
            children: categories.map(function (category) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/category/".concat(category.attributes.slug),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "uk-link-reset",
                    "font-color": "black",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "relative bg-white overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
            className: "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
            fill: "currentColor",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("polygon", {
              points: "50,0 100,0 50,100 0,100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "relative pt-6 px-4 sm:px-6 lg:px-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
                className: "relative flex items-center justify-between sm:h-10 lg:justify-start",
                "aria-label": "Global",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "flex items-center justify-between w-full md:w-auto",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "#",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                        className: "sr-only",
                        children: "Workflow"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 23
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        className: "h-8 w-auto sm:h-10",
                        src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "-mr-2 flex items-center md:hidden",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                        type: "button",
                        className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                        "aria-expanded": "false",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                          className: "sr-only",
                          children: "Open main menu"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 51,
                          columnNumber: 25
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                          className: "h-6 w-6",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 53,
                            columnNumber: 27
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 25
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 23
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 21
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hidden md:block md:ml-10 md:pr-4 md:space-x-8",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "font-medium text-gray-500 hover:text-gray-900",
                    children: "Product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "font-medium text-gray-500 hover:text-gray-900",
                    children: "Features"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "font-medium text-gray-500 hover:text-gray-900",
                    children: "Marketplace"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "font-medium text-gray-500 hover:text-gray-900",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "font-medium text-indigo-600 hover:text-indigo-500",
                    children: "Log in"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "px-5 pt-4 flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 21
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "-mr-2",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      type: "button",
                      className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                        className: "sr-only",
                        children: "Close main menu"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 23
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                        className: "h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 25
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 21
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "px-2 pt-2 pb-3 space-y-1",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                    children: "Product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                    children: "Features"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                    children: "Marketplace"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "#",
                  className: "block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100",
                  children: " Log in "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
            className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "sm:text-center lg:text-left",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "block xl:inline",
                  children: "Data to enrich your"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "block text-indigo-600 xl:inline",
                  children: "online business"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",
                children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "rounded-md shadow",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",
                    children: " Get started "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "mt-3 sm:mt-0 sm:ml-3",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",
                    children: " Live demo "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2VmYmFkN2U5NTdiYzNlYmI1NGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDOUIsc0JBQ0U7QUFBQSw0QkFDQTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFxQyw4QkFBckM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUMsZUFBZDtBQUFBLG1DQUNFO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLEdBQVg7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUMsZUFBZDtBQUFBLHNCQUNHQSxVQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDNUIsa0NBQ0U7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLHNCQUFlQSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JDLElBQW5DLENBQVY7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUMsZUFBYjtBQUE2QixrQ0FBVyxPQUF4QztBQUFBLDhCQUFpREYsUUFBUSxDQUFDQyxVQUFULENBQW9CRTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTSCxRQUFRLENBQUNJLEVBQWxCO0FBQUE7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SywyQkFBUyxFQUFDLG1CQUFmO0FBQUEseUNBQ0U7QUFBRyx3QkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBUyxFQUFDLHVMQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFLLDJCQUFTLEVBQUMsc0JBQWY7QUFBQSx5Q0FDRTtBQUFHLHdCQUFJLEVBQUMsR0FBUjtBQUFZLDZCQUFTLEVBQUMsNExBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBeUZFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JBO0FBQUEsa0JBREY7QUEwSEQsQ0EzSEQ7O0tBQU1QO0FBNkhOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lclwiIGRhdGEtdWstbmF2YmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5TdHJhcGkgQmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIiBmb250LWNvbG9yPVwiYmxhY2tcIj57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBwYi04IGJnLXdoaXRlIHNtOnBiLTE2IG1kOnBiLTIwIGxnOm1heC13LTJ4bCBsZzp3LWZ1bGwgbGc6cGItMjggeGw6cGItMzJcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBhYnNvbHV0ZSByaWdodC0wIGluc2V0LXktMCBoLWZ1bGwgdy00OCB0ZXh0LXdoaXRlIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUwLDAgMTAwLDAgNTAsMTAwIDAsMTAwXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwdC02IHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNtOmgtMTAgbGc6anVzdGlmeS1zdGFydFwiIGFyaWEtbGFiZWw9XCJHbG9iYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtZ3JvdyBmbGV4LXNocmluay0wIGxnOmZsZXgtZ3Jvdy0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbWQ6dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPldvcmtmbG93PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC04IHctYXV0byBzbTpoLTEwXCIgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbWFyay1pbmRpZ28tNjAwLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yIGZsZXggaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoLTYgdy02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIG1kOm1sLTEwIG1kOnByLTQgbWQ6c3BhY2UteC04XCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlByb2R1Y3Q8L2E+XG4gICAgXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPkZlYXR1cmVzPC9hPlxuICAgIFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5NYXJrZXRwbGFjZTwvYT5cbiAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+Q29tcGFueTwvYT5cbiAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMFwiPkxvZyBpbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHRvcC0wIGluc2V0LXgtMCBwLTIgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gb3JpZ2luLXRvcC1yaWdodCBtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC04IHctYXV0b1wiIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTYwMC5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1tZCBwLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTBcIj5Qcm9kdWN0PC9hPlxuICAgIFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTBcIj5GZWF0dXJlczwvYT5cbiAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTUwXCI+TWFya2V0cGxhY2U8L2E+XG4gICAgXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MFwiPkNvbXBhbnk8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHgtNSBweS0zIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBiZy1ncmF5LTUwIGhvdmVyOmJnLWdyYXktMTAwXCI+IExvZyBpbiA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXQtMTAgbXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTptdC0xMiBzbTpweC02IG1kOm10LTE2IGxnOm10LTIwIGxnOnB4LTggeGw6bXQtMjhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206dGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNXhsIG1kOnRleHQtNnhsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgeGw6aW5saW5lXCI+RGF0YSB0byBlbnJpY2ggeW91cjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWluZGlnby02MDAgeGw6aW5saW5lXCI+b25saW5lIGJ1c2luZXNzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIHNtOm10LTUgc206dGV4dC1sZyBzbTptYXgtdy14bCBzbTpteC1hdXRvIG1kOm10LTUgbWQ6dGV4dC14bCBsZzpteC0wXCI+QW5pbSBhdXRlIGlkIG1hZ25hIGFsaXF1YSBhZCBhZCBub24gZGVzZXJ1bnQgc3VudC4gUXVpIGlydXJlIHF1aSBsb3JlbSBjdXBpZGF0YXQgY29tbW9kby4gRWxpdCBzdW50IGFtZXQgZnVnaWF0IHZlbmlhbSBvY2NhZWNhdCBmdWdpYXQgYWxpcXVhLjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNtOm10LTggc206ZmxleCBzbTpqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtOCBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgbWQ6cHktNCBtZDp0ZXh0LWxnIG1kOnB4LTEwXCI+IEdldCBzdGFydGVkIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgc206bXQtMCBzbTptbC0zXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC04IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWluZGlnby03MDAgYmctaW5kaWdvLTEwMCBob3ZlcjpiZy1pbmRpZ28tMjAwIG1kOnB5LTQgbWQ6dGV4dC1sZyBtZDpweC0xMFwiPiBMaXZlIGRlbW8gPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6YWJzb2x1dGUgbGc6aW5zZXQteS0wIGxnOnJpZ2h0LTAgbGc6dy0xLzJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk5hdiIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==