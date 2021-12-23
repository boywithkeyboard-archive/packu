import zip from 'archiver'
import { statSync, createWriteStream, createReadStream } from 'fs'
import error from '../core/error'
import success from '../core/success'

export default (config: any) => {
  try {
    const start = Date.now()

    const { directory, files, output } = config
    
    const ouputZIP = createWriteStream(directory + output)
    const archive = zip('zip')
    
    archive.on('error', (err) => {
      return error({ message: `Zipping failed at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` })
    })

    archive.pipe(ouputZIP)

    for (const file of files) {
      if (statSync(directory + file).isFile()) {
        archive.append(createReadStream(file))
      } else {
        archive.directory(directory + file, /[^\\]*$/.exec(file)[0])
      }
    }
    
    archive.finalize()

    const stop = Date.now()

    success({ message: `Zipped files within ~${(stop - start) / 1000}s` })
  } catch (err) {
    error({ message: `Zipping failed at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` })
  }
}