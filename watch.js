const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  watch: true,
  platform: 'node',
  external: ['esbuild'],
  outfile: 'bin/index.js'
})