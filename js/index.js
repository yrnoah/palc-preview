!function(e){var n={};function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=1)}([function(e,n,o){},function(e,n,o){"use strict";function t(){$("#main-loading").addClass("hide"),$(".waiting-loading").removeClass("waiting-loading")}o(0),document.addEventListener("DOMContentLoaded",function(){var e,n;n={},(e=["./assest/Icon_logos.png","./assest/Image_homepage.png","./assest/Image_homepage_side.png","./assest/Icon_headline.png","./assest/Icon_home_calendar1.png","./assest/Icon_home_calendar2.png","./assest/Icon_home_calendar3.png","./assest/Icon_home_calendar4.png"]).forEach(function(o){var a=new Image;a.onload=function(){n[o]=!0,Object.keys(n).length===e.length&&t()},a.onerror=function(){n[o]=!1,Object.keys(n).length===e.length&&t()},a.src=o}),$(".btn-open-nav-menu").click(function(){$(".mobile-nav-list").hasClass("open")?$(".mobile-nav-list").removeClass("open"):$(".mobile-nav-list").addClass("open")})})}]);
//# sourceMappingURL=index.js.map
