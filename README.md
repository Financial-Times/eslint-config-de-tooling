NB: This repo is archived in favour of keeping this code together in the rel-engage [repo](https://github.com/Financial-Times/rel-engage/tree/master/packages/eslint). 

# eslint-config-reliability-engineering

This is an ESLint configuration which aims to ensure all reliability-engineering applications' source code is consistent in style.

This config extends [airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base)s base config along with extra rules provided by [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), and language/framework specific config

## Usage

Install this package together with your application:

```shell
npm install --save-dev @financial-times/eslint-config-reliability-engineering
```

It's recommended to avoid global installs where possible, as eslint in particular can be volatile with dependency locations.

Extend the config using an [eslint config file](https://eslint.org/docs/user-guide/configuring). For example in an `.eslintrc.js` file:

```js
// .eslintrc.js

const config = require('@financial-times/reliability-engineering')({
    prettier: true, // use prettier, defaults to true
    esModules: true, // use esModules, defaults to false
});

module.exports = Object.assign({}, config, {
    rules: Object.assign({}, config.rules, {
        // Override any settings from the "parent" extended configuration
    }),
});
```

This root export detects your dependencies from `package.json` and loads the relevant `eslint` configs that follow in this list, including prettier.

This is configured using JS to allow for options to be passed in (prettier/esModules) for hard to detect features - esModules can vary per file, and prettier is often installed as a subdependency rather than a direct dependency.

The following configs are also exposed, which allow more granular configuration depending on your choice of tooling, these can be consumed using the standard eslint `extends` syntax:

```js
// .eslintrc.js

module.exports = {
    extends: ['@financial-times/reliability-engineering/base'],
    rules: {
        // override any rules
    },
};
```

-   `@financial-times/reliability-engineering/base` - base (non-react) configuration. Extends the main [airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base) rules
-   `@financial-times/reliability-engineering/cypress` - [cypress](http://cypress.io/) configuration
-   `@financial-times/reliability-engineering/mocha` - [mocha](https://mochajs.org/) configuration
-   `@financial-times/reliability-engineering/jest` - [jest](http://jestjs.io/) configuration. Also reads `package.json` to determine whether to override file extension rules
-   `@financial-times/reliability-engineering/react` - [react](http://reactjs.org/) configuration. Extends the main [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) rules
-   `@financial-times/reliability-engineering/prettier` - enables formatting with [prettier](https://prettier.io/)

## Dependencies

This package requires certain dependencies as `peerDependencies`. This is a decision consistent with eslint (see https://github.com/eslint/eslint/issues/2518, https://github.com/eslint/eslint/issues/3458). There is an RFC to address this and allow a package to ship its dependencies: https://github.com/eslint/rfcs/pull/5. This means they should be installed wherever this package is consumed, with matching version ranges:

-   [eslint](https://www.npmjs.com/package/eslint)
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
-   [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) (only required when using mocha config)
-   [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) (only required when using cypress config)
-   [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) (only required when using jest config)
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) (only required when using react config, can otherwise be ignored)
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) (only required when using react config, can otherwise be ignored)
-   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) (only required when using react config, can otherwise be ignored)
-   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) (only required when using prettier config)
-   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) (only required when using prettier config)

It's possible to automatically install these by adapting the steps from [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base), e.g. for Linux/OSX:

```shell
(
  export PKG=@financial-times/eslint-config-reliability-engineering;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```
