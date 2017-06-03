const {AttributeNode, LiteralNode} = require('../parser').ast

module.exports = {
  Element: ({node, compile, source}) => {
    // All components must be capitalized,
    // otherwise start transforming node
    // name to tag name and class name.
    let name
    if (/^[A-Z]/.test(node.name)) {
      name = node.name
    } else {
      let [tag, ...classNames] = node.name.split('.')
      name = tag === '' ? source`'div'` : source`'${tag}'`
      if (classNames.length > 0) {
        node.attributes.push(
          new AttributeNode(
            'className',
            new LiteralNode(JSON.stringify(classNames.join(' ')), node.loc),
            node.loc
          )
        )
      }
    }

    const children = node.children.map(child => compile(child))

    let attributes = source`null`

    if (node.attributes.length > 0) {
      attributes = source`{`
      node.attributes.forEach(attr => {
        attributes.add(
          source`${attr.name}: ${attr.value ? compile(attr.value) : `null`},`
        )
      })
      attributes.add('}')
    }

    return source`React.createElement(${name}, ${attributes}, ${children})`
  }
}
