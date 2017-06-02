module.exports = {
  Element: ({node, compile, source}) => {
    const name = /^[A-Z]/.test(node.name) ? node.name : `'${node.name}'`
    const children = node.children.map(child => compile(child))

    let attributes = source`null`

    // if (node.attributes.length > 0) {
    //   attributes = sourceNode(node.loc, '{')
    //   node.attributes.map({value} => compile(value))
    //   attributes += '}'
    // }

    return source`React.createElement(${name}, ${attributes}, ${children})`
  }
}
