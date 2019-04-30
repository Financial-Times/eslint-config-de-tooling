'use strict';

// Common rules shared by react/non-react apps.
// intended to override airbnb-base and airbnb-react-presets
module.exports = {
	extends: ['plugin:unicorn/recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'script',
		impliedStrict: false,
	},
	settings: {
		'import/core-modules': ['aws-sdk'],
	},
	rules: {
		// TODO: switch to error. This implies that a map/filter/reduce is being used inplace of forEach
		'array-callback-return': 'warn',

		'arrow-body-style': 'off',

		// we're not heavy class users
		// it can impair writing mocks for libraries which are heavily classical
		'class-methods-use-this': 'off',

		// Disallows early returns when a result won't be calcuable, which feels overzealous
		// given it's a common pattern to e.g. do this in a map and then filter undefineds
		// out of the returned array
		'consistent-return': 'off',

		// disallow certain syntax forms
		// override of airnbnb rule to allow for-of
		// https://eslint.org/docs/rules/no-restricted-syntax
		// Rare to use none-anonymous function declarations outside of tests
		'func-names': 'off',

		// doesn't work with decorated defaults https://github.com/benmosher/eslint-plugin-import/issues/544
		'import/no-named-as-default': 'off',
		'import/prefer-default-export': 'off',

		// Override of airbnb config to add some directories (scripts)
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**', // tape, common npm pattern
					'**/__tests__/**', // jest pattern
					'**/__mocks__/**', // jest pattern
					'test.{js,jsx}', // repos with a single test file
					'test-*.{js,jsx}', // repos with multiple top-level test files
					'**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
					'**/jest.config.js', // jest config
					'**/webpack.config.js', // webpack config
					'**/webpack.config.*.js', // webpack config
					'**/rollup.config.js', // rollup config
					'**/rollup.config.*.js', // rollup config
					'scripts/**', // common pattern for deployment scripts
					'fixtures/**', // common pattern for fixture files
				],
				optionalDependencies: false,
			},
		],

		indent: ['error', 4],

		'max-len': 'warn',

		'no-param-reassign': 'off',

		// Not fixable, common
		'no-plusplus': 'off',

		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		// Overly stylistic
		'no-underscore-dangle': 'off',

		'padded-blocks': 'off',

		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true,
				allowUnboundThis: true,
			},
		],

		// Not autofixable and debateable whehter it adds value given that we have
		// linting rules that explicitly prevent many (?all) the things use strict
		// disallows
		strict: 'off',

		// we don't seem to have a convention
		'unicorn/filename-case': 'off',

		// forces use of 'error' for error catches. Annoying and doesn't matter too much
		'unicorn/catch-error-name': 'off',
		// not that harmful (debatable)

		'unicorn/explicit-length-check': 'off',

		// TODO: consider these rules and make a new major release if including any
		// new rules as of eslint-plugin-unicorn 8.0.0
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-for-loop': 'off',
		'unicorn/no-zero-fractions': 'off',
		'unicorn/prefer-includes': 'off',
		'unicorn/prefer-text-content': 'off',
		'unicorn/prefer-node-remove': 'off',

		'valid-jsdoc': 'warn',
	},
};
