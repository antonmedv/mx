const test = require('ava')
const compile = require('./compile')

test('compile single tag', t => {
  const code = `
  div
  `
  t.snapshot(compile(code))
})

test('compile html and components', t => {
  const code = `
  body
    Header title="hello world"
    Content
      section className="container"
    Footer value={value}
  `
  t.snapshot(compile(code))
})
