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

test('compile class name from tag', t => {
  const code = `
  .class-name
  article.title.is-active
  `
  t.snapshot(compile(code))
})

test('compile text', t => {
  const code = `
  p hello world!
  p.
    here goes a long
    block of text
  div
    | Also a text
  `
  t.snapshot(compile(code))
})
