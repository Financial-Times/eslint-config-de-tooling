'use strict';

const cypressConfig = require('eslint-plugin-cypress').configs.recommended;
const mochaConfig = require('./mocha');

const mergedConfig = Object.assign({}, mochaConfig, {
	// Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
	rules: Object.assign({}, mochaConfig.rules, cypressConfig.rules, {
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
	}),
	plugins: [...(mochaConfig.plugins || []), ...(cypressConfig.plugins || [])],
});

module.exports = mergedConfig;
