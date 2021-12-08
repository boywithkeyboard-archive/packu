#!/usr/bin/env node

import { hideBin } from 'yargs/helpers'
import yargs from 'yargs'
import bundle from './modes/bundle'
import minify from './modes/minify'
import zip from './modes/zip'

yargs(hideBin(process.argv))
  .command('*', 'Bundle a specific file.', () => {}, (args) => bundle({
    directory: process.cwd(),
    input: args.input ?? 'src/index.js',
    output: args.input ?? 'build/index.js',
    watch: args.watch ?? false,
    esm: args.esm ?? false,
    css: args.css ?? false
  }))
  .command('minify', 'fetch the contents of the URL', () => {}, (args) => minify({
    directory: process.cwd(),
    input: args.input,
    output: args.input
  }))
  .command('zip', 'fetch the contents of the URL', () => {}, (args) => zip({
    directory: process.cwd(),
    input: args.input,
    output: args.input
  }))
  .option('css', {
    type: 'boolean',
    description: 'Enable CSS modules.'
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

