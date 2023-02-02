// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isStartcase=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||f.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&i&&i.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"string"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&v.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var d=y()?function(t){var r,e,n;if(null==t)return b.call(t);e=t[j],r=g(t,j);try{t[j]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[j]=e:delete t[j],n}:function(t){return b.call(t)},_=String.prototype.valueOf;var m=y();function w(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function O(t){return p(t)||w(t)}l(O,"isPrimitive",p),l(O,"isObject",w);var h=Array.isArray?Array.isArray:function(t){return"[object Array]"===d(t)};var E=/./;function S(t){return"boolean"==typeof t}var P=Boolean.prototype.toString;var A=y();function T(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===d(t)))}function F(t){return S(t)||T(t)}function B(){return new Function("return this;")()}l(F,"isPrimitive",S),l(F,"isObject",T);var x="object"==typeof self?self:null,C="object"==typeof window?window:null,R="object"==typeof global?global:null;var G=function(t){if(arguments.length){if(!S(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return B()}if(x)return x;if(C)return C;if(R)return R;throw new Error("unexpected error. Unable to resolve global object.")}(),V=G.document&&G.document.childNodes,k=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;function X(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=d(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return X(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(L,"REGEXP",U),l(X,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!h(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(X));var D="function"==typeof E||"object"==typeof k||"function"==typeof V?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function I(t){return"function"===D(t)}var N,q=Object.getPrototypeOf;N=I(Object.getPrototypeOf)?q:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===d(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=N;var H=Object.prototype;function J(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!h(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!g(t,"constructor")&&g(r,"constructor")&&I(r.constructor)&&"[object Function]"===d(r.constructor)&&g(r,"isPrototypeOf")&&I(r.isPrototypeOf)&&(r===H||function(t){var r;for(r in t)if(!g(t,r))return!1;return!0}(t)))}function K(t,r){return J(r)?g(r,"flags")&&(t.flags=r.flags,!p(t.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+t.flags+"`."):g(r,"capture")&&(t.capture=r.capture,!S(t.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+t.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")}var Q="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function W(t){var r,e;if(arguments.length>0){if(e=K(r={},t))throw e;return r.capture?new RegExp("("+Q+")",r.flags):new RegExp(Q,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Y=W({capture:!0}),Z=W();return l(W,"REGEXP",Z),l(W,"REGEXP_CAPTURE",Y),function(t){return p(t)&&function(t){var r,e,n,o;for(r=!0,e="",o=0;o<t.length;o++)n=t.charAt(o),Z.test(n)?r=!0:r&&(n=n.toUpperCase(),r=!1),e+=n;return e}(t)===t}}));
//# sourceMappingURL=index.js.map