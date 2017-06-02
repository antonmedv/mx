exports.esc = (str) => {
  return JSON.stringify(str)
}

exports.size = (obj) => {
  let size = 0, key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++
    }
  }
  return size
}

exports.notNull = (item) => {
  return item !== null
}

exports.unique = (a) => {
  return a.reduce(function (p, c) {
    if (p.indexOf(c) < 0) {
      p.push(c)
    }
    return p
  }, [])
}

exports.isSingleChild = (parent, node) => {
  if (parent) {
    if (parent.type === 'Element') {
      if (parent.body.length === 1 && parent.body[0] === node) {
        return true
      }
    }
  }
  return false
}

exports.getTemplateName = (name) => {
  return name.replace(/\W+/g, '_')
}

exports.getStringLiteralValue = (literal) => {
  return literal.value.replace(/^["']/, '').replace(/["']$/, '')
}

exports.arrayToObject = (array, value = 1) => {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = value
  }
  return obj
}

exports.hyphensToCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}
