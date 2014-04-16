## Flatten
Flatten an array of nested integer arrays.

### Usage
```js
var flatten = require("flatten");

flatten([1, 2, [3, 4, [5, 6], 7], 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### Test
To run tests, do `npm test`. Requires [mocha](http://visionmedia.github.io/mocha/). To install the development dependencies for testing use `npm install`