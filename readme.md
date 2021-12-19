## Azury's Bundler

[![npm](https://img.shields.io/npm/v/@azury/bundler)](https://www.npmjs.com/package/@azury/bundler)
[![npm](https://img.shields.io/npm/dt/@azury/bundler)](https://www.npmjs.com/package/@azury/bundler)
[![GitHub last commit](https://img.shields.io/github/last-commit/azurydev/bundler)](https://github.com/azurydev/bundler)
[![snyk vulnerabilities](https://snyk.io/test/github/azurydev/bundler/badge.svg)](https://snyk.io/test/github/azurydev/bundler)

### Installation

Install the package using your favorite package manager.

```sh-session
npm i @azury/bundler
yarn add @azury/bundler
```

### Bundle

```sh-session
build -i src/index.js -o build/index.js
```

#### Options

- ***--watch*** to bundle in watch mode
- ***--css*** to enable css modules

  ```js
  import styles from './styles.module.css'

  <h1 className={styles.heading}>Hello World</h1>
  ```
- ***--esm***

### Minify

> ℹ️ You can minify any file a folder or just a single file.

```sh-session
build minify -i src -o build
```

### ZIP

> ℹ️ Mention the files you want to include in the archive and make sure to not forget the output.

```sh-session
build zip -f some.png other.png image.png -o myarchive.zip
```


