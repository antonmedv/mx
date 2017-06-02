const {SourceNode} = require('source-map')

module.exports = function sourceNode(loc, chunk) {
  // Check call arity
  if (chunk === undefined) {
    chunk = loc
    loc = null
  }

  if (!loc) {
    return new SourceNode(null, null, null, chunk)
  } else {
    return new SourceNode(loc.start.line, loc.start.column, loc.source, chunk)
  }
}
