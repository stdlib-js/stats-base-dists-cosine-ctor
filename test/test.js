/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-cosine-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-cosine-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-cosine-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-cosine-cdf' );
var mgf = require( '@stdlib/stats-base-dists-cosine-mgf' );
var pdf = require( '@stdlib/stats-base-dists-cosine-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-cosine-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-cosine-skewness' );
var stdev = require( '@stdlib/stats-base-dists-cosine-stdev' );
var variance = require( '@stdlib/stats-base-dists-cosine-variance' );
var median = require( '@stdlib/stats-base-dists-cosine-median' );
var mode = require( '@stdlib/stats-base-dists-cosine-mode' );
var mean = require( '@stdlib/stats-base-dists-cosine-mean' );
var Cosine = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Cosine, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `mu` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Cosine( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `s` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Cosine( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `mu` and `s`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Cosine( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var cosine = new Cosine();
	t.strictEqual( cosine instanceof Cosine, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var cosine = new Cosine( 2.0, 4.0 );
	t.strictEqual( cosine instanceof Cosine, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var cosine = Cosine();
	t.strictEqual( cosine instanceof Cosine, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	cosine = Cosine( 2.0, 4.0 );
	t.strictEqual( cosine instanceof Cosine, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `mu`', function test( t ) {
	var cosine;

	cosine = new Cosine( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( cosine, 'mu' ), true, 'has property' );
	t.strictEqual( cosine.mu, 2.0, 'returns expected value' );

	cosine.mu = 3.0;
	t.strictEqual( cosine.mu, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `mu` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var cosine = new Cosine();
			cosine.mu = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `s`', function test( t ) {
	var cosine;

	cosine = new Cosine( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( cosine, 's' ), true, 'has property' );
	t.strictEqual( cosine.s, 4.0, 'returns expected value' );

	cosine.s = 3.0;
	t.strictEqual( cosine.s, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `s` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var cosine = new Cosine();
			cosine.s = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'kurtosis' ), true, 'has property' );

	cosine = new Cosine( 2.0, 4.0 );
	t.strictEqual( cosine.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'mean' ), true, 'has property' );

	cosine = new Cosine();
	t.strictEqual( cosine.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'median' ), true, 'has property' );

	cosine = new Cosine( 5.0, 2.0 );
	t.strictEqual( cosine.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'mode' ), true, 'has property' );

	cosine = new Cosine( 2.0, 3.0 );
	t.strictEqual( cosine.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'skewness' ), true, 'has property' );

	cosine = new Cosine( 0.5, 0.5 );
	t.strictEqual( cosine.skewness, skewness( 0.5, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'stdev' ), true, 'has property' );

	cosine = new Cosine( 3.0, 1.0 );
	t.strictEqual( cosine.stdev, stdev( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var cosine;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'variance' ), true, 'has property' );

	cosine = new Cosine( 3.0, 1.0 );
	t.strictEqual( cosine.variance, variance( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var cosine;
	var y;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cosine.prototype.cdf ), true, 'has method' );

	cosine = new Cosine();
	y = cosine.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var cosine;
	var y;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cosine.prototype.logcdf ), true, 'has method' );

	cosine = new Cosine();
	y = cosine.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var cosine;
	var y;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cosine.prototype.logpdf ), true, 'has method' );

	cosine = new Cosine();
	y = cosine.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var cosine;
	var y;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Cosine.prototype.mgf ), true, 'has method' );

	cosine = new Cosine();
	y = cosine.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var cosine;
	var y;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Cosine.prototype.pdf ), true, 'has method' );

	cosine = new Cosine();
	y = cosine.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var cosine;
	var y;

	t.strictEqual( hasOwnProp( Cosine.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Cosine.prototype.quantile ), true, 'has method' );

	cosine = new Cosine();
	y = cosine.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
