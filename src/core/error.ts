import chalk from 'chalk'

export default (err: any) => {
  console.log(chalk.bold.redBright('FAILED TO BUNDLE PACKAGE! ') + chalk.blackBright(err.toString()))
}