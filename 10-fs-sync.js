//FS Module is used to read and write files in the system and it is used to interact with the file system.
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
//The readFileSync method is used to read files in the system. It takes two arguments:
//1. The file path
//2. An options object
//The options object is either the encoding for the result, or an object that contains the encoding and an optional flag.
//If a flag is not provided, it defaults to `'r'` and the default encoding is `'utf8'`.

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)


//The writeFileSync method is used to write files in the system. It takes three arguments:
//1. The file path
//2. The content to write
//3. An options object
//The options object can have the following properties:
//1. encoding: The encoding of the file. Default is utf8
//2. flag: The flag used to determine how to write to the file. Default is 'w'
//3. mode: The file mode. Default is 0o666
//4. autoClose: A boolean value that determines if the file should be closed automatically. Default is true
//5. emitClose: A boolean value that determines if the 'close' event should be emitted. Default is false
//6. start: The starting position for writing to the file. Default is 0
//7. highWaterMark: The number of bytes to buffer before writing to the file. Default is 16 * 1024
//8. fd: The file descriptor used to write to the file
//9. mode: The file mode. Default is 0o666
//There are loads more in this case I used the flag property to append the content to the file

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
