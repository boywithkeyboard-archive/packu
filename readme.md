## packu

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
- ***--exclude*** or ***-e*** to exclude dependencies from the bundle

### Minify

> You can minify any file a folder or just a single file.

```sh-session
packu minify -i src -o build
```

### ZIP

> Mention the files you want to include in the archive and make sure to not forget the output.

```sh-session
packu zip -f some.png other.png image.png -o myarchive.zip
```


