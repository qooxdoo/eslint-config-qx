'use strict';
const baseConfig = require('./index.js');

module.exports = [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: 5,
			globals: {
				// Browser globals  
				window: "readonly",
				document: "readonly",
				navigator: "readonly",
				console: "readonly",
				location: "readonly",
				history: "readonly",
				localStorage: "readonly",
				sessionStorage: "readonly",
				XMLHttpRequest: "readonly",
				// Qooxdoo globals
				q: "readonly",
				qx: "readonly",
				qxWeb: "readonly"
			}
		},
		rules: {
			'no-extra-semi': 'off',
			'curly': 'off',
			'no-multi-spaces': 'off', 
			'array-bracket-spacing': 'off', 
			'brace-style': 'off', 
			'camelcase': 'off', 
			'comma-spacing': 'off',
			'indent': 'off', 
			'keyword-spacing': 'off', 
			'linebreak-style': 'off', 
			'max-params': ['warn', { 
				max: 7
			}],
			'no-mixed-spaces-and-tabs': 'off', 
			'no-trailing-spaces': 'off', 
			'object-curly-spacing': 'off', 
			'one-var-declaration-per-line': 'off', 
			'padded-blocks': 'off', 
			'quote-props': 'off', 
			'quotes': 'off', 
			'space-before-blocks': 'off', 
			'space-before-function-paren': 'off', 
			'space-in-parens': 'off', 
			'spaced-comment': 'off'
		}
	}
];
