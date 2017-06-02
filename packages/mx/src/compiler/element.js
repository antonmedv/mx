const sourceNode = require('./sourceNode')

module.exports = {
  Element: ({node, compile}) => {
    const children = node.children.map(child => compile(child))

    //node.attributes.map((child) => compile(child));

    return sourceNode(node.loc, [
      `React.createElement('${node.name}', null,\n`,
      sourceNode(children).join(','),
      `)`
    ])

  }
}
