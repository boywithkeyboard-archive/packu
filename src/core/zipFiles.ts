import zip from 'archiver'
import { statSync, createWriteStream, createReadStream } from 'fs'

type ZipFiles = (config: {
  input: string[],
  output: string
}) => Promise<{ success: boolean, error: string } | { success: boolean, error: undefined }>

const zipFiles: ZipFiles = async (config: any) => {
  try {
    const { files, output } = config
    
    const ouputZIP = createWriteStream(output)
    const archive = zip('zip')
    
    archive.on('error', err => {
      return { success: false, error: 'Couldn\'t zip files.'}
    })

    archive.pipe(ouputZIP)

    for (const file of files) {
      if (statSync(file).isFile()) archive.append(createReadStream(file))
      // @ts-ignore
      else archive.directory(file, /[^\\]*$/.exec(file)[0])
    }
    
    archive.finalize()

    return { success: true }
  } catch (err) {
    return { success: false, error: 'Something went badly wrong.' }
  }
}

export default zipFiles