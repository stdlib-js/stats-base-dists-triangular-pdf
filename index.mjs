// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var e=t;var s=n,i=t;var a=function(r,t,n,s){return e(r)||e(t)||e(n)||e(s)||t>s||s>n?NaN:r<t?0:r<s?2*(r-t)/((n-t)*(s-t)):r===s?2/(n-t):r<=n?2*(n-r)/((n-t)*(n-s)):0},o=function(r,t,n){var e,a,o;return i(r)||i(t)||i(n)||r>n||n>t?s(NaN):(e=(t-r)*(n-r),a=t-r,o=(t-r)*(t-n),function(s){if(i(s))return NaN;if(s<r)return 0;if(s<n)return 2*(s-r)/e;if(s===n)return 2/a;if(s<=t)return 2*(t-s)/o;return 0})};r(a,"factory",o);var u=a;export{u as default,o as factory};
//# sourceMappingURL=index.mjs.map