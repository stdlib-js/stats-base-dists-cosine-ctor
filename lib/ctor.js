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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isnan = require( '@stdlib/assert-is-nan' );
var kurtosis = require( '@stdlib/stats-base-dists-cosine-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-cosine-mean' );
var median = require( '@stdlib/stats-base-dists-cosine-median' );
var mode = require( '@stdlib/stats-base-dists-cosine-mode' );
var skewness = require( '@stdlib/stats-base-dists-cosine-skewness' );
var stdev = require( '@stdlib/stats-base-dists-cosine-stdev' );
var variance = require( '@stdlib/stats-base-dists-cosine-variance' );
var cdf = require( '@stdlib/stats-base-dists-cosine-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-cosine-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-cosine-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-cosine-mgf' );
var pdf = require( '@stdlib/stats-base-dists-cosine-pdf' );
var quantile = require( '@stdlib/stats-base-dists-cosine-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function cosineCDF( x ) {
	return cdf( x, this.mu, this.s );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function cosineLogCDF( x ) {
	return logcdf( x, this.mu, this.s );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function cosineLogPDF( x ) {
	return logpdf( x, this.mu, this.s );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function cosineMGF( t ) {
	return mgf( t, this.mu, this.s );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function cosinePDF( x ) {
	return pdf( x, this.mu, this.s );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function cosineQuantile( p ) {
	return quantile( p, this.mu, this.s );
}


// MAIN //

/**
* Cosine distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - location parameter
* @param {PositiveNumber} [s=1.0] - scale parameter
* @throws {TypeError} `s` must be a positive number
* @returns {Cosine} distribution instance
*
* @example
* var cosine = new Cosine( 1.0, 1.0 );
*
* var y = cosine.cdf( 1.5 );
* // returns ~0.909
*
* var mu = cosine.mean;
* // returns 1.0
*/
function Cosine() {
	var mu;
	var s;
	if ( !(this instanceof Cosine) ) {
		if ( arguments.length === 0 ) {
			return new Cosine();
		}
		return new Cosine( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		s = arguments[ 1 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', mu ) );
		}
		if ( !isPositive( s ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', s ) );
		}
	} else {
		mu = 0.0;
		s = 1.0;
	}
	defineProperty( this, 'mu', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return mu;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			mu = value;
		}
	});
	defineProperty( this, 's', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return s;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			s = value;
		}
	});
	return this;
}

/**
* Cosine distribution excess kurtosis.
*
* @name kurtosis
* @memberof Cosine.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.kurtosis;
* // returns ~-0.594
*/
setReadOnlyAccessor( Cosine.prototype, 'kurtosis', function get() {
	return kurtosis( this.mu, this.s );
});

/**
* Cosine distribution expected value.
*
* @name mean
* @memberof Cosine.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.mean;
* // returns 4.0
*/
setReadOnlyAccessor( Cosine.prototype, 'mean', function get() {
	return mean( this.mu, this.s );
});

/**
* Cosine distribution median.
*
* @name median
* @memberof Cosine.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.median;
* // returns 4.0
*/
setReadOnlyAccessor( Cosine.prototype, 'median', function get() {
	return median( this.mu, this.s );
});

/**
* Cosine distribution mode.
*
* @name mode
* @memberof Cosine.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Cosine.prototype, 'mode', function get() {
	return mode( this.mu, this.s );
});

/**
* Cosine distribution skewness.
*
* @name skewness
* @memberof Cosine.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( Cosine.prototype, 'skewness', function get() {
	return skewness( this.mu, this.s );
});

/**
* Cosine distribution standard deviation.
*
* @name stdev
* @memberof Cosine.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.stdev;
* // returns ~4.338
*/
setReadOnlyAccessor( Cosine.prototype, 'stdev', function get() {
	return stdev( this.mu, this.s );
});

/**
* Cosine distribution variance.
*
* @name variance
* @memberof Cosine.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var cosine = new Cosine( 4.0, 12.0 );
*
* var v = cosine.variance;
* // returns ~18.819
*/
setReadOnlyAccessor( Cosine.prototype, 'variance', function get() {
	return variance( this.mu, this.s );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Cosine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var cosine = new Cosine( 2.0, 4.0 );
*
* var v = cosine.cdf( 0.5 );
* // returns ~0.165
*/
setReadOnly( Cosine.prototype, 'cdf', cosineCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Cosine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var cosine = new Cosine( 2.0, 4.0 );
*
* var v = cosine.logcdf( 0.5 );
* // returns ~-1.799
*/
setReadOnly( Cosine.prototype, 'logcdf', cosineLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Cosine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var cosine = new Cosine( 2.0, 4.0 );
*
* var v = cosine.logpdf( 0.8 );
* // returns ~-1.617
*/
setReadOnly( Cosine.prototype, 'logpdf', cosineLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Cosine.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var cosine = new Cosine( 2.0, 4.0 );
*
* var v = cosine.mgf( 0.2 );
* // returns ~1.555
*/
setReadOnly( Cosine.prototype, 'mgf', cosineMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Cosine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var cosine = new Cosine( 2.0, 4.0 );
*
* var v = cosine.pdf( 0.8 );
* // returns ~0.198
*/
setReadOnly( Cosine.prototype, 'pdf', cosinePDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Cosine.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var cosine = new Cosine( 2.0, 4.0 );
*
* var v = cosine.quantile( 0.5 );
* // returns ~2.0
*/
setReadOnly( Cosine.prototype, 'quantile', cosineQuantile );


// EXPORTS //

module.exports = Cosine;
