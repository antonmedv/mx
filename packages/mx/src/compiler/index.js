const sourceNode = require('./sourceNode')
const document = require('./document')
const element = require('./element')
const expression = require('./expression')
const text = require('./text')

const compilers = Object.assign({},
  document,
  element,
  expression,
  text
)

const createSource = (loc) => (codes, ...nodes) => {
  const root = sourceNode(loc, '')
  for (let i = 0; i < codes.length; i++) {
    root.add(sourceNode(loc, codes[i]))
    if (nodes && nodes[i]) {
      if (Array.isArray(nodes[i])) {
        root.add(sourceNode(loc, nodes[i]).join(', '))
      } else {
        root.add(nodes[i])
      }
    }
  }
  return root
}

function next(parent, node, record, options) {
  let path = {
    parent,
    node,
    record,
    options,
    source: createSource(node.loc),
    compile: (child) => next(node, child, record, options)
  }

  if (node.type in compilers) {
    return compilers[node.type](path)
  } else {
    throw new Error(`Unknown node type "${node.type}".`)
  }
}

module.exports = function compile(name, ast, options) {
  const record = {
    props: [],
  }
  //let figure = new Figure(name)
  //figure.scope = globals
  return next(null, ast, record, options)
}
