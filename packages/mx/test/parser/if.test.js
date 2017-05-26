const test = require('ava')
const parse = require('./parse')

test('parse if/else', t => {
  const code = `
  if foo == "value"
    p Foo is value
  else if bar
    p Bar is ok
  else
    p Okay
  `
  t.snapshot(parse(code))
})
