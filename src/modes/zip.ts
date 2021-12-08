import zip from 'archiver'

export default (config: any) => {
  /*
  try {
    const { directory, input, output } = config

    if (fs.existsSync('./assets/969d67c244204ef4.zip')) fs.unlink('./assets/969d67c244204ef4.zip', err => {
      if (err) throw err
    })
    
    const output = fs.createWriteStream('./assets/969d67c244204ef4.zip')
    const archive = zip('zip')
    
    archive.on('error', (err) => {
      throw err
    })
    
    archive.pipe(output)
    
    archive.directory('brand/png/', 'png')
    archive.directory('brand/svg/', 'svg')
    
    archive.finalize()
  } catch (err) {
    error('FAILED TO BUNDLE PACKAGE!')
  }
  */
}