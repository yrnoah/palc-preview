!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){},,function(e,n,t){"use strict";function o(){$("#main-loading").addClass("hide"),$(".waiting-loading").removeClass("waiting-loading")}t(0),document.addEventListener("DOMContentLoaded",function(){var e,n;n={},(e=["./images/Icon_logos.png","./images/Icon_headline.png","./images/Image_Welcome_1.png"]).forEach(function(t){var i=new Image;i.onload=function(){n[t]=!0,Object.keys(n).length===e.length&&o()},i.onerror=function(){n[t]=!1,Object.keys(n).length===e.length&&o()},i.src=t}),$(".btn-open-nav-menu").click(function(){$(".mobile-nav-list").hasClass("open")?$(".mobile-nav-list").removeClass("open"):$(".mobile-nav-list").addClass("open")}),$(".btn-open-nav-menu").on("tap",function(){$(".mobile-nav-list").hasClass("open")?$(".mobile-nav-list").removeClass("open"):$(".mobile-nav-list").addClass("open")})})}]);
//# sourceMappingURL=welcome.f14a3dcb6ed85f9561d3.js.map