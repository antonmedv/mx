function DocumentNode(children, loc) {
  this.type = 'Document'
  this.children = children
  this.loc = loc
}

function TextNode(text, loc) {
  this.type = 'Text'
  this.text = text
  this.loc = loc
}

function CommentNode(comment, loc) {
  this.type = 'Comment'
  this.comment = comment
  this.loc = loc
}

function ElementNode(name, attributes, children, loc) {
  this.type = 'Element'
  this.name = name
  this.attributes = attributes
  this.children = children
  this.loc = loc
}

function AttributeNode(name, body, loc) {
  this.type = 'Attribute'
  this.name = name
  this.body = body
  this.loc = loc
}

function SpreadAttributeNode(identifier, loc) {
  this.type = 'SpreadAttribute'
  this.identifier = identifier
  this.loc = loc
}

function ExpressionNode(expression, loc) {
  this.type = 'Expression'
  this.expression = expression
  this.loc = loc
}

function ImportStatementNode(identifier, path, loc) {
  this.type = 'ImportStatement'
  this.identifier = identifier
  this.path = path
  this.loc = loc
}

function IfStatementNode(cond, then, otherwise, loc) {
  this.type = 'IfStatement'
  this.cond = cond
  this.then = then
  this.otherwise = otherwise
  this.loc = loc
}

function ForStatementNode(expr, children, options, loc) {
  this.type = 'ForStatement'
  this.expr = expr
  this.children = children
  this.options = options
  this.loc = loc
}

function ThisExpressionNode(loc) {
  this.type = 'ThisExpression'
  this.loc = loc
}

function ArrayExpressionNode(elements, loc) {
  this.type = 'ArrayExpression'
  this.elements = elements
  this.loc = loc
}

function ObjectExpressionNode(properties, loc) {
  this.type = 'ObjectExpression'
  this.properties = properties
  this.loc = loc
}

function SequenceExpressionNode(expressions, loc) {
  this.type = 'SequenceExpression'
  this.expressions = expressions
  this.loc = loc
}

function UnaryExpressionNode(operator, prefix, argument, loc) {
  this.type = 'UnaryExpression'
  this.operator = operator
  this.prefix = prefix
  this.argument = argument
  this.loc = loc
}

function BinaryExpressionNode(operator, left, right, loc) {
  this.type = 'BinaryExpression'
  this.operator = operator
  this.left = left
  this.right = right
  this.loc = loc
}

function AssignmentExpressionNode(operator, left, right, loc) {
  this.type = 'AssignmentExpression'
  this.operator = operator
  this.left = left
  this.right = right
  this.loc = loc
}

function UpdateExpressionNode(operator, argument, prefix, loc) {
  this.type = 'UpdateExpression'
  this.operator = operator
  this.argument = argument
  this.prefix = prefix
  this.loc = loc
}

function LogicalExpressionNode(operator, left, right, loc) {
  this.type = 'LogicalExpression'
  this.operator = operator
  this.left = left
  this.right = right
  this.loc = loc
}

function ConditionalExpressionNode(test, consequent, alternate, loc) {
  this.type = 'ConditionalExpression'
  this.test = test
  this.consequent = consequent
  this.alternate = alternate
  this.loc = loc
}

function NewExpressionNode(callee, args, loc) {
  this.type = 'NewExpression'
  this.callee = callee
  this.arguments = args
  this.loc = loc
}

function CallExpressionNode(callee, args, loc) {
  this.type = 'CallExpression'
  this.callee = callee
  this.arguments = args
  this.loc = loc
}

function MemberExpressionNode(object, property, computed, loc) {
  this.type = 'MemberExpression'
  this.object = object
  this.property = property
  this.computed = computed
  this.loc = loc
}

function IdentifierNode(name, loc) {
  this.type = 'Identifier'
  this.name = name
  this.loc = loc
}

function AccessorNode(name, loc) {
  this.type = 'Accessor'
  this.name = name
  this.loc = loc
}

function LiteralNode(value, loc) {
  this.type = 'Literal'
  this.value = value
  this.loc = loc
}

const ast = exports.ast = {}
ast.DocumentNode = DocumentNode
ast.TextNode = TextNode
ast.CommentNode = CommentNode
ast.ElementNode = ElementNode
ast.AttributeNode = AttributeNode
ast.SpreadAttributeNode = SpreadAttributeNode
ast.ExpressionNode = ExpressionNode
ast.ImportStatementNode = ImportStatementNode
ast.IfStatementNode = IfStatementNode
ast.ForStatementNode = ForStatementNode
ast.ThisExpressionNode = ThisExpressionNode
ast.ArrayExpressionNode = ArrayExpressionNode
ast.ObjectExpressionNode = ObjectExpressionNode
ast.SequenceExpressionNode = SequenceExpressionNode
ast.UnaryExpressionNode = UnaryExpressionNode
ast.BinaryExpressionNode = BinaryExpressionNode
ast.AssignmentExpressionNode = AssignmentExpressionNode
ast.UpdateExpressionNode = UpdateExpressionNode
ast.LogicalExpressionNode = LogicalExpressionNode
ast.ConditionalExpressionNode = ConditionalExpressionNode
ast.NewExpressionNode = NewExpressionNode
ast.CallExpressionNode = CallExpressionNode
ast.MemberExpressionNode = MemberExpressionNode
ast.IdentifierNode = IdentifierNode
ast.AccessorNode = AccessorNode
ast.LiteralNode = LiteralNode
