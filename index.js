module.exports = {
    "extends": [
        "airbnb-base",
        "origami-component",
        "prettier"
    ],
    "plugins": [
        "prettier"
    ],
    "parserOptions": {
        sourceType: "script"
    },
    "rules": {
        'arrow-body-style': 0,
        'arrow-parens': [2, "always"],
        'func-names': 0,
        'import/no-extraneous-dependencies': [2, {'devDependencies': ['test/**/*.js', '**/*.test.js', '**/*.spec.js', 'gulpfile.js', 'gulp-tasks/**/*.js']}],
        'import/no-named-as-default': 0, // doesn't work with decorated defaults https://github.com/benmosher/eslint-plugin-import/issues/544
        'import/prefer-default-export': 0,
        'indent': [2, 4],
        'max-len': 1,
        'new-cap':  [2, {capIsNewExceptions: ['Router']}],
        'no-param-reassign': 0,
        'no-underscore-dangle': [2, {allowAfterThis: true}],
        'object-curly-spacing': [2, 'never'],
        'padded-blocks': 0,
        'prefer-arrow-callback': [2, {allowNamedFunctions: true}],
        'quote-props': [2, 'as-needed', {numbers: true}],
        'space-before-function-paren': [2, 'never']
    }
}
