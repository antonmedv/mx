const visit = require('./visitor')

exports.collectProps = function collectProps(node) {
  const props = []
  if (node) {
    const nodes = [].concat(node)
    nodes.forEach(node => {
      visit(node, {
        Identifier: (node) => props.push(node.name)
      })
    })
  }
  return props
}
