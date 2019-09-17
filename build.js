const fs = require('fs')
const editor = require('./src/editor')
const general = require('./src/general')
const langs = require("./src/languages")

syntax = general

for (lang in langs) {
  console.log(`--> ${lang}`)
  syntax.tokenColors = syntax.tokenColors.concat(langs[lang])
}

fs.writeFileSync('./themes/jellybeans-color-theme.json', JSON.stringify({...editor, ...syntax}, '', 2))