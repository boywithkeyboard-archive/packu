import * as esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'
import { minify } from 'terser'
import { readFile, writeFile } from 'fs/promises'

type BundleFile = (config: {
  input: string,
  output: string,
  watch?: boolean,
  esm?: boolean,
  css?: boolean,
  node?: boolean,
  exclude?: string[],
  onRebuild?: Function,
  onError?: (error: Error) => void,
  onSuccess?: (buildTime: number) => void,
  preWatching?: Function
}) => Promise<void>

const bundleFile: BundleFile = async (config) => {
  const { input, output, watch, esm, css, node, exclude, onRebuild: _onRebuild, preWatching, onError, onSuccess } = config

  try {
    const start = Date.now()
    , bundle = async () => {
      await esbuild.build({
        entryPoints: [input],
        bundle: true,
        ...(esm && { format: 'esm', }),
        ...(watch && { watch: {
          onRebuild(err) {
            if (err) return onError && onError(err as Error)
            else if (_onRebuild) _onRebuild()
          }
        }, }),
        outfile: output,
        ...(css && { plugins: [cssModules()] }),
        ...(exclude && { external: exclude }),
        ...(node && { platform: 'node' })
      })

      if (watch && preWatching) preWatching()

      if (!watch) {
        const file = await readFile(output, 'utf8')
        const result: any = await minify(file, {
          format: {
            comments: false
          }
        })
        await writeFile(output, result.code, 'utf-8')
        const stop = Date.now()
        if (onSuccess) onSuccess((stop - start) / 1000)
      }
    }
    bundle()
  } catch (err) {
    if (onError) onError(err as Error)
  }
}

export default bundleFile