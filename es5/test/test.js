'use strict';

var TestRunner = require('test-runner');
var fsThen = require('../../');
var fs = require('fs');
var runner = new TestRunner();
var rimraf = require('rimraf');
var a = require('core-assert');

rimraf.sync('tmp');
fsThen.mkdirSync('tmp');

runner.test('.writeFile(): good', function () {
  return fsThen.writeFile('tmp/one', 'one').then(function () {
    return fs.existsSync('tmp/one');
  });
});

runner.test('.writeFile(): bad', function () {
  return fsThen.writeFile('asfsaffsa/one', 'one').then(function () {
    throw new Error("shouldn't reach here");
  }).catch(function (err) {
    if (err.code === 'ENOENT') {
      return;
    } else {
      throw err;
    }
  });
});

runner.test('.readFile(): good', function () {
  return fsThen.readFile('src/test/fixture/file.txt', 'utf-8').then(function (content) {
    a.strictEqual(content, 'test\n');
  });
});

runner.test('.readFile(): bad', function () {
  return fsThen.readFile('lidnfklgeroasosn').then(function (content) {
    throw new Error("shouldn't reach here");
  }).catch(function (err) {
    if (err.code === 'ENOENT') {
      return;
    } else {
      throw err;
    }
  });
});