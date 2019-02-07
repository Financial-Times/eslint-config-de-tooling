'use strict';

const rootPackageJson = require('./root-package-json');

const packageJsonContents = rootPackageJson();
const packageJsonContainsPackage = packageName => {
    const { dependencies = {}, devDependencies = {} } = packageJsonContents;
    return dependencies[packageName] || devDependencies[packageName];
};

const usingJsx = ['react', 'preact', 'inferno', 'hyperons'].some(
    packageJsonContainsPackage
);

const usingNonReactJsx = ['preact', 'hyperons'].some(
    packageJsonContainsPackage
);

const usingJest = packageJsonContainsPackage('jest');
const usingMocha = packageJsonContainsPackage('mocha');
const usingCypress = packageJsonContainsPackage('cypress');

module.exports = {
    usingJsx,
    usingNonReactJsx,
    usingJest,
    usingMocha,
    usingCypress,
};
