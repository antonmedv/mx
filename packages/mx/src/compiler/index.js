const document = require('./document')
const element = require('./element')
const sourceNode = require('./sourceNode')

const compilers = Object.assign({},
  document,
  element
)

function createSource(loc) {
  return (codes, ...nodes) => {
    const node = sourceNode(loc, '')
    for (let i = 0; i < codes.length; i++) {
      node.add(sourceNode(loc, codes[i]))
      if (nodes && nodes[i]) {
        if (Array.isArray(nodes[i])) {
          node.add(sourceNode(loc, nodes[i]).join(', '))
        } else {
          node.add(nodes[i])
        }
      }
    }
    return node
  }
}

function next(parent, node, record, options) {
  let path = {
    parent,
    node,
    record,
    options,
    source: createSource(node.loc),
    compile: (child, subrecord = record) => next(node, child, subrecord, options)
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
  return next(null, ast, record, options)
}
