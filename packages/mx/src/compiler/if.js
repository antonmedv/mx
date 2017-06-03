module.exports = {
  IfStatement: ({node, compile, source}) => {
    const cond = compile(node.cond)

    let then = node.then.map(child => compile(child))
    if (then.length > 1) {
      then = source`[${then}]`
    }

    if (node.otherwise) {
      let otherwise = node.otherwise.map(child => compile(child))
      if (otherwise.length > 1) {
        otherwise = source`[${otherwise}]`
      }

      return source`(${cond} ? ${then} : ${otherwise})`
    } else {
      return source`(${cond} && ${then})`
    }
  }
}
