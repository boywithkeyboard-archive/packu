import boxen from 'boxen'
import chalk from 'chalk'

export default (time: number, message?: string) => {
  console.log(boxen(`${chalk.bold.greenBright(message ?? 'BUNDLED PACKAGE!')}\n${chalk.blackBright(`within ~${time}s`)}`, { title: chalk.bold.yellow('BUNDLER'), titleAlignment: 'center', padding: 1, textAlignment: 'center', margin: 2, borderStyle: 'round', borderColor: 'yellow' }))
}