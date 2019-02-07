'use strict';

const jestConfig = require('eslint-plugin-jest').configs.recommended;
const { usingJsx } = require('../lib/feature-detect');

// Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
// the default jest/globals with jest/recommended doesn't work with eslint@5.x.x
// https://github.com/jest-community/eslint-plugin-jest/issues/128
jestConfig.env = {
	jest: true,
};
if (usingJsx) {
	// allow test files to contain jsx but still keep the .js extension
	jestConfig.rules['react/jsx-filename-extension'] = [
		'error',
		{ extensions: ['.js', '.jsx'] },
	];
}

// This disallows .skip, which is auseful tool for writing skelton tests
// prior to full implementation. no-focused-tests is still enabled, which
// catches .only - that's the killer
jestConfig.rules['jest/no-disabled-tests'] = [
	0,
	{ extensions: ['.js', '.jsx'] },
];

module.exports = jestConfig;
