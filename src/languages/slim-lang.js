const colors = require('../colors.json')

module.exports = [
  {
    name: '[slim] Tag Name',
    scope: [
      'entity.name.tag.slim'
    ],
    settings: {
      foreground: colors['red']
    }
  },
  {
    name: '[slim] Filter',
    scope: [
      'constant.language.name.javascript.filter.slim',
      'text.javascript.filter.slim',
    ],
    settings: {
      foreground: colors['blue']
    }
  },
  {
    name: '[slim] Attribute Name',
    scope: [
      'entity.other.attribute-name.slim',
      'entity.other.attribute-name.event.slim'
    ],
    settings: {
      foreground: colors['dark-yellow']
    }
  }
]