/* eslint-disable global-require */

'use strict';

const path = require('path');
const {
    usingJsx,
    usingNonReactJsx,
    usingJest,
    usingMocha,
    usingCypress,
} = require('../lib/feature-detect');

const getConfig = ({ prettier = true, esModules = false }) => {
    const config = { rules: {} };

    if (esModules) {
        config.parserOptions = {
            sourceType: 'module',
            impliedStrict: true,
        };
    } else {
        config.parserOptions = {
            sourceType: 'script',
            impliedStrict: false,
        };
    }

    if (usingNonReactJsx) {
        config.rules['react/prop-types'] = 0;
        config.settings = { react: { pragma: 'h' } };
    }

    const getJestConfig = () => {
        // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
        const jestConfig = require('./jest');
        return Object.assign({}, jestConfig, {
            files: [
                '**/__tests__/**/*.js',
                '**/__mocks__/**/*.js',
                'test/**/*.js',
                'test/**/*.jsx',
            ],
        });
    };

    const getMochaConfig = () => {
        // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
        const mochaConfig = require('../mocha');
        return Object.assign({}, mochaConfig, {
            files: ['**/*.test.js', '**/*.spec.js'],
        });
    };

    const getCypressConfig = () => {
        // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
        const cypressConfig = require('./cypress');
        return Object.assign({}, cypressConfig, {
            files: ['cypress/**/*.js'],
        });
    };

    config.extends = usingJsx
        ? [path.join(__dirname, './react.js')]
        : [path.join(__dirname, './base.js')];

    if (usingMocha) {
        config.overrides = [...(config.overrides || []), getMochaConfig()];
    }

    if (usingJest) {
        config.overrides = [...(config.overrides || []), getJestConfig()];
    }

    if (usingCypress) {
        config.overrides = [...(config.overrides || []), getCypressConfig()];
    }

    // add prettier last to ensure it overrides prior config
    if (prettier) {
        config.extends = [
            ...config.extends,
            path.join(__dirname, './prettier.js'),
        ];
    }

    return config;
};

module.exports = getConfig;
