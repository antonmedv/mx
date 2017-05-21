const test = require('ava')
const dedent = require('dedent')
const parse = require('./parse')

test('parse single tag', t => {
  const code = `
  div
  `
  t.snapshot(parse(code))
})

test('parse indent and dedent', t => {
  const code = `
  body
    header
      h1
    section
      div
      p
    footer
  `
  t.snapshot(parse(code))
})

test('ignore empty lines', t => {
  const code = `
  body
    div
      
      h1
    
    footer
  `
  t.snapshot(parse(code))
})

test('parse attributes', t => {
  const code = `
  div id="code" class="cool"
  `
  t.snapshot(parse(code))
})

