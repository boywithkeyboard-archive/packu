import esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'
import { optimize } from 'svgo'
import { minify } from 'terser'
import { minify as minifyHTML } from 'html-minifier-terser'
import yargs from 'yargs'
import boxen from 'boxen'
import chalk from 'chalk'

