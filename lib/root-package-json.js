'use strict';

const readPkgUp = require('read-pkg-up');

let packageJson;

const getRootPackageJson = () => {
	if (packageJson) {
		return packageJson.pkg;
	}
	packageJson = readPkgUp.sync();
	return packageJson.pkg;
};

module.exports = getRootPackageJson;
