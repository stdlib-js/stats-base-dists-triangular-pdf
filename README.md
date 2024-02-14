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

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Triangular][triangular-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_pdf" align="center" raw="f(x;a,b,c)=\begin{cases} 0 & \text{for } x < a \\ \frac{2(x-a)}{(b-a)(c-a)} & \text{for } a \le x < c \\ \frac{2}{b-a} & \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} & \text{for } c < x \le b \\ 0 & \text{for } b < x \end{cases}" alt="Probability density function (PDF) for a triangular distribution."> -->

```math
f(x;a,b,c)=\begin{cases} 0 & \text{for } x < a \\ \frac{2(x-a)}{(b-a)(c-a)} & \text{for } a \le x < c \\ \frac{2}{b-a} & \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} & \text{for } c < x \le b \\ 0 & \text{for } b < x \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b,c)=\begin{cases} 0 &amp; \text{for } x &lt; a \\ \frac{2(x-a)}{(b-a)(c-a)} &amp; \text{for } a \le x &lt; c \\ \frac{2}{b-a} &amp; \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} &amp; \text{for } c &lt; x \le b \\ 0 &amp; \text{for } b &lt; x \end{cases}" data-equation="eq:triangular_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/pdf/docs/img/equation_triangular_pdf.svg" alt="Probability density function (PDF) for a triangular distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the lower limit and `b` is the upper limit and `c` is the mode.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-pdf@v0.2.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-pdf@v0.2.0-esm/index.mjs';
```

#### pdf( x, a, b, c )

Evaluates the [probability density function][pdf] (PDF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var y = pdf( 0.5, -1.0, 1.0, 0.0 );
// returns 0.5

y = pdf( 0.5, -1.0, 1.0, 0.5 );
// returns 1.0

y = pdf( -10.0, -20.0, 0.0, -2.0 );
// returns ~0.056

y = pdf( -2.0, -1.0, 1.0, 0.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = pdf( 0.0, NaN, 1.0, 0.5 );
// returns NaN

y = pdf( 0.0, 0.0, NaN, 0.5 );
// returns NaN

y = pdf( 2.0, 1.0, 0.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = pdf( 1.0, 1.0, 0.0, 1.5 );
// returns NaN

y = pdf( 1.0, 1.0, 0.0, -1.0 );
// returns NaN

y = pdf( 1.0, 0.0, -1.0, 0.5 );
// returns NaN
```

#### pdf.factory( a, b, c )

Returns a function for evaluating the [probability density function][pdf] (PDF) of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var mypdf = pdf.factory( 0.0, 10.0, 5.0 );
var y = mypdf( 2.0 );
// returns 0.08

y = mypdf( 12.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-pdf@v0.2.0-esm/index.mjs';

var a;
var b;
var c;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = randu() * 30.0;
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + ((b-a) * randu());
    y = pdf( x, a, b, c );
    console.log( 'x: %d, a: %d, b: %d, c: %d, f(x;a,b,c): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular-pdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular-pdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

</section>

<!-- /.links -->
