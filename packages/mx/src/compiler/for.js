module.exports = {
  ForStatement: ({node, compile, source}) => {
    const currentValue = node.currentValue
    const index = node.index ? source`, ${node.index}` : ''
    const expr = compile(node.expression)

    let children = node.children.map(child => compile(child))
    if (children.length > 1) {
      children = source`[${children}]`
    }

    return source`${expr}.map((${currentValue} ${index}) => ${children})`
  }
}
