const test = require('ava')
const parse = require('./parse')

  test('parse single tag', t => {
    const code = `
    div
    `
    t.snapshot(parse(code))
  })
