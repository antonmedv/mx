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

test('compile import statements', t => {
  const code = `
  body
    header.header
      import {one, two, three} from "four.js"
    import test from "test-pkg"
    import * as Constructor from "Module"
    footer
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

test('compile conditions', t => {
  const code = `
  if foo == "bar"
    p Foo is bar
  else
    p Nope
  `
  t.snapshot(compile(code))
})

test('compile loop', t => {
  const code = `
  for name, index of something
    input value={name}
  `
  t.snapshot(compile(code))
})

test('compile form tag', t => {
  const code = `
  form
  `
  t.snapshot(compile(code))
})
