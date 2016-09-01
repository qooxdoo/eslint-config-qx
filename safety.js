'use strict';
const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		node: false,
		browser: true,
    es6: false
	},
  rules: {
    // The comments here are the line numbers in index.js
    'no-extra-semi': 'off', // 45
    'curly': 'off',
    'no-multi-spaces': 'off', // 92
    'array-bracket-spacing': 'off', // 140
    'brace-style': 'off', // 141
    'camelcase': 'off', // 144
    'comma-spacing': 'off', // 147
    'indent': 'off', // 156
    'keyword-spacing': 'off', // 161
    'linebreak-style': 'off', // 162
    'max-params': ['warn', { // 165
			max: 7
		}],
		'no-mixed-spaces-and-tabs': 'off', // 177
    'no-trailing-spaces': 'off', // 186
    'object-curly-spacing': 'off', // 188
    'one-var-declaration-per-line': 'off', // 192
    'padded-blocks': 'off', // 195
    'quote-props': 'off', // 196
    'quotes': 'off', // 197
    'space-before-blocks': 'off', // 205
    'space-before-function-paren': 'off', // 206
    'space-in-parens': 'off', // 210
    'spaced-comment': 'off' // 213
  }
};
