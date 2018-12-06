module.exports = {
    extends: ['airbnb', './common.js'],
    rules: {
        // this can be extremely annoying when only using one prop, and is stylistic
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        // override to allow origami style controls, which do not nest controls in labels
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                labelComponents: [],
                labelAttributes: [],
                controlComponents: [],
                assert: 'either',
                depth: 25,
            },
        ],
    },
};
