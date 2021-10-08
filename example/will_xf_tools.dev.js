
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["xf-tools"] = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // 获取url参数
    var urlParse$1 = function (src) {
        var url = decodeURIComponent(src) || null;
        var obj = {};
        var reg = /[?&][^?&]+=[^?&]+/g;
        var arr = url && url.match(reg);
        if (arr) {
            arr.forEach(function (item) {
                var temArr = item.substring(1).split("=");
                var key = temArr[0];
                var val = temArr[1];
                obj[key] = val;
            });
        }
        return obj;
    };

    var toolCommon = /*#__PURE__*/Object.freeze({
        __proto__: null,
        urlParse: urlParse$1
    });

    function padLeftZero(str) {
        return ("00" + str).substr(str.length);
    }
    /* 格式化时间戳
     */
    var formatDate$1 = function (date, fmt) {
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ("" + date.getFullYear()).substr(4 - RegExp.$1.length));
        }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
        };
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                var str = "" + o[k];
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
            }
        }
        return fmt;
    };

    var toolDate = /*#__PURE__*/Object.freeze({
        __proto__: null,
        formatDate: formatDate$1
    });

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var print = createCommonjsModule(function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
    	module.exports = factory();
    })(window, function() {
    return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
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
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
    /******/ 	return __webpack_require__(__webpack_require__.s = 0);
    /******/ })
    /************************************************************************/
    /******/ ({

    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
    /* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init */ "./src/js/init.js");


    var printJS = _js_init__WEBPACK_IMPORTED_MODULE_1__["default"].init;

    if (typeof window !== 'undefined') {
      window.printJS = printJS;
    }

    /* harmony default export */ __webpack_exports__["default"] = (printJS);

    /***/ }),

    /***/ "./src/js/browser.js":
    /*!***************************!*\
      !*** ./src/js/browser.js ***!
      \***************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var Browser = {
      // Firefox 1.0+
      isFirefox: function isFirefox() {
        return typeof InstallTrigger !== 'undefined';
      },
      // Internet Explorer 6-11
      isIE: function isIE() {
        return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
      },
      // Edge 20+
      isEdge: function isEdge() {
        return !Browser.isIE() && !!window.StyleMedia;
      },
      // Chrome 1+
      isChrome: function isChrome() {
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        return !!context.chrome;
      },
      // At least Safari 3+: "[object HTMLElementConstructor]"
      isSafari: function isSafari() {
        return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
      },
      // IOS Chrome
      isIOSChrome: function isIOSChrome() {
        return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;
      }
    };
    /* harmony default export */ __webpack_exports__["default"] = (Browser);

    /***/ }),

    /***/ "./src/js/functions.js":
    /*!*****************************!*\
      !*** ./src/js/functions.js ***!
      \*****************************/
    /*! exports provided: addWrapper, capitalizePrint, collectStyles, addHeader, cleanUp, isRawHTML */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWrapper", function() { return addWrapper; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizePrint", function() { return capitalizePrint; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectStyles", function() { return collectStyles; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHeader", function() { return addHeader; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUp", function() { return cleanUp; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRawHTML", function() { return isRawHTML; });
    /* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
    /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



    function addWrapper(htmlData, params) {
      var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
      return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
    }
    function capitalizePrint(obj) {
      return obj.charAt(0).toUpperCase() + obj.slice(1);
    }
    function collectStyles(element, params) {
      var win = document.defaultView || window; // String variable to hold styling for each element

      var elementStyle = ''; // Loop over computed styles

      var styles = win.getComputedStyle(element, '');

      for (var key = 0; key < styles.length; key++) {
        // Check if style should be processed
        if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
          if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';
        }
      } // Print friendly defaults (deprecated)


      elementStyle += 'max-width: ' + params.maxWidth + 'px !important; font-size: ' + params.font_size + ' !important;';
      return elementStyle;
    }

    function targetStylesMatch(styles, value) {
      for (var i = 0; i < styles.length; i++) {
        if (_typeof(value) === 'object' && value.indexOf(styles[i]) !== -1) return true;
      }

      return false;
    }

    function addHeader(printElement, params) {
      // Create the header container div
      var headerContainer = document.createElement('div'); // Check if the header is text or raw html

      if (isRawHTML(params.header)) {
        headerContainer.innerHTML = params.header;
      } else {
        // Create header element
        var headerElement = document.createElement('h1'); // Create header text node

        var headerNode = document.createTextNode(params.header); // Build and style

        headerElement.appendChild(headerNode);
        headerElement.setAttribute('style', params.headerStyle);
        headerContainer.appendChild(headerElement);
      }

      printElement.insertBefore(headerContainer, printElement.childNodes[0]);
    }
    function cleanUp(params) {
      // If we are showing a feedback message to user, remove it
      if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_0__["default"].close(); // Check for a finished loading hook function

      if (params.onLoadingEnd) params.onLoadingEnd(); // If preloading pdf files, clean blob url

      if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable); // Run onPrintDialogClose callback

      var event = 'mouseover';

      if (_browser__WEBPACK_IMPORTED_MODULE_1__["default"].isChrome() || _browser__WEBPACK_IMPORTED_MODULE_1__["default"].isFirefox()) {
        // Ps.: Firefox will require an extra click in the document to fire the focus event.
        event = 'focus';
      }

      var handler = function handler() {
        // Make sure the event only happens once.
        window.removeEventListener(event, handler);
        params.onPrintDialogClose(); // Remove iframe from the DOM

        var iframe = document.getElementById(params.frameId);

        if (iframe) {
          iframe.remove();
        }
      };

      window.addEventListener(event, handler);
    }
    function isRawHTML(raw) {
      var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');
      return regexHtml.test(raw);
    }

    /***/ }),

    /***/ "./src/js/html.js":
    /*!************************!*\
      !*** ./src/js/html.js ***!
      \************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
    /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



    /* harmony default export */ __webpack_exports__["default"] = ({
      print: function print(params, printFrame) {
        // Get the DOM printable element
        var printElement = isHtmlElement(params.printable) ? params.printable : document.getElementById(params.printable); // Check if the element exists

        if (!printElement) {
          window.console.error('Invalid HTML element id: ' + params.printable);
          return;
        } // Clone the target element including its children (if available)


        params.printableElement = cloneElement(printElement, params); // Add header

        if (params.header) {
          Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
        } // Print html element contents


        _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
      }
    });

    function cloneElement(element, params) {
      // Clone the main node (if not already inside the recursion process)
      var clone = element.cloneNode(); // Loop over and process the children elements / nodes (including text nodes)

      var childNodesArray = Array.prototype.slice.call(element.childNodes);

      for (var i = 0; i < childNodesArray.length; i++) {
        // Check if we are skipping the current element
        if (params.ignoreElements.indexOf(childNodesArray[i].id) !== -1) {
          continue;
        } // Clone the child element


        var clonedChild = cloneElement(childNodesArray[i], params); // Attach the cloned child to the cloned parent node

        clone.appendChild(clonedChild);
      } // Get all styling for print element (for nodes of type element only)


      if (params.scanStyles && element.nodeType === 1) {
        clone.setAttribute('style', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["collectStyles"])(element, params));
      } // Check if the element needs any state processing (copy user input data)


      switch (element.tagName) {
        case 'SELECT':
          // Copy the current selection value to its clone
          clone.value = element.value;
          break;

        case 'CANVAS':
          // Copy the canvas content to its clone
          clone.getContext('2d').drawImage(element, 0, 0);
          break;
      }

      return clone;
    }

    function isHtmlElement(printable) {
      // Check if element is instance of HTMLElement or has nodeType === 1 (for elements in iframe)
      return _typeof(printable) === 'object' && printable && (printable instanceof HTMLElement || printable.nodeType === 1);
    }

    /***/ }),

    /***/ "./src/js/image.js":
    /*!*************************!*\
      !*** ./src/js/image.js ***!
      \*************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
    /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
    /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");



    /* harmony default export */ __webpack_exports__["default"] = ({
      print: function print(params, printFrame) {
        // Check if we are printing one image or multiple images
        if (params.printable.constructor !== Array) {
          // Create array with one image
          params.printable = [params.printable];
        } // Create printable element (container)


        params.printableElement = document.createElement('div'); // Create all image elements and append them to the printable container

        params.printable.forEach(function (src) {
          // Create the image element
          var img = document.createElement('img');
          img.setAttribute('style', params.imageStyle); // Set image src with the file url

          img.src = src; // The following block is for Firefox, which for some reason requires the image's src to be fully qualified in
          // order to print it

          if (_browser__WEBPACK_IMPORTED_MODULE_2__["default"].isFirefox()) {
            var fullyQualifiedSrc = img.src;
            img.src = fullyQualifiedSrc;
          } // Create the image wrapper


          var imageWrapper = document.createElement('div'); // Append image to the wrapper element

          imageWrapper.appendChild(img); // Append wrapper to the printable element

          params.printableElement.appendChild(imageWrapper);
        }); // Check if we are adding a print header

        if (params.header) Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params); // Print image

        _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
      }
    });

    /***/ }),

    /***/ "./src/js/init.js":
    /*!************************!*\
      !*** ./src/js/init.js ***!
      \************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
    /* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
    /* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf */ "./src/js/pdf.js");
    /* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./src/js/html.js");
    /* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-html */ "./src/js/raw-html.js");
    /* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/js/image.js");
    /* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json */ "./src/js/json.js");


    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








    var printTypes = ['pdf', 'html', 'image', 'json', 'raw-html'];
    /* harmony default export */ __webpack_exports__["default"] = ({
      init: function init() {
        var params = {
          printable: null,
          fallbackPrintable: null,
          type: 'pdf',
          header: null,
          headerStyle: 'font-weight: 300;',
          maxWidth: 800,
          properties: null,
          gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
          gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
          showModal: false,
          onError: function onError(error) {
            throw error;
          },
          onLoadingStart: null,
          onLoadingEnd: null,
          onPrintDialogClose: function onPrintDialogClose() {},
          onIncompatibleBrowser: function onIncompatibleBrowser() {},
          modalMessage: 'Retrieving Document...',
          frameId: 'printJS',
          printableElement: null,
          documentTitle: 'Document',
          targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],
          targetStyles: ['border', 'box', 'break', 'text-decoration'],
          ignoreElements: [],
          repeatTableHeader: true,
          css: null,
          style: null,
          scanStyles: true,
          base64: false,
          // Deprecated
          onPdfOpen: null,
          font: 'TimesNewRoman',
          font_size: '12pt',
          honorMarginPadding: true,
          honorColor: false,
          imageStyle: 'max-width: 100%;'
        }; // Check if a printable document or object was supplied

        var args = arguments[0];

        if (args === undefined) {
          throw new Error('printJS expects at least 1 attribute.');
        } // Process parameters


        switch (_typeof(args)) {
          case 'string':
            params.printable = encodeURI(args);
            params.fallbackPrintable = params.printable;
            params.type = arguments[1] || params.type;
            break;

          case 'object':
            params.printable = args.printable;
            params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
            params.fallbackPrintable = params.base64 ? "data:application/pdf;base64,".concat(params.fallbackPrintable) : params.fallbackPrintable;

            for (var k in params) {
              if (k === 'printable' || k === 'fallbackPrintable') continue;
              params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];
            }

            break;

          default:
            throw new Error('Unexpected argument type! Expected "string" or "object", got ' + _typeof(args));
        } // Validate printable


        if (!params.printable) throw new Error('Missing printable information.'); // Validate type

        if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
          throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
        } // Check if we are showing a feedback message to the user (useful for large files)


        if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].show(params); // Check for a print start hook function

        if (params.onLoadingStart) params.onLoadingStart(); // To prevent duplication and issues, remove any used printFrame from the DOM

        var usedFrame = document.getElementById(params.frameId);
        if (usedFrame) usedFrame.parentNode.removeChild(usedFrame); // Create a new iframe for the print job

        var printFrame = document.createElement('iframe');

        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
          // Set the iframe to be is visible on the page (guaranteed by fixed position) but hidden using opacity 0, because
          // this works in Firefox. The height needs to be sufficient for some part of the document other than the PDF
          // viewer's toolbar to be visible in the page
          printFrame.setAttribute('style', 'width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0');
        } else {
          // Hide the iframe in other browsers
          printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
        } // Set iframe element id


        printFrame.setAttribute('id', params.frameId); // For non pdf printing, pass an html document string to srcdoc (force onload callback)

        if (params.type !== 'pdf') {
          printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>'; // Attach css files

          if (params.css) {
            // Add support for single file
            if (!Array.isArray(params.css)) params.css = [params.css]; // Create link tags for each css file

            params.css.forEach(function (file) {
              printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
            });
          }

          printFrame.srcdoc += '</head><body></body></html>';
        } // Check printable type


        switch (params.type) {
          case 'pdf':
            // Check browser support for pdf and if not supported we will just open the pdf file instead
            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
              try {
                console.info('Print.js doesn\'t support PDF printing in Internet Explorer.');
                var win = window.open(params.fallbackPrintable, '_blank');
                win.focus();
                params.onIncompatibleBrowser();
              } catch (error) {
                params.onError(error);
              } finally {
                // Make sure there is no loading modal opened
                if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].close();
                if (params.onLoadingEnd) params.onLoadingEnd();
              }
            } else {
              _pdf__WEBPACK_IMPORTED_MODULE_2__["default"].print(params, printFrame);
            }

            break;

          case 'image':
            _image__WEBPACK_IMPORTED_MODULE_5__["default"].print(params, printFrame);
            break;

          case 'html':
            _html__WEBPACK_IMPORTED_MODULE_3__["default"].print(params, printFrame);
            break;

          case 'raw-html':
            _raw_html__WEBPACK_IMPORTED_MODULE_4__["default"].print(params, printFrame);
            break;

          case 'json':
            _json__WEBPACK_IMPORTED_MODULE_6__["default"].print(params, printFrame);
            break;
        }
      }
    });

    /***/ }),

    /***/ "./src/js/json.js":
    /*!************************!*\
      !*** ./src/js/json.js ***!
      \************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
    /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



    /* harmony default export */ __webpack_exports__["default"] = ({
      print: function print(params, printFrame) {
        // Check if we received proper data
        if (_typeof(params.printable) !== 'object') {
          throw new Error('Invalid javascript data object (JSON).');
        } // Validate repeatTableHeader


        if (typeof params.repeatTableHeader !== 'boolean') {
          throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
        } // Validate properties


        if (!params.properties || !Array.isArray(params.properties)) {
          throw new Error('Invalid properties array for your JSON data.');
        } // We will format the property objects to keep the JSON api compatible with older releases


        params.properties = params.properties.map(function (property) {
          return {
            field: _typeof(property) === 'object' ? property.field : property,
            displayName: _typeof(property) === 'object' ? property.displayName : property,
            columnSize: _typeof(property) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'
          };
        }); // Create a print container element

        params.printableElement = document.createElement('div'); // Check if we are adding a print header

        if (params.header) {
          Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
        } // Build the printable html data


        params.printableElement.innerHTML += jsonToHTML(params); // Print the json data

        _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
      }
    });

    function jsonToHTML(params) {
      // Get the row and column data
      var data = params.printable;
      var properties = params.properties; // Create a html table

      var htmlData = '<table style="border-collapse: collapse; width: 100%;">'; // Check if the header should be repeated

      if (params.repeatTableHeader) {
        htmlData += '<thead>';
      } // Add the table header row


      htmlData += '<tr>'; // Add the table header columns

      for (var a = 0; a < properties.length; a++) {
        htmlData += '<th style="width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '">' + Object(_functions__WEBPACK_IMPORTED_MODULE_0__["capitalizePrint"])(properties[a].displayName) + '</th>';
      } // Add the closing tag for the table header row


      htmlData += '</tr>'; // If the table header is marked as repeated, add the closing tag

      if (params.repeatTableHeader) {
        htmlData += '</thead>';
      } // Create the table body


      htmlData += '<tbody>'; // Add the table data rows

      for (var i = 0; i < data.length; i++) {
        // Add the row starting tag
        htmlData += '<tr>'; // Print selected properties only

        for (var n = 0; n < properties.length; n++) {
          var stringData = data[i]; // Support nested objects

          var property = properties[n].field.split('.');

          if (property.length > 1) {
            for (var p = 0; p < property.length; p++) {
              stringData = stringData[property[p]];
            }
          } else {
            stringData = stringData[properties[n].field];
          } // Add the row contents and styles


          htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + '</td>';
        } // Add the row closing tag


        htmlData += '</tr>';
      } // Add the table and body closing tags


      htmlData += '</tbody></table>';
      return htmlData;
    }

    /***/ }),

    /***/ "./src/js/modal.js":
    /*!*************************!*\
      !*** ./src/js/modal.js ***!
      \*************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var Modal = {
      show: function show(params) {
        // Build modal
        var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;'; // Create wrapper

        var printModal = document.createElement('div');
        printModal.setAttribute('style', modalStyle);
        printModal.setAttribute('id', 'printJS-Modal'); // Create content div

        var contentDiv = document.createElement('div');
        contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;'); // Add close button (requires print.css)

        var closeButton = document.createElement('div');
        closeButton.setAttribute('class', 'printClose');
        closeButton.setAttribute('id', 'printClose');
        contentDiv.appendChild(closeButton); // Add spinner (requires print.css)

        var spinner = document.createElement('span');
        spinner.setAttribute('class', 'printSpinner');
        contentDiv.appendChild(spinner); // Add message

        var messageNode = document.createTextNode(params.modalMessage);
        contentDiv.appendChild(messageNode); // Add contentDiv to printModal

        printModal.appendChild(contentDiv); // Append print modal element to document body

        document.getElementsByTagName('body')[0].appendChild(printModal); // Add event listener to close button

        document.getElementById('printClose').addEventListener('click', function () {
          Modal.close();
        });
      },
      close: function close() {
        var printModal = document.getElementById('printJS-Modal');

        if (printModal) {
          printModal.parentNode.removeChild(printModal);
        }
      }
    };
    /* harmony default export */ __webpack_exports__["default"] = (Modal);

    /***/ }),

    /***/ "./src/js/pdf.js":
    /*!***********************!*\
      !*** ./src/js/pdf.js ***!
      \***********************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


    /* harmony default export */ __webpack_exports__["default"] = ({
      print: function print(params, printFrame) {
        // Check if we have base64 data
        if (params.base64) {
          var bytesArray = Uint8Array.from(atob(params.printable), function (c) {
            return c.charCodeAt(0);
          });
          createBlobAndPrint(params, printFrame, bytesArray);
          return;
        } // Format pdf url


        params.printable = /^(blob|http|\/\/)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable); // Get the file through a http request (Preload)

        var req = new window.XMLHttpRequest();
        req.responseType = 'arraybuffer';
        req.addEventListener('error', function () {
          Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
          params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job
        });
        req.addEventListener('load', function () {
          // Check for errors
          if ([200, 201].indexOf(req.status) === -1) {
            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
            params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job

            return;
          } // Print requested document


          createBlobAndPrint(params, printFrame, req.response);
        });
        req.open('GET', params.printable, true);
        req.send();
      }
    });

    function createBlobAndPrint(params, printFrame, data) {
      // Pass response or base64 data to a blob and create a local object url
      var localPdf = new window.Blob([data], {
        type: 'application/pdf'
      });
      localPdf = window.URL.createObjectURL(localPdf); // Set iframe src with pdf document url

      printFrame.setAttribute('src', localPdf);
      _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
    }

    /***/ }),

    /***/ "./src/js/print.js":
    /*!*************************!*\
      !*** ./src/js/print.js ***!
      \*************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


    var Print = {
      send: function send(params, printFrame) {
        // Append iframe element to document body
        document.getElementsByTagName('body')[0].appendChild(printFrame); // Get iframe element

        var iframeElement = document.getElementById(params.frameId); // Wait for iframe to load all content

        iframeElement.onload = function () {
          if (params.type === 'pdf') {
            // Add a delay for Firefox. In my tests, 1000ms was sufficient but 100ms was not
            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
              setTimeout(function () {
                return performPrint(iframeElement, params);
              }, 1000);
            } else {
              performPrint(iframeElement, params);
            }

            return;
          } // Get iframe element document


          var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
          if (printDocument.document) printDocument = printDocument.document; // Append printable element to the iframe body

          printDocument.body.appendChild(params.printableElement); // Add custom style

          if (params.type !== 'pdf' && params.style) {
            // Create style element
            var style = document.createElement('style');
            style.innerHTML = params.style; // Append style element to iframe's head

            printDocument.head.appendChild(style);
          } // If printing images, wait for them to load inside the iframe


          var images = printDocument.getElementsByTagName('img');

          if (images.length > 0) {
            loadIframeImages(Array.from(images)).then(function () {
              return performPrint(iframeElement, params);
            });
          } else {
            performPrint(iframeElement, params);
          }
        };
      }
    };

    function performPrint(iframeElement, params) {
      try {
        iframeElement.focus(); // If Edge or IE, try catch with execCommand

        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isEdge() || _browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
          try {
            iframeElement.contentWindow.document.execCommand('print', false, null);
          } catch (e) {
            iframeElement.contentWindow.print();
          }
        } else {
          // Other browsers
          iframeElement.contentWindow.print();
        }
      } catch (error) {
        params.onError(error);
      } finally {
        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
          // Move the iframe element off-screen and make it invisible
          iframeElement.style.visibility = 'hidden';
          iframeElement.style.left = '-1px';
        }

        Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
      }
    }

    function loadIframeImages(images) {
      var promises = images.map(function (image) {
        if (image.src && image.src !== window.location.href) {
          return loadIframeImage(image);
        }
      });
      return Promise.all(promises);
    }

    function loadIframeImage(image) {
      return new Promise(function (resolve) {
        var pollImage = function pollImage() {
          !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage, 500) : resolve();
        };

        pollImage();
      });
    }

    /* harmony default export */ __webpack_exports__["default"] = (Print);

    /***/ }),

    /***/ "./src/js/raw-html.js":
    /*!****************************!*\
      !*** ./src/js/raw-html.js ***!
      \****************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");

    /* harmony default export */ __webpack_exports__["default"] = ({
      print: function print(params, printFrame) {
        // Create printable element (container)
        params.printableElement = document.createElement('div');
        params.printableElement.setAttribute('style', 'width:100%'); // Set our raw html as the printable element inner html content

        params.printableElement.innerHTML = params.printable; // Print html contents

        _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
      }
    });

    /***/ }),

    /***/ "./src/sass/index.scss":
    /*!*****************************!*\
      !*** ./src/sass/index.scss ***!
      \*****************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ }),

    /***/ 0:
    /*!****************************!*\
      !*** multi ./src/index.js ***!
      \****************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


    /***/ })

    /******/ })["default"];
    });

    });

    var print$1 = unwrapExports(print);

    /*
     * id: dom元素
     * desc: 根据HTML打印文件
     */
    var htmlPrint$1 = function (id) {
        if (!id) {
            throw new Error("id是必填的额");
        }
        print$1({
            printable: id || "contentPrint",
            type: "html",
            // scanStyles: false,
            targetStyles: ["*"],
            // css: ['@/styles/print.less'],
            ignoreElements: ["noButton"],
        });
    };
    /*
     * id: dom元素
     * desc: 根据pdf或者img url打印文件
     */
    var urlPrint$1 = function (url, isbase64) {
        if (!url) {
            throw new Error("url是必填的额");
        }
        print$1({
            printable: url,
            type: "pdf",
            targetStyles: ["*"],
            base64: isbase64 || false,
            // showModal: true,
            onLoadingStart: function () {
                console.log("开始");
            },
            onLoadingEnd: function () {
                console.log("结束了。。。。");
            },
            onPrintDialogClose: function () {
                console.log("关闭了。。");
            },
            ignoreElements: ["noButton"],
        });
    };

    var toolPrint = /*#__PURE__*/Object.freeze({
        __proto__: null,
        htmlPrint: htmlPrint$1,
        urlPrint: urlPrint$1
    });

    /**
     * a 标签下载
     * 文件流的形式 blob
     * res 后台返回的文件流
     * file 当前文件
     */
    var downFileBlob$1 = function (res, name, type) {
        if (!res) {
            throw new Error("获取的文件流为空");
        }
        var content = res;
        // const filename = content.headers['content-disposition'];
        var blob = new Blob([content], {
            type: type || "application/pdf;chartset=UTF-8",
        });
        var fileName = res.name || name || "默认名字";
        if ("download" in document.createElement("a")) {
            // 非IE下载
            var elink = document.createElement("a");
            // elink.download = filename.split('filename=')[1];
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);
        }
        else {
            // IE10+下载
            window.navigator.msSaveBlob(blob, fileName);
        }
    };
    /**
     * 使用a标签下载一个文件
     * @param {} url  pdf地址
     */
    var downFileUrl$1 = function (url, fileName) {
        var x = new XMLHttpRequest();
        x.open("GET", url, true);
        x.responseType = "blob";
        x.onload = function () {
            var blob = x.response;
            if ("msSaveOrOpenBlob" in navigator) {
                // IE导出
                window.navigator.msSaveOrOpenBlob(blob, fileName);
            }
            else {
                var a = document.createElement("a");
                a.download = fileName;
                a.href = window.URL.createObjectURL(blob);
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        };
        x.send();
    };

    var toolDown = /*#__PURE__*/Object.freeze({
        __proto__: null,
        downFileBlob: downFileBlob$1,
        downFileUrl: downFileUrl$1
    });

    // console.log("http://123456.com");
    // console.log("dev");
    var Tools = __assign(__assign(__assign(__assign({}, toolCommon), toolDate), toolPrint), toolDown);
    // console.log(Tools);
    // es 按需引入
    var urlParse = Tools.urlParse, formatDate = Tools.formatDate, downFileBlob = Tools.downFileBlob, downFileUrl = Tools.downFileUrl, htmlPrint = Tools.htmlPrint, urlPrint = Tools.urlPrint;

    exports["default"] = Tools;
    exports.downFileBlob = downFileBlob;
    exports.downFileUrl = downFileUrl;
    exports.formatDate = formatDate;
    exports.htmlPrint = htmlPrint;
    exports.urlParse = urlParse;
    exports.urlPrint = urlPrint;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=will_xf_tools.dev.js.map
