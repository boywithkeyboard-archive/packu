import { minify } from 'terser'
import { minify as minifyOther } from 'html-minifier-terser'
import { readFile, writeFile } from 'fs/promises'
import { optimize } from 'svgo'
import { existsSync, statSync } from 'fs'
import glob from 'glob'
import fse from 'fs-extra'

const css = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  const result = await minifyOther(file)
  await writeFile(output, result, 'utf-8')
}

const js = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  const result: any = await minify(file)
  await writeFile(output, result.code, 'utf-8')
}

const json = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  await writeFile(output, JSON.stringify(JSON.parse(file)), 'utf-8')
}

const svg = async (input: string, output: string, differentPath: boolean) => {
  const file = await readFile(input, 'utf-8')

  const result = optimize(file, {
    ...(differentPath && { path: input }),
    multipass: true
  })
  
  // @ts-ignore
  await writeFile(output, result.data, 'utf-8')
}

const html = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  const result = await minifyOther(file)
  await writeFile(output, result, 'utf-8')
}

type MinifyFileOrDirectory = (config: {
  input: string,
  output?: string
}) => Promise<{ success: boolean, error: string } | { success: boolean, error: undefined }>

const minifyFileOrDirectory: MinifyFileOrDirectory = async (config: {
  input: string,
  output?: string
}) => {
  if (!existsSync(config.input)) return { success: false, error: 'Please provide an existing file or directory.' }
  
  if (statSync(config.input).isFile()) {
    if (config.input.endsWith('.css')) css(config.input, config.output ?? config.input)
    else if (config.input.endsWith('.html')) html(config.input, config.output ?? config.input)
    else if (config.input.endsWith('.js')) js(config.input, config.output ?? config.input)
    else if (config.input.endsWith('.json')) json(config.input, config.output ?? config.input)
    else if (config.input.endsWith('.svg')) svg(config.input, config.output ?? config.input, (typeof config.output !== 'string'))

    return { success: true }
  } else {
    const minify = async () => {
      if (config.output && config.input !== config.output) await fse.copy(config.input, config.output)

      glob(config.output + '/**/*', (err, files) => {
        if (err) return { success: false, error: 'Something went wrong while trying to minify your files.' }

        files = files.filter(file => file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.svg') || file.endsWith('.css'))

        for (const file of files) {
          if (config.input.endsWith('.css')) css(file, file)
          else if (config.input.endsWith('.html')) html(file, file)
          else if (config.input.endsWith('.js')) js(file, file)
          else if (config.input.endsWith('.json')) json(file, file)
          else if (config.input.endsWith('.svg')) svg(file, file, false)
        }
      })
    }
    minify()

    return { success: true }
  }
}

export default minifyFileOrDirectory