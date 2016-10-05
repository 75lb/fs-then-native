'use strict'
const TestRunner = require('test-runner')
const fsThen = require('../../')
const fs = require('fs')
const runner = new TestRunner()
const rimraf = require('rimraf')
const a = require('core-assert')

rimraf.sync('tmp')
fsThen.mkdirSync('tmp')

runner.test('.writeFile(): good', function () {
  return fsThen.writeFile('tmp/one', 'one')
    .then(() => {
      return fs.existsSync('tmp/one')
    })
})

runner.test('.writeFile(): bad', function () {
  return fsThen.writeFile('asfsaffsa/one', 'one')
    .then(() => {
      throw new Error("shouldn't reach here")
    })
    .catch(err => {
      if (err.code === 'ENOENT') {
        return
      } else {
        throw err
      }
    })
})

runner.test('.readFile(): good', function () {
  return fsThen.readFile('src/test/fixture/file.txt', 'utf-8')
    .then(content => {
      a.strictEqual(content, 'test\n')
    })
})

runner.test('.readFile(): bad', function () {
  return fsThen.readFile('lidnfklgeroasosn')
    .then(content => {
      throw new Error("shouldn't reach here")
    })
    .catch(err => {
      if (err.code === 'ENOENT') {
        return
      } else {
        throw err
      }
    })
})
