const { readFile, writeFile } = require('fs')
readFile('./first/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
  }
  const first = result

  readFile('./first/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
    }
    const second = result
    writeFile(
      './first/result-async.txt',
      `Hello ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
        }
        console.log(result)
      }
    )
  })
})
