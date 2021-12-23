import * as esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'
import { minify } from 'terser'
import { readFile, writeFile } from 'fs/promises'
import error from '../core/error'
import success from '../core/success'
import notice from '../core/notice'

export default (configuration: any) => {
  try {
    const start = Date.now()

    const { directory, input, output, watch, esm, css, node, exclude } = configuration

    const bundlePackage = async () => {
      await esbuild.build({
        entryPoints: [directory + input],
        bundle: true,
        ...(esm && { format: 'esm', }),
        ...(watch && { watch: {
          onRebuild(err) {
            if (err) error({ message: `Rebuild failed at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` })
            else success({ message: `Rebuilt package at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` })
          }
        }, }),
        outfile: directory + output,
        ...(css && { plugins: [cssModules()] }),
        ...(exclude && { external: exclude }),
        ...(node && { platform: 'node' })
      })

      if (watch) notice({ title: '👀 WATCHING!', message: 'Compiling in Watch Mode...' })

      if (!watch) {
        const file = await readFile(directory + output, 'utf8')
        const result: any = await minify(file, {
          format: {
            comments: false
          }
        })
        await writeFile(directory + output, result.code, 'utf-8')
        const stop = Date.now()
        success({ message: `Built package within ~${(stop - start) / 1000}s` })
      }
    }
    bundlePackage()
  } catch (err) {
    error({ message: `Building failed at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` })
  }
}