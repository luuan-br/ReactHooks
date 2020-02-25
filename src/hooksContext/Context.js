import React from 'react';

export const themes = {
	dark: {
		foreground: '#ffffff',
		background: '#222222'
	},
	light: {
		foreground: '#000000',
		background: '#eeeeee'
	}
};

export const ThemeContext = React.createContext(themes.light);
