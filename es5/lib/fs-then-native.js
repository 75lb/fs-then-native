'use strict';

var fs = require('fs');
var fsThen = Object.assign({}, fs);

fsThen.writeFile = function () {
  var _arguments = arguments;

  return new Promise(function (resolve, reject) {
    fs.writeFile.apply(fs, Array.prototype.slice.call(_arguments).concat([function (err) {
      if (err) reject(err);else resolve();
    }]));
  });
};

fsThen.readFile = function () {
  var _arguments2 = arguments;

  return new Promise(function (resolve, reject) {
    fs.readFile.apply(fs, Array.prototype.slice.call(_arguments2).concat([function (err, data) {
      if (err) reject(err);else resolve(data);
    }]));
  });
};

module.exports = fsThen;