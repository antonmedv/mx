const parser = require('../../src/parser')
const dedent = require('dedent')
module.exports = (code) => parser.parse('file.mx', dedent(code))
