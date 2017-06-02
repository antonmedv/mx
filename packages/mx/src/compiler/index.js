const document = require('./document')
const element = require('./element')

const compilers = Object.assign({},
  document,
  element
)

function next(parent, node, record, indent, options) {
  let path = {
    parent,
    node,
    record,
    indent,
    options,
    compile: (child, subrecord = record) => next(node, child, subrecord, indent + '  ', options)
  }

  if (node.type in compilers) {
    return compilers[node.type](path)
  } else {
    throw new Error(`Unknown node type "${node.type}".`)
  }
}

module.exports = function compile(name, ast, options) {
  const record = {}
  //let figure = new Figure(name)
  //figure.scope = globals
  return next(null, ast, record, '', options)
}
