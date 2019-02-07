'use strict';

const config = require('../../')({
    prettier: true,
    esModules: false,
})

module.exports = Object.assign({}, config, {
    rules: Object.assign({}, config.rules, {
        'import/no-unresolved': "off",
        "import/no-extraneous-dependencies": "off"
    })
});
