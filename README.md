<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cosine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Raised cosine distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Cosine = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-ctor@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-cosine-ctor/tags). For example,

```javascript
Cosine = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-ctor@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Cosine = require( 'path/to/vendor/umd/stats-base-dists-cosine-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Cosine;
})();
</script>
```

#### Cosine( \[mu, s] )

Returns a [raised cosine][cosine-distribution] distribution object.

```javascript
var cosine = new Cosine();

var mu = cosine.mean;
// returns 0.0
```

By default, `mu = 0.0` and `s = 1.0`. To create a distribution having a different `mu` (location parameter) and `s` (scale parameter), provide the corresponding arguments.

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var mu = cosine.mean;
// returns 2.0
```

* * *

## cosine

A [raised cosine][cosine-distribution] distribution object has the following properties and methods...

### Writable Properties

#### cosine.mu

Location parameter of the distribution.

```javascript
var cosine = new Cosine();

var mu = cosine.mu;
// returns 0.0

cosine.mu = 3.0;

mu = cosine.mu;
// returns 3.0
```

#### cosine.s

Scale parameter of the distribution. `s` **must** be a positive number.

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var s = cosine.s;
// returns 4.0

cosine.s = 3.0;

s = cosine.s;
// returns 3.0
```

* * *

### Computed Properties

#### Cosine.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var kurtosis = cosine.kurtosis;
// returns ~-0.594
```

#### Cosine.prototype.mean

Returns the [expected value][expected-value].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var mu = cosine.mean;
// returns 4.0
```

#### Cosine.prototype.median

Returns the [median][median].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var median = cosine.median;
// returns 4.0
```

#### Cosine.prototype.mode

Returns the [mode][mode].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var mode = cosine.mode;
// returns 4.0
```

#### Cosine.prototype.skewness

Returns the [skewness][skewness].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var skewness = cosine.skewness;
// returns 0.0
```

#### Cosine.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var s = cosine.stdev;
// returns ~4.338
```

#### Cosine.prototype.variance

Returns the [variance][variance].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var s2 = cosine.variance;
// returns ~18.819
```

* * *

### Methods

#### Cosine.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.cdf( 0.5 );
// returns ~0.165
```

#### Cosine.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.logcdf( 0.5 );
// returns ~-1.799
```

#### Cosine.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.logpdf( 0.8 );
// returns ~-1.617
```

#### Cosine.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.mgf( 0.2 );
// returns ~1.555
```

#### Cosine.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.pdf( 2.0 );
// returns 0.25
```

#### Cosine.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.quantile( 0.9 );
// returns ~3.929

y = cosine.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var cosine = new Cosine( 2.0, 4.0 );

var mean = cosine.mean;
// returns 2.0

var median = cosine.median;
// returns 2.0

var s2 = cosine.variance;
// returns ~2.091

var y = cosine.cdf( 0.8 );
// returns ~0.221

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-cosine-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-cosine-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-cosine-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-cosine-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-cosine-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-cosine-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-cosine-ctor/main/LICENSE

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
