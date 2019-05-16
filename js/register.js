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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var BASE_URL = 'https://92.obbalab.com:9443/palc/';

document.addEventListener('DOMContentLoaded', function () {
  preloadImages();
  try {
    prepareLogin();
  } catch (e) {
    console.log(e);
  }
});

function preloadImages() {
  var arr = ['./images/Image_homepage.png'];
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

function prepareLogin() {
  var loading = false;
  var submitting = false;
  var rootUrl = window.location.pathname.replace('/register.html', '');
  var store = {
    // login request resp
    reg_id: '',
    first_name: '',
    last_name: '',
    full_name: '',
    preferred_name: '',
    country: '',
    email: '',
    company: '',
    delegate_type: '',
    job_title: '',
    time_qualify: '',
    gender: '',
    salutation: '',
    nationality: '',
    birth: '',
    mobile: '',
    tshirt_size: '',
    dietary_requirement: '',
    other_dietary: '',
    remarks: '',
    attending: '',
    require_transfer: ''
  };
  $('#login-form').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();
    login(store, submitting);
  });
  $('#confirm-terms').click(function () {
    var val = $('#confirm-terms-checkbox').is(":checked");
    if (!val) return;
    $('.terms-container').addClass('hide');
    $('.register-container.info1').removeClass('hide');
  });
  $('.btn-back-to-terms').click(function () {
    $('.terms-container').removeClass('hide');
    $('.register-container.info1').addClass('hide');
  });
  $('.btn-register-next').click(function () {
    $('.register-container.info1').addClass('hide');
    $('.register-container.info2').removeClass('hide');
  });
  $('.btn-back-to-person-info1').click(function () {
    $('.register-container.info1').removeClass('hide');
    $('.register-container.info2').addClass('hide');
  });
  $('.btn-back-to-person-info2').click(function () {
    $('.register-container.info2').removeClass('hide');
    $('.register-container.review').addClass('hide');
  });
  $('#info2-dietary').change(function () {
    var val = $('#info2-dietary').val();
    if (val === 'Other') {
      $('#register-other-dietary').removeClass('hide');
      $('#review-other-die-container').removeClass('hide');
      $('#info2-other-dietary').attr('required', true);
    } else {
      $('#register-other-dietary').addClass('hide');
      $('#review-other-die-container').addClass('hide');
      $('#info2-other-dietary').removeAttr('required');
      $('#info2-other-dietary').val('');
    }
  });
  $('#register-form').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var time_qualify = $('#info2-time-qualify').val();
    var gender = $('#is-female').is(":checked") ? 'Female' : 'Male';
    var salutation = $('#info2-salutation').val();
    var familyName = $('#info2-family-name').val() || '';
    var givenName = $('#info2-given-name').val() || '';
    var fullName = $('#info2-full-name').val() || '';
    var preferredName = $('#info2-preferred-name').val() || '';
    var nationality = $('#info2-nationality').val() || '';
    var birth = $('#info2-birth').val() || '';
    var areaNo = $('#info2-mobile-area').val() || '';
    var countryNo = $('#info2-mobile-country').val() || '';
    var phoneNo = $('#info2-mobile-no').val() || '';
    var tShirtSize = $('#info2-t-shirt-size').val() || '';
    var dietary = $('#info2-dietary').val() || '';
    var otherDietary = $('#info2-other-dietary').val() || '';
    var remarks = $('#info2-remarks').val() || '';
    var attending = $('#attending').is(":checked") ? 'Yes' : 'No';
    var transfer = $('#transfer').is(":checked") ? 'Yes' : 'No';
    if (!areaNo || !countryNo || !phoneNo) return;
    store.time_qualify = time_qualify;
    $('#review-time-qualify').val(store.time_qualify);
    store.gender = gender;
    $('#review-gender').val(store.gender);
    store.salutation = salutation;
    $('#review-salutation').val(store.salutation);
    store.last_name = familyName;
    $('#review-family-name').val(store.last_name);
    store.first_name = givenName;
    $('#review-given-name').val(store.first_name);
    store.full_name = fullName;
    $('#review-full-name').val(store.full_name);
    store.preferred_name = preferredName;
    $('#review-preferred-name').val(store.preferred_name);
    store.nationality = nationality;
    $('#review-nationality').val(store.nationality);
    store.birth = birth;
    $('#review-birth').val(store.birth);
    store.mobile = countryNo + '-' + areaNo + '-' + phoneNo;
    $('#review-mobile').val(store.mobile);
    store.tshirt_size = tShirtSize;
    $('#review-t-shirt-size').val(store.tshirt_size);
    store.dietary_requirement = dietary;
    $('#review-dietary').val(store.dietary_requirement);
    store.other_dietary = otherDietary;
    $('#review-other-dietary').val(store.other_dietary);
    store.remarks = remarks;
    $('#review-remarks').val(store.remarks);
    store.attending = attending;
    $('#review-attending').val(store.attending);
    store.require_transfer = transfer;
    $('#review-transfer').val(store.require_transfer);
    $('.register-container.info2').addClass('hide');
    $('.register-container.review').removeClass('hide');
  });
  $('.btn-submit-register').click(function () {
    var agree = $('#confirm-review-checkbox').is(":checked");
    if (!agree || submitting) return;
    submitting = true;
    $('#register-text').addClass('hide');
    $('#register-loading').removeClass('hide');
    try {
      var errEle = $('.tip.register.err');
      errEle.removeClass('active');
      var submitRes = $.post(BASE_URL + 'register', {
        reg_id: store.reg_id,
        time_qualify: store.time_qualify,
        gender: store.gender,
        salutation: store.salutation,
        last_name: store.last_name,
        first_name: store.first_name,
        full_name: store.full_name,
        perferred_name: store.preferred_name,
        nationality: store.nationality,
        brith: store.birth,
        mobile: store.mobile,
        tshirt_size: store.tshirt_size,
        dietary_requirement: store.dietary_requirement,
        other_dietary: store.other_dietary,
        remarks: store.remarks,
        attending: store.attending,
        require_transfer: store.require_transfer
      });
      submitRes.done(function (data) {
        submitting = false;
        $('#register-text').removeClass('hide');
        $('#register-loading').addClass('hide');
        if (data.result) {
          $('.register-container.review').addClass('hide');
          $('.register-container.complete').removeClass('hide');
          setTimeout(function () {
            if (window.location.pathname !== rootUrl) window.location.pathname = rootUrl;
          }, 20000);
        } else {
          var errMsg = data.message.replace(/\<p>/gm, '').replace(/<\/p>/gm, '') || 'Submit failed.';
          errEle.text(errMsg);
          errEle.addClass('active');
        }
      });
    } catch (e) {
      console.log(e, 'submit register');
    }
  });
}

