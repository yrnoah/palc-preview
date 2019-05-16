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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

document.addEventListener('DOMContentLoaded', function () {
  var itineraryCarouselInited = false;
  var itineraryCarousel = null;

  if (!itineraryCarouselInited) {
    if (!itineraryCarouselInited) {
      itineraryCarouselInited = true;
      itineraryCarousel = M.Carousel.init($('.carousel.carousel-slider.itinerary'), {
        fullWidth: true
      });
      setInterval(function () {
        itineraryCarousel.forEach(function (i) {
          return i.next();
        });
      }, 5000);
    }
    $('.itinerary-day1').addClass('itinerary-hide');
    $('.itinerary-day2').addClass('itinerary-hide');
    $('.itinerary-day3').addClass('itinerary-hide');
    $('.itinerary-day4').addClass('itinerary-hide');
  }

  // main tab 点击监听
  $('.tab > a').click(function (event) {
    var target = event.currentTarget;
    if (target.id === 'tab-itinerary' && itineraryCarousel) {
      $('.itinerary-day1').addClass('itinerary-hide');
      $('.itinerary-day2').addClass('itinerary-hide');
      $('.itinerary-day3').addClass('itinerary-hide');
      $('.itinerary-day4').addClass('itinerary-hide');
      $('.itinerary-main').removeClass('itinerary-hide');
    }
  });

  $('.itinerary-tab-button').click(function (event) {
    var target = event.currentTarget;
    if (target && target.dataset) {
      var tid = parseInt(target.dataset.id, 10);
      switch (tid) {
        default:
          break;
        case 1:
          // if (itineraryCarouselInited && !itineraryCarouselInterval && itineraryCarousel) {
          //   itineraryCarouselInterval = setInterval(() => {
          //     itineraryCarousel[0].next();
          //   }, 5000);
          // }
          $('.itinerary-day1').removeClass('itinerary-hide');
          $('.itinerary-day2').addClass('itinerary-hide');
          $('.itinerary-day3').addClass('itinerary-hide');
          $('.itinerary-day4').addClass('itinerary-hide');
          $('.itinerary-main').addClass('itinerary-hide');
          break;
        case 2:
          $('.itinerary-day2').removeClass('itinerary-hide');
          $('.itinerary-day1').addClass('itinerary-hide');
          $('.itinerary-day3').addClass('itinerary-hide');
          $('.itinerary-day4').addClass('itinerary-hide');
          $('.itinerary-main').addClass('itinerary-hide');
          break;
        case 3:
          $('.itinerary-day3').removeClass('itinerary-hide');
          $('.itinerary-day2').addClass('itinerary-hide');
          $('.itinerary-day1').addClass('itinerary-hide');
          $('.itinerary-day4').addClass('itinerary-hide');
          $('.itinerary-main').addClass('itinerary-hide');
          break;
        case 4:
          $('.itinerary-day4').removeClass('itinerary-hide');
          $('.itinerary-day2').addClass('itinerary-hide');
          $('.itinerary-day3').addClass('itinerary-hide');
          $('.itinerary-day1').addClass('itinerary-hide');
          $('.itinerary-main').addClass('itinerary-hide');
          break;
      }
    }
  });
  $('.btn-open-nav-menu').click(function () {
    if ($('.mobile-nav-list').hasClass('open')) {
      $('.mobile-nav-list').removeClass('open');
    } else {
      $('.mobile-nav-list').addClass('open');
    }
  });
  $('.btn-open-nav-menu').on('tap', function () {
    if ($('.mobile-nav-list').hasClass('open')) {
      $('.mobile-nav-list').removeClass('open');
    } else {
      $('.mobile-nav-list').addClass('open');
    }
  });
  preloadImages();
});

function preloadImages() {
  var arr = ['./images/Icon_logos.png', './images/Icon_headline.png', './images/Image_D1_Welcome_1.png', './images/Image_D1_Welcome_2.png', './images/Image_D1_Welcome_3.png', './images/Image_D2_Itinenary_1.png', './images/Image_D2_Itinenary_2.png', './images/Image_D2_Itinenary_3.png', './images/Image_D3_Itinenary_1.png', './images/Image_D3_Itinenary_2.png', './images/Image_D3_Itinenary_3.png', './images/Image_D3_Itinenary_4.png', './images/Image_departure_1.png'];
  var result = {};
  arr.forEach(function (url) {
    var image = new Image();
    image.onload = function () {
      result[url] = true;
      if (Object.keys(result).length === arr.length) finishMainLoading();
    };
    image.onerror = function () {
      result[url] = false;
      if (Object.keys(result).length === arr.length) finishMainLoading();
    };
    image.src = url;
  });
}

function finishMainLoading() {
  $('#main-loading').addClass('hide');
  $('.waiting-loading').removeClass('waiting-loading');
}

/***/ })
/******/ ]);
//# sourceMappingURL=itinerary.js.map