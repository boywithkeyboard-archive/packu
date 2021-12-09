import chalk from 'chalk'

export default (time: number, message?: string) => {
  chalk.bold.greenBright(message ?? 'BUNDLED PACKAGE! ') + chalk.blackBright(`within ~${time}s`)
}