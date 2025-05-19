# JavaScript

was built in only 10 days in 1995 by a single person, Brendan Eich, who was tasked with building a simple scripting language
to be used in version 2 of the Netscape browser.
It was initially called LiveScript, but since the Java language was so popular at the time,
the name was changed to JavaScript - although Java and JavaScript are in no way related.

For the first few years, after it was built, JavaScript was a simple scripting language to add mouseover effects
and other interactivity. Those effects were being added to webpages using the <script> HTML element.

Inside each of the script elements, there could be some JavaScript code.
Due to the rule that HTML, CSS, and JavaScript must be backward compatible,
even the most advanced code written in JavaScript today ends up being written between those script tags. (??)

Over the years, JavaScript grew ever more powerful, and in recent times, it's continually touted as among the top three 
commonly used languages.

In 1996 Netscape made a deal with European Computer Manufacturers Association (ECMA) to draft
the specification of the JavaScript language, and in 1997 the first edition of the ECMAScript
specification was published as the ECMA-262 standard.

There have been more than 12 [ECMA-262 updates](https://github.com/tc39/ecma262).
1. ES1 (ECMAScript 1st Edition) - June 1997: The initial standard, providing the foundational syntax and core features of the JavaScript language.
1. ES2 (ECMAScript 2nd Edition) - June 1998: Minor editorial changes to align with ISO/IEC 16262.
1. ES3 (ECMAScript 3rd Edition) - December 1999: Introduced significant features like try...catch for error handling,
   regular expressions, switch statements, and improved support for internationalization.
1. ES5 (ECMAScript 5th Edition) - December 2009: Brought about important enhancements such as strict mode ("use strict"),
   `JSON`[*], and new methods for arrays (forEach, map, filter, etc.) and objects (Object.create, Object.defineProperty, etc.)
1. ES6 (ECMAScript 2015) - June 2015: A major revision introducing classes, modules, arrow functions,
   `let` and `const` declarations, promises, iterators and generators, template literals, destructuring, default parameters,
   [`Symbol` primitive](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/), and more.
1. ES2016 (ECMAScript 2016) - June 2016: Added the Array.prototype.includes() method and the exponentiation operator (**)
1. ES2017 (ECMAScript 2017) - June 2017: Introduced async/await for asynchronous operations, Object.values(), Object.entries(), and string padding methods.
1. ES2018 (ECMAScript 2018) - June 2018: Featured asynchronous iteration (for-await-of), rest/spread properties for objects, and promise finally.
1. ES2019 (ECMAScript 2019) - June 2019: Included Array.prototype.flat() and flatMap(), Object.fromEntries(), and String.prototype.trimStart()/trimEnd().
1. ES2020 (ECMAScript 2020) - June 2020: Introduced BigInt for arbitrary-precision integers, beyond the limitations of the
   standard Number type (-2⁵³..2⁵³), Promise.allSettled(), nullish coalescing operator (??), and optional chaining (?.)
1. ES2021 (ECMAScript 2021) - June 2021: Added String.prototype.replaceAll(), Promise.any(), logical assignment operators
   (&&=, ||=, ??=), and numeric separators (1_000_000)
1. ES2022 (ECMAScript 2022) - June 2022: Introduced top-level await, class fields and static class members, and Error.cause.
1. ES2023 (ECMAScript 2023) - June 2023: Added methods for finding from the end of an array (Array.prototype.findLast(),
   Array.prototype.findLastIndex()) and the ability to change array by copy (Array.prototype.toReversed(), toSorted(), toSpliced(), with())
1. ES2024 (ECMAScript 2024) - June 2024: [Pattern matching](https://javascript.plainenglish.io/whats-new-in-javascript-2025-48cff678dd5f),
   also Array.prototype.findLast() and findLastIndex() (already in some implementations), Atomics.waitAsync(),
   resizable ArrayBuffer and growable SharedArrayBuffer, and more.

You may see that after ES6, the ECMAScript standard shifted to annual releases with the year of finalization in the name.
So, instead of ES7, ES8, etc., we have ES2016, ES2017, and so on.

[*] Around 2001, Douglas Crockford came up with a data interchange format *JSON*, which is short for JavaScript Object
Notation. ECMAScript 5 added the built-in `JSON` object, which includes methods like `stringify()` and `parse()`.

Also in 2009 a developer named Ryan Dahl decided to use Google's JavaScript V8 engine and make it work standalone, e.g. on a server. 

In JSON
* all keys are double-quoted strings
* string properties are double-quoted too
* properties may be only of type
  * string
  * number
  * boolean
  * null
  * Object
  * array
* same double-quote and inner properties type rule applies to complex types (array and Object)
* If you try to stringify 
  * Function - the operation will silently fail
    ```js
    function fun0() { return 0; }
    let inv2 = { arr: [1, 2, null, false], f: fun0 };
    JSON.stringify(inv2); // '{"arr":[1,2,null,false]}'
    ```
  * BigInt numbers 123n will throw an error: Uncaught TypeError: Do not know how to serialize a BigInt.


## Links
* [JavaScript Primitive Values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [ECMA262 Specification](https://tc39.es/ecma262/)
* [Arrays are "list-like objects"](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
* [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
* [JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
* https://developer.mozilla.org/en-US/docs/Web/API/Event
* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

## Error handling
* SyntaxError - cannot be caught
* ReferenceError - thrown when, for example, one tries to use an undefined variable
* TypeError - "hello".pop() // Uncaught TypeError: "hello".pop is not a function
* RangeError - (10).toString(8); // to base-8 is '12' 
  (10).toString(100); - RangeError: toString() radix argument must be between 2 and 36
* AggregateError 
* Error 
* InternalError 
* URIError

### Error is an Object
```
try {
  let a = b; // ReferenceError
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // b is not defined
  console.log(error.stack);   // Stack trace
}
```

* [MDN functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
* [MDN `try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
* [Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), [`for...of` construct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of); built-in Iterables: String, Array, [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), Map, Set, and Segments
* [The `Math` object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
* [The `String` object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [MDN JavaScript error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
* [The `null` value on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [The `undefined` property on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## The functional programming paradigm

### First-class functions
A function in JavaScript is just another value that we can:
* pass to other functions
* save in a variable
* return from other functions

See also [MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

### Higher-order functions
A higher-order function is a function that has either one or both of the following characteristics:
* It accepts other functions as arguments (see below)
* It returns functions when invoked, treating them as values
```js
function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function getTheNum() { return 42 }

function addTwoNums(getNumber1, getNumber2) {
    return getNumber1() + getNumber2();
}

console.log(addTwoNums(getTheNum, getTheNum)/2 == 42);
console.log('addToNums(randomNum, randomNum) is ', addTwoNums(randomNum, randomNum));
```

### Pure functions
* A *pure function* returns the exact same result as long as it's given the same values.
* A *pure function* has no side-effects (no outer variable is changed; no "world" changes, e.g. via Browser
  API, console.log included; no use of `Math.random()` as that makes its behavior indeterministic)


