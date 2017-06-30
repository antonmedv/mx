const test = require('ava')
const parse = require('./parse')

test('parse attribute with expressions', t => {
  const code = `
  button onClick={handleClick}
  `
  t.snapshot(parse(code))
})

test('parse objects in attributes', t => {
  const code = `
  body json={{root: {"key": "value", 'empty': {}}}} className="text"
  `
  t.snapshot(parse(code))
})

test('parse regexp in attributes' ,t => {
  const code = `
  p is={/[^]+/.test(foo) ? 'bar' : 'baz'}
  `
  t.snapshot(parse(code))
})
