const colors = require('../colors.json')

module.exports = [
  {
    name: '[JS] Block',
    scope: [
      'punctuation.definition.block.js'
    ],
    settings: {
      foreground: colors['foreground']
    }
  },
  {
    name: '[JS] new/var/let/const',
    scope: [
      'meta.var.expr.js',
      'new.expr.js'
    ],
    settings: {
      foreground: colors['yellow']
    }
  },
  {
    name: '[JS] Function',
    scope: [
      'storage.type.function.js',
      'meta.function.expression.js'
    ],
    settings: {
      foreground: colors['cyan']
    }
  },
  {
    name: '[JS] Property variable',
    scope: [
      'variable.other.property.js'
    ],
    settings: {
      foreground: colors['magenta']
    }
  },
  {
    name: '[JS] var/let/const',
    scope: [
      'storage.type.js'
    ],
    settings: {
      foreground: colors['cyan']
    }
  }
]