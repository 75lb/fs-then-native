[![view on npm](http://img.shields.io/npm/v/fs-then-native.svg)](https://www.npmjs.org/package/fs-then-native)
[![npm module downloads](http://img.shields.io/npm/dt/fs-then-native.svg)](https://www.npmjs.org/package/fs-then-native)
[![Build Status](https://travis-ci.org/75lb/fs-then-native.svg?branch=master)](https://travis-ci.org/75lb/fs-then-native)

[![Dependency Status](https://david-dm.org/75lb/fs-then-native.svg)](https://david-dm.org/75lb/fs-then-native)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# fs-then-native

The Node.js fs library with a Promise API.

## Synopsis

```js
fs.readFile('file.txt', 'utf8')
  .then(content => {
    // process file content
  })
  .catch(err => {
    // handle exception
  })
```

* * *

&copy; 2016 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
