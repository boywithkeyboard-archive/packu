#!/usr/bin/env node

import { hideBin } from 'yargs/helpers'
import yargs from 'yargs'
import bundle from './modes/bundle'
import minify from './modes/minify'
import zip from './modes/zip'

yargs(hideBin(process.argv))
  .command('*', 'Bundle a specific file.', () => {}, (args) => bundle({
    directory: process.cwd() + '/',
    input: args.input ?? 'src/index.js',
    output: args.output ?? 'build/index.js',
    watch: args.watch ?? false,
    esm: args.esm ?? false,
    css: args.css ?? false,
    node: args.node ?? false
  }))
  .command('minify', 'Minify one file or multiple files in a specific folder.', () => {}, (args) => minify({
    directory: process.cwd() + '/',
    input: args.input,
    output: args.output
  }))
  .command('zip', 'Create a ZIP from one or multiple files, or even folders.', () => {}, (args) => zip({
    directory: process.cwd() + '/',
    output: args.output,
    files: args.files
  }))
  .option('css', {
    type: 'boolean',
    description: 'Enable CSS modules.'
  })
  .option('node', {
    type: 'boolean',
    description: 'Bundle for Node.js.'
  })
  .option('watch', {
    alias: 'w',
    type: 'boolean',
    description: 'Enable bundling in watch mode.'
  })
  .option('input', {
    alias: 'i',
    type: 'string',
    description: 'Define the input file.'
  })
  .option('files', {
    alias: 'f',
    type: 'array',
    description: 'Define the files to archive.'
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'Define the output file.'
  })
  .option('esm', {
    type: 'boolean',
    description: 'Set JavaScript output standard to ESM.'
  })
  .demandCommand(1)
  .parse()

