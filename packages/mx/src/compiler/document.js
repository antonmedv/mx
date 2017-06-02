module.exports = {
  Document: ({node, compile, source}) => {
    const children = node.children.map(child => compile(child))

    return source`
    import React from 'react'
    
    export default function () {
      return ${children}
    }`
  }
}
