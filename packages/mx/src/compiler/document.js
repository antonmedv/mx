module.exports = {
  Document: ({node, compile, scope, source, options}) => {
    const children = node.children.map(child => compile(child))

    let props = source``
    if (scope.props.size > 0) {
      props = source`{${[...scope.props]}}`
    }
    const imports = source`${scope.getImports()}`

    const func = options.name
      ? source`
        const ${options.name} = (${props}) => {
          return ${children}
        }
        
        export default ${options.name}
        `
      : source`
        export default function (${props}) {
          return ${children}
        }
        `

    return source`
    import React from 'react'
    ${imports}
    ${func}
    `
  }
}
