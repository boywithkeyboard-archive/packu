const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  watch: true,
  platform: 'node',
  external: ['esbuild', 'fs', 'terser', 'html-minifier-terser'],
  outfile: 'build/index.js'
})