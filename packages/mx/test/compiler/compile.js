const parse = require('../parser/parse')
const compile = require('../../src/compiler')
const prettier = require('prettier')

module.exports = (code, options = {}) => {
  const node = compile(parse(code), options)
  return prettier.format(node.toString(), {
    semi: false,
    trailingComma: 'all',
  })
}
