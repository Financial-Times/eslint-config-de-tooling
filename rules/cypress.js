'use strict';

const path = require('path');

const mergedConfig = {
	extends: ['plugin:cypress/recommended', path.join(__dirname, './mocha.js')],
	// Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
	rules: {
		// allow top-level hooks in cypress setup files
		'mocha/no-top-level-hooks': 'off',
		// allow dev-deps in cypress test directories
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
				optionalDependencies: false,
			},
		],
	},
};

module.exports = mergedConfig;
