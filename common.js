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
        'arrow-body-style': 'off',
        // doesn't work with decorated defaults https://github.com/benmosher/eslint-plugin-import/issues/544
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        indent: ['error', 4],
        'max-len': 'warn',
        'no-param-reassign': 'off',
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'padded-blocks': 'off',
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
                allowUnboundThis: true,
            },
        ],
        'valid-jsdoc': 'warn',
        'unicorn/filename-case': 'off',
    },
};
