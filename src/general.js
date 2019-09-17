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
      name: 'Start Block',
      scope: [
        'keyword.control.start-block'
      ],
      settings: {
        foreground: colors['cyan']
      }
    },
    {
      name: 'Parameters / Arguments',
      scope: [
        'variable.parameter.function',
        'variable.other',
        'meta.function.method.with-arguments'
      ],
      settings: {
        foreground: colors['foreground']
      }
    },
    {
      name: 'Special Method',
      scope: [
        'keyword.other.special-method'
      ],
      settings: {
        foreground: colors['cyan']
      }
    },
    {
      name: 'Pseudo Method',
      scope: [
        'keyword.control.pseudo-method'
      ],
      settings: {
        foreground: colors['dark-blue']
      }
    },
    {
      name: 'Module / Class Name',
      scope: [
        'entity.name.type.module',
        'entity.name.type.class',
        'meta.module',
        'meta.class',
        'support.class'
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
        foreground: colors['cyan']
      }
    },
    {
      name: 'String Interpolation',
      scope: [
        'punctuation.section.embedded.begin',
        'punctuation.section.embedded.end'
      ],
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Function',
      scope: [
        'entity.name.function'
      ],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Variable self',
      scope: [
        'variable.language.self'
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
        foreground: colors['purple']
      }
    },
    {
      name: 'Constant Symbol',
      scope: [
        'constant.language.symbol'
      ],
      settings: {
        foreground: colors['light-purple']
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
      name: 'Other Constant',
      scope: [
        'variable.other.constant'
      ],
      settings: {
        foreground: colors['orange']
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
    }
  ]
}