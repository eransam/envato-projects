'use strict';

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable quote-props */

/* eslint-env jquery */


(function ($) {
  // add arrow to list widgets
  $('.dx-sidebar .dx-widget.widget_archive ul > li > a,' + '.dx-sidebar .dx-widget.widget_categories ul > li > a,' + '.dx-sidebar .dx-widget.widget_pages ul > li > a,' + '.dx-sidebar .dx-widget.widget_meta ul > li > a,' + '.dx-sidebar .dx-widget.widget_recent_entries ul > li > a,' + '.dx-sidebar .dx-widget.widget_rss ul > li > a,' + '.dx-sidebar .dx-widget.widget_nav_menu ul > li > a').each(function () {
    if ('' !== $(this).html()) {
      $(this).html("<span class=\"icon pe-7s-angle-right\"></span>".concat($(this).html()));
    } else {
      $(this).parent().hide();
    }
  }); // Stylization EDD Quantity Inputs for Variables Downloads.

  var eddItemQuantity = $('.edd_download_buy_button_variables .edd_price_options .edd-input.edd-item-quantity');

  if (0 < eddItemQuantity.length) {
    jQuery('.edd_download_buy_button_variables .edd_download_purchase_form').addClass('dx-form dx-form-group-inputs dx-form-quantity');
    eddItemQuantity.addClass('dx-form-quantity-input');
    eddItemQuantity.before('<a href="#" class="dx-form-quantity-minus">-</a>');
    eddItemQuantity.after('<a href="#" class="dx-form-quantity-plus">+</a>');
    window.Amdesk.initForm();
  } // Add Bootstrap Checkbox for Multi Pricing Download Inputs.


  $('.edd_price_options.edd_multi_mode ul>li').each(function () {
    var label = $(this).find('label');
    var checkbox = label.find('[type="checkbox"]');
    var optionName = label.find('.edd_price_option_name');
    label.addClass('custom-control custom-checkbox');
    checkbox.addClass('custom-control-input');
    optionName.addClass('custom-control-label');
    optionName.attr('for', label.attr('for'));
  }); // Add Bootstrap Radio for Single Pricing Download Inputs.

  $('.edd_price_options.edd_single_mode ul>li').each(function () {
    var label = $(this).find('label');
    var checkbox = label.find('[type="radio"]');
    var optionName = label.find('.edd_price_option_name');
    label.addClass('custom-control custom-radio');
    checkbox.addClass('custom-control-input');
    optionName.addClass('custom-control-label');
    optionName.attr('for', label.attr('for'));
  });

  function amdeskEddChangeQuantityInput() {
    $('#edd_checkout_cart_form .edd-input.edd-item-quantity').each(function () {
      var $this = $(this);
      $this.wrap('<span class="dx-form dx-form-group-inputs dx-form-quantity">');
      $this.before('<a href="#" class="dx-form-quantity-minus">-</a>');
      $this.after('<a href="#" class="dx-form-quantity-plus">+</a>');
      $this.addClass('form-control form-control-style-2 dx-form-quantity-input');
      var minus = $this.parent().find('.dx-form-quantity-minus');
      var plus = $this.parent().find('.dx-form-quantity-plus');
      var min = parseInt($this.attr('min'), 10);
      var max = parseInt($this.attr('max'), 10);
      $this.on('input', function () {
        var val = this.value;

        if ('' !== val) {
          if (val > max) {
            val = max;
          } else if (val < min) {
            val = min;
          }
        }

        this.value = val;
      });
      minus.on('click', function (e) {
        e.preventDefault();
        var count = parseInt($this.val(), 10) - 1;
        count = count < min ? min : count;
        $this.val(count);
        $this.change();
      });
      plus.on('click', function (e) {
        e.preventDefault();
        var count = parseInt($this.val(), 10) + 1;
        count = count > max ? max : count;
        $this.val(count);
        $this.change();
      });
    });
  }

  function amdeskInitPluginIsotope() {
    if ('undefined' === typeof $.fn.isotope) {
      return;
    }

    $('.edd_downloads_list').isotope({
      itemSelector: '.edd_download',
      layoutMode: 'masonry'
    });
  }

  function amdeskEddChangeRemoveButton() {
    $('#edd_checkout_cart_form .edd_cart_remove_item_btn').each(function () {
      $(this).html('<span class="icon pe-7s-close"></span>');
    });
  }

  amdeskEddChangeQuantityInput();
  amdeskEddChangeRemoveButton();
  amdeskInitPluginIsotope();
  $('body').on('edd_taxes_recalculated', function () {
    amdeskEddChangeQuantityInput();
    amdeskEddChangeRemoveButton();
  });
  $(document).on('edd_cart_item_added', function () {
    if ('block' === $('.edd-cart-number-of-items').css('display')) {
      $('.edd-cart-number-of-items').css('display', 'flex');
    }
  });
  $(document).on('docspress_ajax_loaded', function (event, cached) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = "<div>".concat(cached.html, "</div>");
    var html = wrapper.firstChild;
    $('.dx-breadcrumbs').html($(html).find('.dx-breadcrumbs'));
  });
  $('.wpas-table.wpas-ticket-details-header').wrap('<div class="wpas-overflow-table">');
  var $wnd = $(window);
  var wndW = 0;

  function getWndSize() {
    wndW = $wnd.width();
  }

  getWndSize();
  $wnd.on('resize load orientationchange', getWndSize);
  /**
   * Stretch Background Columns
   */

  function stretchColumns() {
    $('.ghostkit-grid').each(function () {
      var $this = $(this).find('.nk-awb-wrap'); // Ghostkit column support

      if ($this.closest('.ghostkit-col').length) {
        var $row = $this.closest('.ghostkit-grid');
        var $col = $this.closest('.ghostkit-col');
        var rectRow = $row[0].getBoundingClientRect();
        var leftRow = rectRow.left;
        var rightRow = wndW - rectRow.right;
        $col.each(function () {
          var rectCol = $(this)[0].getBoundingClientRect();
          var leftCol = rectCol.left;
          var rightCol = wndW - rectCol.right;
          var awbWrap = $(this).children('.nk-awb.alignfull');

          if (Math.round(leftRow) === Math.round(leftCol)) {
            awbWrap.addClass('alignfull-left');
          } else {
            awbWrap.removeClass('alignfull-left');
          }

          if (Math.round(rightRow) === Math.round(rightCol)) {
            awbWrap.addClass('alignfull-right');
          } else {
            awbWrap.removeClass('alignfull-right');
          }
        });
      }
    });
  } // init stretch


  stretchColumns();
  $wnd.on('resize orientationchange load', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["throttle"])(200, stretchColumns)); // Hide unneeded buy Buttons Download elements. These are things that are required in case JS breaks or isn't present

  $(document).on('infiniteScrollEndLoading', function () {
    $('.edd-no-js').hide();
    $('a.edd-add-to-cart').addClass('edd-has-js');
  });
  $(document).on('searchwp_live_position_results', function () {
    $('.searchwp-live-search-results').css('width', '+=123');
  });
})(jQuery);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports) {
  'use strict';
  /* eslint-disable no-undefined,no-param-reassign,no-shadow */

  /**
   * Throttle execution of a function. Especially useful for rate limiting
   * execution of handlers on events like resize and scroll.
   *
   * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
   *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
   *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
   *                                    the internal counter is reset).
   * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                    to `callback` when the throttled-function is executed.
   * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
   *                                    schedule `callback` to execute after `delay` ms.
   *
   * @returns {Function}  A new, throttled, function.
   */

  function throttle(delay, noTrailing, callback, debounceMode) {
    /*
     * After wrapper has stopped being called, this timeout ensures that
     * `callback` is executed at the proper times in `throttle` and `end`
     * debounce modes.
     */
    var timeoutID;
    var cancelled = false; // Keep track of the last time `callback` was executed.

    var lastExec = 0; // Function to clear existing timeout

    function clearExistingTimeout() {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    } // Function to cancel next exec


    function cancel() {
      clearExistingTimeout();
      cancelled = true;
    } // `noTrailing` defaults to falsy.


    if (typeof noTrailing !== 'boolean') {
      debounceMode = callback;
      callback = noTrailing;
      noTrailing = undefined;
    }
    /*
     * The `wrapper` function encapsulates all of the throttling / debouncing
     * functionality and when executed will limit the rate at which `callback`
     * is executed.
     */


    function wrapper() {
      for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
        arguments_[_key] = arguments[_key];
      }

      var self = this;
      var elapsed = Date.now() - lastExec;

      if (cancelled) {
        return;
      } // Execute `callback` and update the `lastExec` timestamp.


      function exec() {
        lastExec = Date.now();
        callback.apply(self, arguments_);
      }
      /*
       * If `debounceMode` is true (at begin) this is used to clear the flag
       * to allow future `callback` executions.
       */


      function clear() {
        timeoutID = undefined;
      }

      if (debounceMode && !timeoutID) {
        /*
         * Since `wrapper` is being called for the first time and
         * `debounceMode` is true (at begin), execute `callback`.
         */
        exec();
      }

      clearExistingTimeout();

      if (debounceMode === undefined && elapsed > delay) {
        /*
         * In throttle mode, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      } else if (noTrailing !== true) {
        /*
         * In trailing throttle mode, since `delay` time has not been
         * exceeded, schedule `callback` to execute `delay` ms after most
         * recent execution.
         *
         * If `debounceMode` is true (at begin), schedule `clear` to execute
         * after `delay` ms.
         *
         * If `debounceMode` is false (at end), schedule `callback` to
         * execute after `delay` ms.
         */
        timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
      }
    }

    wrapper.cancel = cancel; // Return the wrapper function.

    return wrapper;
  }
  /* eslint-disable no-undefined */

  /**
   * Debounce execution of a function. Debouncing, unlike throttling,
   * guarantees that a function is only executed a single time, either at the
   * very beginning of a series of calls, or at the very end.
   *
   * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
   *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
   *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
   * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                  to `callback` when the debounced-function is executed.
   *
   * @returns {Function} A new, debounced function.
   */


  function debounce(delay, atBegin, callback) {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
  }

  exports.debounce = debounce;
  exports.throttle = throttle;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ })

/******/ });