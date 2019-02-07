'use strict';

const { usingJsx } = require('../lib/feature-detect');

let configExtends = ['plugin:prettier/recommended', 'prettier/unicorn'];

if (usingJsx) {
	configExtends = [...(configExtends || []), 'prettier/react'];
}

module.exports = {
	extends: configExtends,
};
