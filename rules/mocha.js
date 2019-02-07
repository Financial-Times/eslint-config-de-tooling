'use strict';

module.exports = {
    plugins: ['mocha'],
    env: {
        mocha: true,
    },
    globals: {
        sinon: true,
        expect: true,
        assert: true,
    },
    rules: {
        'max-len': 'off',
        'prefer-arrow-callback': 'off',
        'mocha/prefer-arrow-callback': 'error',
        'no-unused-expressions': 'off',
        'mocha/no-skipped-tests': 'off',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/handle-done-callback': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/valid-test-description': 'off',
        'mocha/valid-suite-description': 'off',
        'mocha/no-synchronous-tests': 'off',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-hooks': 'off',
        'mocha/no-top-level-hooks': 'error',
    },
};
