module.exports = {
  Document: ({node, compile, scope, source}) => {
    const children = node.children.map(child => compile(child))

    let props = source``
    if (scope.props.size > 0) {
      props = source`{${[...scope.props]}}`
    }
    const imports = source`${scope.getImports()}`

    return source`
    import React from 'react'
    ${imports}

    export default function (${props}) {
      return ${children}
    }`
  }
}
