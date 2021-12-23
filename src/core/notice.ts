import chalk from 'chalk'
import boxen from 'boxen'

const notice = ({ title, message }: {
  title?: string,
  message?: string
}) => {
  title = chalk.bold.yellow(title ?? 'NOTICE!')
  message = chalk.blackBright(message)

  console.log(boxen(`${title} \n ${message}`, {
    padding: 1,
    borderStyle: 'round',
    margin: {
      top: 10,
      right: 6,
      bottom: 3,
      left: 6
    },
    textAlignment: 'center',
    borderColor: 'yellow',
    title: '📦 packu',
    titleAlignment: 'center'
  }))
}

export default notice