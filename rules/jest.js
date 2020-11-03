'use strict';

const { usingJsx } = require('../lib/feature-detect');

const config = {
	extends: ['plugin:jest/recommended'],
	rules: {
		// This disallows .skip, which is a useful tool for writing skeleton tests
		// prior to full implementation. no-focused-tests is still enabled, which
		// catches .only - that's the killer
		'jest/no-disabled-tests': [0, { extensions: ['.js', '.jsx'] }],
		
		// This rule disallows using template strings with variables as description 
		// names, which is useful when e.g. running the same set of tests with multiple
		// configurations
		'jest/valid-describe': 'off',
		
		// Disable as it's frequently necessary to do inline requires
		// when working with jest mocks
		'global-require': 'off',
	},
};

if (usingJsx) {
	// allow test files to contain jsx but still keep the .js extension
	config.rules['react/jsx-filename-extension'] = [
		'error',
		{ extensions: ['.js', '.jsx'] },
	];
}

module.exports = config;
