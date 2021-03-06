const sourceNode = require('./sourceNode')
const Scope = require('./scope')
const document = require('./document')
const element = require('./element')
const expression = require('./expression')
const text = require('./text')
const cond = require('./if')
const loop = require('./for')
const include = require('./import')

const compilers = Object.assign({},
  document,
  element,
  expression,
  text,
  cond,
  loop,
  include
)

function compile(ast, options = {}) {
  const scope = new Scope()
  return next(null, ast, scope, options)
}

function next(parent, node, scope, options) {
  let path = {
    parent,
    node,
    scope,
    options,
    source: createSource(node.loc),
    compile: (child, subscope = scope) => next(node, child, subscope, options)
  }

  if (node.type in compilers) {
    return compilers[node.type](path)
  } else {
    throw new Error(`Unknown node type "${node.type}".`)
  }
}

function createSource(loc) {
  return (codes, ...nodes) => {
    const root = sourceNode(loc, '')
    for (let i = 0; i < codes.length; i++) {
      root.add(sourceNode(loc, codes[i]))
      if (nodes && nodes[i]) {
        if (Array.isArray(nodes[i])) {
          /*
           We filter nodes[i] for undefineds because some of compilers
           (i.e. import compiler) may not return anything
          */
          root.add(sourceNode(loc, nodes[i].filter(node => !!node)).join(', '))
        } else {
          root.add(nodes[i])
        }
      }
    }
    return root
  }
}

module.exports = compile
