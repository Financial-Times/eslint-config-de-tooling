module.exports = {
    'extends': [
        'airbnb-base'
    ],
    'plugins': [],
    'parserOptions': {
        ecmaVersion: 2017,
        sourceType: 'script',
        impliedStrict: false,
        ecmaFeatures: {
            experimentalObjectRestSpread: false,
        },
    },
    'settings': {
        'import/core-modules': [
            'aws-sdk',
        ],
    },
    'rules': {
        'arrow-body-style': 'off',
        'func-names': 'off',
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': [
                'public/**', // public static asset paths
                'test/**', // tape, common npm pattern
                'tests/**', // also common npm pattern
                'spec/**', // mocha, rspec-like pattern
                '**/__tests__/**', // jest pattern
                'test.{js,jsx}', // repos with a single test file
                'test-*.{js,jsx}', // repos with multiple top-level test files
                '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
                '**/jest.config.js', // jest config
                '**/webpack.config.js', // webpack config
                '**/webpack.config.*.js', // webpack config
                '**/rollup.config.js', // rollup config
                '**/rollup.config.*.js', // rollup config
                '**/gulpfile.js', // gulp config
                '**/gulpfile.*.js', // gulp config
                '**/Gruntfile{,.js}', // grunt config
                '**/protractor.conf.js', // protractor config
                '**/protractor.conf.*.js', // protractor config
            ]
        }],
        'import/no-named-as-default': 'off', // doesn't work with decorated defaults https://github.com/benmosher/eslint-plugin-import/issues/544
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        'max-len': 'warn',
        'new-cap':  ['error', {capIsNewExceptions: ['Router']}],
        'no-param-reassign': 'off',
        'no-underscore-dangle': ['error', {allowAfterThis: true}],
        'object-curly-spacing': ['error', 'never'],
        'padded-blocks': 'off',
        'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
        'quote-props': ['error', 'as-needed', {numbers: true}],
        'space-before-function-paren': ['error', 'never'],
        'valid-jsdoc': 'warn',
    }
}
