import { minifyCSS, minifyJS, minifyJSON, minifySVG, minifyHTML } from '../core/minify'
import glob from 'glob'
import fse from 'fs-extra'
import { statSync } from 'fs'
import error from '../core/error'
import success from '../core/success'

export default (config: any) => {
  try {
    const start = Date.now()

    const { directory, input, output } = config
  
    if (statSync(directory + input).isFile()) {
      if (input.endsWith('.css')) minifyCSS(directory + input, directory + output)
      if (input.endsWith('.html')) minifyHTML(directory + input, directory + output)
      if (input.endsWith('.js')) minifyJS(directory + input, directory + output)
      if (input.endsWith('.json')) minifyJSON(directory + input, directory + output)
      if (input.endsWith('.svg')) minifySVG(directory + input, directory + output, true)
    } else {
      const minify = async () => {
        await fse.copy(directory + input, directory + output)

        glob(directory + output + '/**/*', (err, files) => {
          if (err) return error(err)
  
          files = files.filter(file => file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.svg') || file.endsWith('.css'))
  
          files.forEach(file => {
            if (input.endsWith('.css')) minifyCSS(file, file)
            if (input.endsWith('.html')) minifyHTML(file, file)
            if (input.endsWith('.js')) minifyJS(file, file)
            if (input.endsWith('.json')) minifyJSON(file, file)
            if (input.endsWith('.svg')) minifySVG(file, file, false)
          })
        })
      }
      minify()
    }

    const stop = Date.now()

    success((stop - start) / 1000)
  } catch (err) {
    error(err)
  }
}