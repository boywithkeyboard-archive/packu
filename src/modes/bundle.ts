import esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'
import success from '../core/success'
import { minify } from 'terser'
import error from '../core/error'
import { readFile, writeFile } from 'fs/promises'

export default (config: any) => {
  try {
    const start = Date.now()

    const { directory, input, output, watch, esm, css, node, exclude } = config

    const build = async () => {
      await esbuild.build({
        entryPoints: [directory + input],
        bundle: true,
        ...(esm && { format: 'esm', }),
        ...(watch && { watch: true, }),
        outfile: directory + output,
        ...(css && { plugins: [cssModules()] }),
        ...(exclude && { external: exclude }),
        ...(node && { platform: 'node' })
      })

      if (!watch) {
        const file = await readFile(directory + output, 'utf8')
        const result = await minify(file)
        await writeFile(directory + output, result.code, 'utf-8')
      }
    }
    build()
  
    const stop = Date.now()
  
    success((stop - start) / 1000)
  } catch (err) {
    error(err)
  }
}