// https://code.visualstudio.com/api/references/theme-color

const colors = require('./colors.json')

module.exports = {
	name: 'jellybeans',
	type: 'dark',
	colors: {
		"editor.background": colors['background'],
		"editor.foreground": colors['foreground'],
		"sideBar.background": colors['background'],
		"sideBarTitle.foreground": colors['foreground'],
		"sideBar.border": colors['black'],
		"statusBar.background": colors['black'],
		"activityBar.background": colors['background'],
		"activityBar.border": colors['black'],
		"terminal.background": colors['background'],
		"terminal.border": colors['black'],
		"terminal.foreground": colors['foreground'],
		"terminal.ansiBlack": colors['black'],
		"terminal.ansiBrightBlack": colors['bright-black'],
		"terminal.ansiBlue": colors['bright-blue'],
		"terminal.ansiBrightBlue": colors['blue'],
		"terminal.ansiCyan": colors['cyan'],
		"terminal.ansiBrightCyan": colors['bright-cyan'],
		"terminal.ansiGreen": colors['green'],
		"terminal.ansiBrightGreen": colors['bright-green'],
		"terminal.ansiMagenta": colors['magenta'],
		"terminal.ansiBrightMagenta": colors['bright-magenta'],
		"terminal.ansiRed": colors['red'],
		"terminal.ansiBrightRed": colors['bright-red'],
		"terminal.ansiWhite": colors['white'],
		"terminal.ansiBrightWhite": colors['bright-white'],
		"terminal.ansiYellow": colors['yellow'],
		"terminal.ansiBrightYellow": colors['bright-yellow'],
		"terminal.selectionBackground": colors['dark-blue'],
		"terminalCursor.background": colors['black'],
		"terminalCursor.foreground": colors['bright-white']
  }
}