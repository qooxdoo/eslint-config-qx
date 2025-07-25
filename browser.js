'use strict';
const baseConfig = require('./index.js');

module.exports = [
	...baseConfig,
	{
		languageOptions: {
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
				fetch: "readonly",
				// Qooxdoo globals
				q: "readonly",
				qx: "readonly",
				qxWeb: "readonly",
				// Remove Node.js globals
				global: "off",
				process: "off",
				Buffer: "off",
				__dirname: "off",
				__filename: "off",
				exports: "off",
				module: "off",
				require: "off"
			}
		},
		rules: {
			'no-console': 'error'
		}
	}
];
