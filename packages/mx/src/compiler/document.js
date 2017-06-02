const sourceNode = require('./sourceNode')

module.exports = {
  Document: ({node, compile, options}) => {
    const children = node.children.map(child => compile(child))

    return sourceNode(node.loc, [
      `import React from 'react'\n`,
      `\n`,
      `export default function () {\n`,
      `  return `, children, `\n`,
      `}\n`
    ])
  }
}
