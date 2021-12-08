import esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'
import success from '../core/success'
import { minify } from 'terser'
import error from '../core/error'
import fs from 'fs'

export default (config: any) => {
  try {
    const start = Date.now()

    const { directory, input, output, watch, esm, css } = config

    const build = async () => {
      await esbuild.build({
        entryPoints: [directory + input],
        bundle: true,
        ...(esm && { format: 'esm', }),
        ...(watch && { watch: true, }),
        outfile: directory + output,
        ...(css && { plugins: [cssModules()] })
      })

      const result = await minify(fs.readFileSync(directory + output, 'utf8'))
      fs.writeFileSync(directory + output, result.code, 'utf-8')
    }
    build()
  
    const stop = Date.now()
  
    success((stop - start) / 1000)
  } catch (err) {
    error(err)
  }
}