import { minify } from 'terser'
import { minify as minifyOther } from 'html-minifier-terser'
import { readFile, writeFile } from 'fs/promises'
import { optimize } from 'svgo'

export const minifyCSS = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  const result = await minifyOther(file)
  await writeFile(output, result, 'utf-8')
}

export const minifyJS = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  const result = await minify(file)     
  await writeFile(output, result.code, 'utf-8')
}

export const minifyJSON = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  await writeFile(output, JSON.stringify(JSON.parse(file)), 'utf-8')
}

export const minifySVG = async (input: string, output: string, differentPath: boolean) => {
  const file = await readFile(input, 'utf-8')

  const result = optimize(file, {
    ...(differentPath && { path: input }),
    multipass: true
  })
  
  await writeFile(output, result.data, 'utf-8')
}

export const minifyHTML = async (input: string, output: string) => {
  const file = await readFile(input, 'utf-8')
  const result = await minifyOther(file)
  await writeFile(output, result, 'utf-8')
}