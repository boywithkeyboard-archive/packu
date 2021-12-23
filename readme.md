## packu

[![npm](https://img.shields.io/npm/v/packu)](https://www.npmjs.com/package/packu)
[![npm](https://img.shields.io/npm/dt/packu)](https://www.npmjs.com/package/packu)
[![GitHub last commit](https://img.shields.io/github/last-commit/azurydev/packu)](https://github.com/azurydev/packu)
[![snyk vulnerabilities](https://snyk.io/test/github/azurydev/packu/badge.svg)](https://snyk.io/test/github/azurydev/packu)

### Installation

Install **packu** using your favorite package manager.

```sh-session
npm i packu
yarn add packu
```

### Bundle

```sh-session
packu -i src/index.js -o build/index.js
```

#### Options:

- ***--watch*** to bundle in watch mode
- ***--css*** to enable css modules

  ```js
  import styles from './styles.module.css'

  <h1 className={styles.heading}>Hello World</h1>
  ```
- ***--esm*** to output code as esm
- ***--node*** to enable bundling for Node.js
- ***--exclude*** or ***-e*** to exclude files from the bundle

### Minify

> ℹ️ You can minify any file a folder or just a single file.

```sh-session
packu minify -i src -o build
```

### ZIP

> ℹ️ Mention the files you want to include in the archive and make sure to not forget the output.

```sh-session
packu zip -f some.png other.png image.png -o myarchive.zip
```


