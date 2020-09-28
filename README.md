<h1 align="center" style="border-bottom: none;">Open Source Starter </h1>
<h3 align="center">Pre-configured starter for open source Node projects with automated releases</h3>
<p align="center">
    <a href="https://github.com/JimmyBeldone/open-source-starter/open-source-starter">
        <img alt="travis build" src="https://github.com/JimmyBeldone/open-source-starter/workflows/TESTING/badge.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/open-source-starter/open-source-starter">
        <img alt="travis build" src="https://github.com/JimmyBeldone/open-source-starter/workflows/PUBLISH/badge.svg">
    </a>
    <a href="#badge">
        <img alt="release number" src="https://badgen.net/github/release/JimmyBeldone/open-source-starter/stable">
    </a>
    <a href="#badge">
        <img alt="dependencies status" src="https://badgen.net/david/dep/JimmyBeldone/open-source-starter">
    </a>
    <a href="#badge">
        <img alt="dev dependencies status" src="https://badgen.net/david/dev/JimmyBeldone/open-source-starter">
    </a>
</p>
<p align="center">
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </a>
    <a href="https://github.com/prettier/prettier">
        <img alt="prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/open-source-starter/blob/master/LICENSE">
        <img alt="license" src="https://badgen.net/github/license/JimmyBeldone/open-source-starter">
    </a>
</p>

This starter provides all necessary setup to quickly start an open source project, with fully automated release, tests, generate `CHANGELOG.md`, version bump, publish to NPM.

## Content

### **[Babel](https://babeljs.io/)** : Use next generation JavaScript

> All `.js` files in `src/` will be compiled with Babel and added in the `dist/` folder

*Config : `.babelrc`*

### **[ESLint](https://eslint.org/)** : A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease

*config: `.eslintrc`*

### **[Prettier](https://prettier.io/)** : Opinionated code formatter

*config: `.prettierrc`*

### **[Husky](https://github.com/typicode/husky)** : Use git hooks with ease

> Here it just call [lint-staged](https://github.com/okonet/lint-staged) on `pre-commit`

*config: `"husky"` in `package.json`*

### **[lint-staged](https://github.com/okonet/lint-staged)** : Run linters against staged git files

> Here it calls [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) on `git add`

*config: `"lint-staged"` in `package.json`*

### **[Commitizen](https://github.com/commitizen/cz-cli)** : Conventional commit messages CLI

### **[Semantic Release](https://github.com/semantic-release/semantic-release)** : Fully automated version management and package publishing

### **[Jest](https://jestjs.io/)** : JavaScript Testing Framework

> Add your test files either in `src/` with `my-file.spec.js` format, or in the `__tests__` folder at your project root directory

*config : `jest.config.js`*


## Requirements

- NPM account (signup on [https://www.npmjs.com/](https://www.npmjs.com/))

***note:** this repo use Github actions, but you can use any continuous integration system you want, see **semantic-release-cli [documentation](https://github.com/semantic-release/cli)** for or more informations.*

## Installation

1. Fork or clone this repo `git clone https://github.com/JimmyBeldone/open-source-starter.git`
2. Update the `package.json` file with your repo's information
3. Configure semantic-release with semantic-release-cli : `npx semantic-release-cli setup`.
![semantic-release-cli](https://github.com/semantic-release/semantic-release/raw/master/media/semantic-release-cli.png)
4. You're all set !

## Usage

### **Stage a file**

```bash
git add src/my-file.js
```

From now on when you will use `git add` on a file in `src/`, it will be automatically linted and prettified.

### **Use conventional commit**

```bash
yarn commit
```

This script will open [Commitizen](https://github.com/commitizen/cz-cli) to help you write conventional commit

### **Release / Publish**

All you need to do is **merge on master branch**, simple as that.

It will :

1. Triggers CI
2. Run your test during CI
3. Run semantic-release steps :
    - Analyse your commits
    - Bump version
    - Add release notes
    - Generate `CHANGELOG.md`
    - Publish to NPM & Github

## Contributing

Contributions are welcome ! See [contributing guidelines](https://github.com/JimmyBeldone/open-source-starter/blob/master/CONTRIBUTING.md)

## License

MIT

Copyright (c) 2019 Jimmy Beldone
