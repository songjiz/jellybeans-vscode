const colors = require('../colors.json')

module.exports = [
  {
    name: '[Ruby] other variable as method',
    scope: [
      'variable.other.ruby'
    ],
    settings: {
      foreground: colors['yellow']
    }
  },
  {
    name: '[Ruby] Start Block',
    scope: [
      'keyword.control.start-block.ruby'
    ],
    settings: {
      foreground: colors['blue']
    }
  },
  {
    name: '[Ruby] Kernel Function',
    scope: [
      'support.function.kernel.ruby'
    ],
    settings: {
      foreground: colors['yellow']
    }
  },
  {
    name: '[Ruby] Other Constant',
    scope: [
      'variable.other.constant.ruby'
    ],
    settings: {
      foreground: colors['orange']
    }
  },
  {
    name: '[Ruby] Other Variable',
    scope: [
      'variable.other.ruby'
    ],
    settings: {
      foreground: colors['foreground']
    }
  }
]
