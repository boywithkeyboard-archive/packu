const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  watch: true,
  platform: 'node',
  external: ['esbuild', 'fs', 'terser', 'html-minifier-terser', 'archiver', 'chalk', 'css-tree', 'esbuild-css-modules-plugin', 'fs-extra', 'glob', 'svgo', 'yargs'],
  outfile: 'build/index.js'
})