import esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'
import { minify } from 'terser'
import chalk from 'chalk'
import boxen from 'boxen'

export default (config: any) => {
  try {
    const start = Date.now()

    const { directory, input, output, watch, esm, css } = config
  
    console.log(directory)
    esbuild.build({
      entryPoints: [directory + input],
      bundle: true,
      ...(esm && { format: 'esm', }),
      ...(watch && { watch: true, }),
      outfile: directory + output,
      ...(css && { plugins: [cssModules()] })
    })
  
    const stop = Date.now()
  
    console.log(boxen(`${chalk.bold.greenBright('BUNDLED PACKAGE!')}\n${chalk.blackBright(`within ~${(stop - start) / 1000}s`)}`, { title: chalk.bold.yellow('BUNDLER'), titleAlignment: 'center', padding: 1, textAlignment: 'center', margin: 2, borderStyle: 'round', borderColor: 'yellow' }))
  } catch (err) {
    console.log(chalk.bold.redBright('FAILED TO BUNDLE PACKAGE! ') + chalk.blackBright(err.toString()))
  }
}