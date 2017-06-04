const visit = require('./visitor')

class Scope {
  constructor(parent = null) {
    this.parent = parent
    this.children = []
    this.props = new Set()
    this.vars = new Set()
  }

  create() {
    const sub = new Scope(this)
    this.children.push(sub)
    return sub
  }

  add(...vars) {
    vars.forEach(x => this.vars.add(x))
  }

  collectProps(node) {
    const props = []
    if (node) {
      const nodes = [].concat(node)
      nodes.forEach(node => {
        visit(node, {
          Identifier: (node) => props.push(node.name)
        })
      })
    }

    this.addProps(...props)
  }

  addProps(...props) {
    for (let prop of props) {
      if (!this.vars.has(prop)) {
        if (this.parent) {
          this.parent.addProps(prop)
        } else {
          this.props.add(prop)
        }
      }
    }
  }
}

module.exports = Scope
