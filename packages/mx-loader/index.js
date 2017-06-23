const loaderUtils = require('loader-utils')
const upperCamelCase = require('uppercamelcase')
const parser = require('mx/src/parser/index')
const compile = require('mx/src/compiler/index')

module.exports = function (source) {
  this.cacheable()
  const request = loaderUtils.getCurrentRequest(this)
  const filename = upperCamelCase(this.resourcePath.replace(/\.mx$/, ''))

  let node
  try {
    const ast = parser.parse(request, source)
    node = compile(ast, {name: filename})
  } catch (error) {
    this.emitError(error.message)
    return
  }

  const output = node.toStringWithSourceMap()
  output.map.setSourceContent(request, source)

  this.callback(null, output.code, output.map.toJSON())
}

