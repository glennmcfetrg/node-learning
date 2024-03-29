//Built in modules

//The node:os module provides operating system-related utility methods and properties. It can be accessed using:
const os = require('os')

//Info about current user
const user = os.userInfo()
console.log(user)

//Method returns the system uptime in seconds
console.log(`The uptime for my PC is ${os.uptime()}.seconds`)

//You can detructure the object to get the properties
const { freemem, totalmem } = os
console.log(
  `The total memory is ${totalmem()} and the free memory is ${freemem()}`
)

//Works as an object as well
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)

//Path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path')
//Path separator for the current OS
console.log(path.sep)

//Joining paths
const filePath = path.join('/content', 'contentSubFolder', 'test.txt')
console.log(filePath)
//Get the base name of the file at the end of the path
const base = path.basename(filePath)
console.log(base)

//Get the absolute path of the file using the __dirname
const absolute = path.resolve(
  __dirname,
  'content',
  'contentSubFolder',
  'test.txt'
)
console.log(absolute)
