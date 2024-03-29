//Async file system stuff
//Requires a callback function to handle the result of the operation. The callback function takes two arguments:
//1. An error object, which is null if there is no error
//2. The data from the file or the result of the operation

const { readFile, writeFile } = require('fs')
//This is callback hell
//This is not the best way to handle async code
//This returns undefined because the callback function is not returning anything which is expected
//But it does create the file and write the content
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result, 'done with this task')
      }
    )
  })
})
console.log('starting next task')
