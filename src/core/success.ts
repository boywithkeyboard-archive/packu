import chalk from 'chalk'
import boxen from 'boxen'

const messages = [
  'WHAT A MASTERPIECE!',
  'WELL DONE!',
  'GOOD JOB!',
  'NOT BAD!',
  'GG!',
  'NICE!',
  'YAYYY!'
]

const success = ({ title, message }: {
  title?: string,
  message: string
}) => {
  title = chalk.bold.greenBright(title ?? messages[Math.floor(Math.random() * messages.length)])
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

export default success