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
      foreground: colors['light-blue']
    }
  },
  {
    name: '[Ruby] Kernel Function',
    scope: [
      'support.function.kernel'
    ],
    settings: {
      foreground: colors['yellow']
    }
  }
]