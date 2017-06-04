module.exports = {
  Document: ({node, compile, scope, source}) => {
    const children = node.children.map(child => compile(child))

    let props = source``
    if (scope.props.size > 0) {
      props = source`{${[...scope.props]}}`
    }

    return source`
    import React from 'react'
    
    export default function (${props}) {
      return ${children}
    }`
  }
}
