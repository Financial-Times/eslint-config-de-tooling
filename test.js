'use strict';

module.exports = {
    plugins: [
        'mocha'
    ],
    env: {
        'mocha': true
    },
    globals: {
        'sinon': true,
        'expect': true
    },
    rules: {
        'max-len': 0,
        'prefer-arrow-callback': 0, // disabled as mocha relies on 'this' as context for some test helpers
        'no-unused-expressions': 0,
        'mocha/no-skipped-tests': 0,
        'mocha/no-exclusive-tests': 2,
        'mocha/no-pending-tests': 2,
        'mocha/handle-done-callback': 2,
        'mocha/no-global-tests': 2,
        'mocha/valid-test-description': 0,
        'mocha/valid-suite-description': 0,
        'mocha/no-synchronous-tests': 0,
        'mocha/no-sibling-hooks': 2,
        'mocha/no-mocha-arrows': 0,
        'mocha/no-hooks': 0,
        'mocha/no-top-level-hooks': 2
    }
};
