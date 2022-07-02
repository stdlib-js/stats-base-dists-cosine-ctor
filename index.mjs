// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-kurtosis@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-mean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-median@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-mode@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-skewness@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-stdev@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-variance@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-cdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-logcdf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-logpdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-mgf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-pdf@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-quantile@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function x(){var t,e;if(!(this instanceof x))return 0===arguments.length?new x:new x(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!n(t=arguments[0])||r(t))throw new TypeError(v("invalid argument. Location parameter must be a number. Value: `%s`.",t));if(!i(e))throw new TypeError(v("0Th7u",e))}else t=0,e=1;return s(this,"mu",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!n(s)||r(s))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",s));t=s}}),s(this,"s",{configurable:!1,enumerable:!0,get:function(){return e},set:function(s){if(!i(s))throw new TypeError(v("invalid assignment. Must be a positive number. Value: `%s`.",s));e=s}}),this}e(x.prototype,"kurtosis",(function(){return o(this.mu,this.s)})),e(x.prototype,"mean",(function(){return m(this.mu,this.s)})),e(x.prototype,"median",(function(){return d(this.mu,this.s)})),e(x.prototype,"mode",(function(){return p(this.mu,this.s)})),e(x.prototype,"skewness",(function(){return h(this.mu,this.s)})),e(x.prototype,"stdev",(function(){return u(this.mu,this.s)})),e(x.prototype,"variance",(function(){return a(this.mu,this.s)})),t(x.prototype,"cdf",(function(s){return l(s,this.mu,this.s)})),t(x.prototype,"logcdf",(function(s){return c(s,this.mu,this.s)})),t(x.prototype,"logpdf",(function(s){return f(s,this.mu,this.s)})),t(x.prototype,"mgf",(function(s){return j(s,this.mu,this.s)})),t(x.prototype,"pdf",(function(s){return b(s,this.mu,this.s)})),t(x.prototype,"quantile",(function(s){return g(s,this.mu,this.s)}));export{x as default};
//# sourceMappingURL=index.mjs.map
