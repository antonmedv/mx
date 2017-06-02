const parse = require('../parser/parse')
const compile = require('../../src/compiler')
const prettier = require('prettier')

module.exports = (code) => {
  const node = compile('file.mx', parse(code))
  return prettier.format(node.toString(), {
    semi: false,
    trailingComma: 'all',
  })
}
