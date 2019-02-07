'use strict';

const config = require('../../')({
    prettier: true,
    esModules: true,
})

module.exports = Object.assign({}, config, {
    rules: Object.assign({}, config.rules, {
        'import/no-unresolved': "off",
        "import/no-extraneous-dependencies": "off"
    })
});
