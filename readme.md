## Azury's Bundler

**A better bundler for Node.js**

## Installation

Install the package using your favorite package manager.

```sh-session
npm i @azury/bundler
yarn add @azury/bundler
```

## Usage

**Default Mode** `Production`

Bundles a specific file using **esbuild**.

```sh-session
bundle
```

**Watch Mode** `Development`

Bundles a specific file in watch mode using **esbuild**.

```sh-session
bundle --watch
```

**Images Mode**

Minifies **all images** in a specific folder.

```sh-session
bundle --images
```

**Minify Mode**

Minifies **all files** in a specific folder.

```sh-session
bundle --minify
```

**CSS Modules**

Bundles a specific file *(with css modules)* using **esbuild**.

```sh-session
bundle --css
```

Bundles a specific file *(with css modules)* in watch mode using **esbuild**.

```sh-session
bundle --css --watch
```
