import zip from 'archiver'
import error from '../core/error'
import success from '../core/success'
import { statSync, createWriteStream, createReadStream } from 'fs'

export default (config: any) => {
  try {
    const start = Date.now()

    const { directory, files, output } = config
    
    const ouputZIP = createWriteStream(directory + output)
    const archive = zip('zip')
    
    archive.on('error', (err) => {
      return error(err)
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

    success((stop - start) / 1000, 'ZIPPED FILES!')
  } catch (err) {
    error(err)
  }
}