'use strict';

const path = require('path');

module.exports = {
    extends: ['airbnb-base', path.join(__dirname, './common.js')],
};
