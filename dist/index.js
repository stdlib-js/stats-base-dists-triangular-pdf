"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=v(function(h,a){
var u=require('@stdlib/math-base-assert-is-nan/dist');function y(e,r,n,t){return u(e)||u(r)||u(n)||u(t)||r>t||t>n?NaN:e<r?0:e<t?2*(e-r)/((n-r)*(t-r)):e===t?2/(n-r):e<=n?2*(n-e)/((n-r)*(n-t)):0}a.exports=y
});var N=v(function(j,q){
var l=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist');function F(e,r,n){var t,o,s;if(f(e)||f(r)||f(n)||e>n||n>r)return l(NaN);return t=(r-e)*(n-e),o=r-e,s=(r-e)*(r-n),m;function m(i){return f(i)?NaN:i<e?0:i<n?2*(i-e)/t:i===n?2/o:i<=r?2*(r-i)/s:0}}q.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),R=N();O(p,"factory",R);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
