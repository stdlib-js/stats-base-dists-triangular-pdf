// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function e(t,r,e,s){return n(t)||n(r)||n(e)||n(s)||r>s||s>e?NaN:t<r?0:t<s?2*(t-r)/((e-r)*(s-r)):t===s?2/(e-r):t<=e?2*(e-t)/((e-r)*(e-s)):0}function s(t,e,s){var i,o,u;return n(t)||n(e)||n(s)||t>s||s>e?r(NaN):(i=(e-t)*(s-t),o=e-t,u=(e-t)*(e-s),function(r){if(n(r))return NaN;if(r<t)return 0;if(r<s)return 2*(r-t)/i;if(r===s)return 2/o;if(r<=e)return 2*(e-r)/u;return 0})}t(e,"factory",s);export{e as default,s as factory};
//# sourceMappingURL=index.mjs.map
