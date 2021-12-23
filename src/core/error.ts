import chalk from 'chalk'
import boxen from 'boxen'

const messages = [
  'WHAT A FAIL!',
  'WHAT HAVE YOU DONE?!',
  'HELL NO!',
  'NOOOOOO!',
  'OH NO!'
]

const error = ({ title, message }: {
  title?: string,
  message?: string
}) => {
  title = chalk.bold.redBright(title ?? messages[Math.floor(Math.random() * messages.length)])
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

export default error