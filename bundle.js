// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).pdf=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;var l=r,c=function(e,t,r){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||f.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),_&&u&&u.call(e,t,r.set),e},p=t()?l:c;var _=function(e){return e!=e},d=_;var b=function(e){return function(){return e}},y=_;var s=function(e,t,r,n){return d(e)||d(t)||d(r)||d(n)||t>n||n>r?NaN:e<t?0:e<n?2*(e-t)/((r-t)*(n-t)):e===n?2/(r-t):e<=r?2*(r-e)/((r-t)*(r-n)):0};return function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}(s,"factory",(function(e,t,r){var n,o,i;return y(e)||y(t)||y(r)||e>r||r>t?b(NaN):(n=(t-e)*(r-e),o=t-e,i=(t-e)*(t-r),function(u){if(y(u))return NaN;if(u<e)return 0;if(u<r)return 2*(u-e)/n;if(u===r)return 2/o;if(u<=t)return 2*(t-u)/i;return 0})})),s}));
//# sourceMappingURL=bundle.js.map