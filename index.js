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
    'rules': {
        'arrow-body-style': 'off',
        'func-names': 'off',
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': [
                'test/**/*.js', '**/*.test.js', '**/*.spec.js', 'gulpfile.js', 'gulp-tasks/**/*.js'
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
        'valid-jsdoc': 'off',
    }
}