function login(store, submitting) {
  if (submitting) return;
  var email = $('#loginEmail').val();
  var password = $('#loginPassword').val();
  var errEle = $('.tip.err');
  if (!email) {
    errEle.text('Please input email.');
    errEle.addClass('active');
    return;
  }
  if (!password) {
    errEle.text('Please input password.');
    errEle.addClass('active');
    return;
  }
  errEle.removeClass('active');
  errEle.text('');
  submitting = true;
  $('#login-text').addClass('hide');
  $('#login-loading').removeClass('hide');
  var loginResp = $.post(BASE_URL + 'login', { email: email, password: password });
  loginResp.done(function (data) {
    submitting = false;
    $('#login-text').removeClass('hide');
    $('#login-loading').addClass('hide');
    if (data.result && data.data) {
      var resp = data.data;
      store.reg_id = resp.reg_id || '';
      store.country = resp.country || '';
      $('#info1-country').val(store.country);
      store.first_name = resp.first_name || '';
      if (store.first_name) $('#info2-given-name').val(store.first_name);
      store.last_name = resp.last_name || '';
      if (store.last_name) $('#info2-family-name').val(store.last_name);
      store.full_name = resp.full_name || '';
      if (store.full_name) $('#info2-full-name').val(store.full_name);
      store.preferred_name = resp.perferred_name || '';
      if (store.preferred_name) $('#info2-preferred-name').val(store.preferred_name);
      store.email = resp.email || '';
      $('#info1-email').val(store.email);
      store.company = resp.company || '';
      $('#info1-company').val(store.company);
      store.delegate_type = resp.delegate_type || '';
      $('#info1-delegate-type').val(store.delegate_type);
      store.job_title = resp.job_title || '';
      $('#info1-job-title').val(store.job_title);
      store.time_qualify = resp.time_qualify || '';
      if (store.time_qualify) {
        $('#review-time-qualify').val(store.time_qualify);
        $('#info2-time-qualify').val(store.time_qualify);
      }
      store.gender = resp.gender || '';
      if (store.gender) {
        $('#review-gender').val(store.gender);
        if (store.gender === 'Female') {
          $('#is-female').attr('checked', true);
        } else {
          $('#is-male').attr('checked', true);
        }
      }
      store.salutation = resp.salutation || '';
      if (store.salutation) {
        $('#review-salutation').val(store.salutation);
        $('#info2-salutation').val(store.salutation);
      }
      store.nationality = resp.nationality || '';
      if (store.nationality) {
        $('#review-nationality').val(store.nationality);
        $('#info2-nationality').val(store.nationality);
      }
      store.birth = resp.brith || '';
      if (store.birth) {
        $('#info2-birth').val(store.birth);
        $('#review-birth').val(store.birth);
      }
      store.mobile = resp.mobile || '';
      if (store.mobile) {
        var mobileArr = store.mobile.split('-') || [];
        $('#review-mobile').val(store.mobile);
        $('#info2-mobile-country').val(mobileArr[0] || '');
        $('#info2-mobile-area').val(mobileArr[1] || '');
        $('#info2-mobile-no').val(mobileArr[2] || '');
      }
      store.tshirt_size = resp.tshirt_size || '';
      if (store.tshirt_size) {
        $('#review-t-shirt-size').val(store.tshirt_size);
        $('#info2-t-shirt-size').val(store.tshirt_size);
      }
      store.dietary_requirement = resp.dietary_requirement || '';
      if (store.dietary_requirement) {
        $('#review-dietary').val(store.dietary_requirement);
        $('#info2-dietary').val(store.dietary_requirement);
        if (store.dietary_requirement === 'Other') {
          $('#register-other-dietary').removeClass('hide');
          $('#review-other-die-container').removeClass('hide');
          $('#info2-other-dietary').attr('required', true);
        }
      }
      store.other_dietary = resp.other_dietary || '';
      if (store.other_dietary) {
        $('#review-other-dietary').val(store.other_dietary);
        $('#info2-other-dietary').val(store.other_dietary);
      }
      store.remarks = resp.remarks || '';
      if (store.remarks) {
        $('#info2-remarks').val(store.remarks);
        $('#review-remarks').val(store.remarks);
      }
      store.attending = resp.attending || '';
      if (store.attending) {
        $('#review-attending').val(store.attending);
        if (store.attending === 'Yes') {
          $('#attending').attr('checked', true);
        } else {
          $('#not-attending').attr('checked', true);
        }
      }
      store.require_transfer = resp.require_transfer || '';
      if (store.require_transfer) {
        $('#review-transfer').val(store.require_transfer);
        if (store.require_transfer === 'Yes') {
          $('#transfer').attr('checked', true);
        } else {
          $('#not-transfer').attr('checked', true);
        }
      }
      $('.login-container').addClass('hide');
      $('.terms-container').removeClass('hide');
      var elems = document.querySelectorAll('select', { coverTrigger: false });
      var dateElems = document.querySelectorAll('.datepicker');
      M.FormSelect.init(elems);
      M.Datepicker.init(dateElems);
      $('.modal.datepicker-modal').css({ display: 'none', opacity: 0 }); // fix init style err
    } else {
      var errMsg = data.message.replace(/\<p>/gm, '').replace(/<\/p>/gm, '') || 'Login failed.';
      errEle.text(errMsg);
      errEle.addClass('active');
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=register.js.map