module.exports = {
  ImportStatement: ({node, source, scope}) => {
    let identifier = node.identifier
    if (Array.isArray(identifier)) {
      scope.add(...identifier)
      identifier = `{${node.identifier.join(', ')}}`
    } else {
      scope.add(identifier)
    }

    scope.imports.push(source`import ${identifier} from ${node.path}`)
  }
}
