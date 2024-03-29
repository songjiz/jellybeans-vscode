const colors = require('./colors.json')

module.exports = {
  tokenColors: [
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: colors['gray'],
        fontStyle: 'italic'
      }
    },
    {
      name: 'string',
      scope: 'string',
      settings: {
        foreground: colors['green']
      }
    },
    {
      name: 'Parameters / Arguments begin and end',
      scope: [
        'punctuation.definition.parameters.begin',
        'punctuation.definition.parameters.end',
      ],
      settings: {
        foreground: colors['foreground']
      }
    },
    {
      name: 'Parameters / Arguments',
      scope: [
        'variable.parameter',
        'variable.other',
        // 'variable.parameter.function',
        // 'meta.function.method.with-arguments'
      ],
      settings: {
        foreground: colors['foreground']
      }
    },
    {
      name: 'Pseudo Method',
      scope: [
        'keyword.control.pseudo-method',
        'keyword.control.flow',
        'keyword.control.trycatch'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'module,class',
      scope: [
        'keyword.control.class',
        'keyword.control.module',
        'meta.module',
        'meta.class'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Module / Class Name',
      scope: [
        'entity.name.type.module',
        'entity.name.type.class',
        'support.class',
        'support.constant',
        'entity.name.type'
      ],
      settings: {
        foreground: colors['orange']
      }
    },
    {
      name: 'Keyword Control',
      scope: [
        'keyword.control'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Interpolation',
      scope: [
        'punctuation.section.embedded.begin',
        'punctuation.section.embedded.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end'
      ],
      settings: {
        foreground: colors['magenta']
      }
    },
    {
      name: 'Function declaration',
      scope: [
        'meta.method.declaration'
      ],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Function brace',
      scope: [
        'meta.brace.round',
        'punctuation.section.function'
      ],
      settings: {
        foreground: colors['foreground']
      }
    },
    {
      name: 'Function Call',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'keyword.other.special-method'
      ],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Variable self/this',
      scope: [
        'variable.language.self',
        'variable.language.this'
      ],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Instance Variable',
      scope: [
        'variable.other.readwrite.instance'
      ],
      settings: {
        foreground: colors['magenta']
      }
    },
    {
      name: 'Constant Symbol',
      scope: [
        'constant.language.symbol'
      ],
      settings: {
        foreground: colors['dark-magenta']
      }
    },
    {
      name: 'Constant Numeric',
      scope: [
        'constant.numeric'
      ],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Constant Boolean',
      scope: [
        'constant.language.boolean'
      ],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Regular Expression',
      scope: [
        'punctuation.section.regexp',
        'string.regexp.interpolated'
      ],
      settings: {
        foreground: colors['pink']
      }
    },
    {
      name: 'Logical Operator',
      scope: [
        'keyword.operator.logical'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Operator Rest/Spread',
      scope: [
        'keyword.operator.rest',
        'keyword.operator.spread'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Others',
      scope: [
        'meta.toc-list.id.html'
      ],
      settings: {
        foreground: colors['foreground']
      }
    }
  ]
}