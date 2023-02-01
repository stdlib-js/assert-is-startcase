<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# isStartcase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a startcase string.



<section class="usage">

## Usage

```javascript
import isStartcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-startcase@deno/mod.js';
```

#### isStartcase( value )

Tests if a `value` is a startcase `string` (i.e., the first character of each word is uppercase).

```javascript
var bool = isStartcase( 'Beep Boop' );
// returns true

bool = isStartcase( 'Beep and Boop' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function validates that a `value` is a `string`. For all other types, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isStartcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-startcase@deno/mod.js';

var bool = isStartcase( 'Beep Boop' );
// returns true

bool = isStartcase( 'BeepBoop123' );
// returns true

bool = isStartcase( 'beep Boop' );
// returns false

bool = isStartcase( 'beep' );
// returns false

bool = isStartcase( 'beepBoop' );
// returns false

bool = isStartcase( null );
// returns false
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-startcase.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-startcase

[test-image]: https://github.com/stdlib-js/assert-is-startcase/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-startcase/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-startcase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-startcase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-startcase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-startcase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-startcase/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-startcase/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-startcase/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-startcase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-startcase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
