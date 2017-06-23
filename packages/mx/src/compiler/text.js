module.exports = {
  Text: ({node, source, compile}) => {
    const children = node.children.map(child => compile(child))
    return source`[${children}]`
  }
}
