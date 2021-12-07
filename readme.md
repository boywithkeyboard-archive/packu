## Azury's Bundler

> [`@azury/bundler`](https://npm.im/@azury/bundler) was created explicitly for **Azury's products** and might not work for yours. 

### Installation

Install the package using your favorite package manager.

```sh-session
npm i @azury/bundler
yarn add @azury/bundler
```

### Usage

**Default Mode** `Production`

Bundles a specific file using **esbuild**.

```sh-session
build
```

**Watch Mode** `Development`

Bundles a specific file in watch mode using **esbuild**.

```sh-session
build --watch
```

**Images Mode**

Minifies **all images** in a specific folder.

```sh-session
build images
```

**Minify Mode**

Minifies **all files** in a specific folder.

```sh-session
build minify
```

**CSS Modules**

Bundles a specific file *(with css modules)* using **esbuild**.

```sh-session
build css
```

Bundles a specific file *(with css modules)* in watch mode using **esbuild**.

```sh-session
build css --watch
```
