const {AttributeNode, LiteralNode} = require('../parser').ast

module.exports = {
  Element: ({node, compile, source, options}) => {
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

    const {jsx} = options
    const children = node.children.map(child => compile(child))
    let attributes = jsx ? source`` : source`null`

    if (node.attributes.length > 0) {
      jsx || (attributes = source`{`)

      node.attributes.forEach(attr => {
        attributes.add(
          jsx ?
            attr.value ? source`${attr.name}={${compile(attr.value)}} ` : source`${attr.name} ` :
            source`${attr.name}: ${attr.value ? compile(attr.value) : `null`},`
        )
      })

      jsx || attributes.add('}')
    }

    return jsx ?
      source`<${name} ${attributes}>${children}</${name}>` :
      source`React.createElement(${name}, ${attributes}, ${children})`
  }
}
