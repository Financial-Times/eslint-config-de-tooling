# eslint-config-de-tooling

This is an ESLint configuration which aims to ensure all de-tooling applications' source code is consistent in style.

This plugin extends [airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base)'s base config, while keeping consistent with [origami](https://github.com/Financial-Times/eslint-config-origami-component)'s configuration.

This is also intended to be used with the [prettier](https://www.npmjs.com/package/prettier) JS code formatter, and as such ignores all stylistic rules managed by prettier.

## Usage

Install this package together with your application:

```shell
npm install --save-dev eslint-config-de-tooling
```

It's recommended to avoid global installs where possible, as eslint in particular can be volatile with dependency locations.

Extend the config using an [eslint config file](https://eslint.org/docs/user-guide/configuring). For example in an `.eslintrc.js` file:

```js
{
    "extends": [
        de-tooling"
    ]

    "rules": {
        // Override any settings from the "parent" extended configuration
    }
```

## Dependencies

This package requires certain dependencies as `peerDependencies`. This is a decision consistent with eslint (see https://github.com/eslint/eslint/issues/2518, https://github.com/eslint/eslint/issues/3458). This means they should be installed wherever this package is consumed, with matching version ranges:

* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)

It's possible to automatically install these by adapting the steps from [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base), e.g. for Linux/OSX:

```shell
(
  export PKG=eslint-config-de-tooling;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)```
