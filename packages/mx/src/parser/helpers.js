/* eslint-disable no-undef,no-unused-vars */
function SourceLocation(source, start, end) {
  this.source = source
  this.start = start
  this.end = end
}

function Position(line, column) {
  this.line = line
  this.column = column
}

function createSourceLocation(firstToken, lastToken) {
  return new SourceLocation(
    parser.source, // Some sort of magic. In this way we can pass filename into jison generated parser.
    new Position(firstToken.first_line, firstToken.first_column),
    new Position(lastToken.last_line, lastToken.last_column)
  )
}

function parseRegularExpressionLiteral(literal) {
  const last = literal.lastIndexOf('/')
  const body = literal.substring(1, last)
  const flags = literal.substring(last + 1)

  return new RegExp(body, flags)
}

function parseNumericLiteral(literal) {
  if (literal.charAt(0) === '0') {
    if (literal.charAt(1).toLowerCase() === 'x') {
      return parseInt(literal, 16)
    } else {
      return parseInt(literal, 8)
    }
  } else {
    return Number(literal)
  }
}

/* Begin Parser Customization Methods */
const originalParseMethod = parser.parse

parser.parse = function (source, code) {
  parser.source = source
  // Insert final newline
  if (!/\n$/.test(code)) {
    code += '\n'
  }
  return originalParseMethod.call(this, code)
}
/* End Parser Customization Methods */
