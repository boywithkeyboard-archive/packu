import { readFileSync, writeFileSync } from 'fs'

import { optimize } from 'svgo'
import { minify } from 'terser'
import { minify as minifyHTML } from 'html-minifier-terser'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs'
import boxen from 'boxen'
import chalk from 'chalk'
import fs from 'fs'
import glob from 'glob'

export default (config: any) => {

  //glob('./assets' + '/**/*', (err, files) => {
  /*  if (err) throw err

    files = files.filter(file => file.endsWith('.js') || file.endsWith('.svg') || file.endsWith('.css'))
  
    files.forEach(async file => {
      if (file.endsWith('.svg')) {
        const result = optimize(fs.readFileSync(file, 'utf8'), {
          path: file,
          multipass: true
        })
    
        fs.writeFileSync(file, result.data, 'utf-8', (err) => {
          if (err) throw err
        })
      } else if (file.endsWith('.js')) {
        const result = await minify(fs.readFileSync(file, 'utf8'))
    
        fs.writeFileSync(file, result.code, 'utf-8', (err) => {
          if (err) throw err
        })
      } else {
        const result = await minifyCSS(fs.readFileSync(file, 'utf8'))
    
        fs.writeFileSync(file, result, 'utf-8', (err) => {
          if (err) throw err
        })
      }
    })
  })
  */
}