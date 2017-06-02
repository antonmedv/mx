module.exports = {
  Element: ({node, compile, source}) => {
    const name = /^[A-Z]/.test(node.name) ? node.name : `'${node.name}'`
    const children = node.children.map(child => compile(child))

    let attributes = source`null`

    if (node.attributes.length > 0) {
      attributes = source`{`
      node.attributes.forEach(attr => {
        attributes.add(
          source`${attr.name}: ${attr.value ? compile(attr.value): `null`},`
        )
      })
      attributes.add('}')
    }

    return source`React.createElement(${name}, ${attributes}, ${children})`
  }
}
