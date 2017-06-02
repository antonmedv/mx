module.exports = {
  Document: ({node, compile, record, source}) => {
    const children = node.children.map(child => compile(child))
    const props = new Set(record.props)

    return source`
    import React from 'react'
    
    export default function ({${[...props]}}) {
      return ${children}
    }`
  }
}
