//all files are modules (by default) in node so we must 
//use require to import them
// CommonJS, every file is module (by default)
//we are in control of what we share with other files
//with the use of module.exports and destructuring for multiple exports
//or just module.exports for single exports

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternateExport') 
//sayHi is using the single export from 5-utils.js
//names is using the multiple exports from 4-names.js
sayHi(names.glenn)
sayHi(names.john)
sayHi('Susan')
//these 2 functions are using the alternate export from 6-alternateExport.js
//one is displaying the first item in the array 
//and the other is displaying the name of the single person object
sayHi(data.items[1])
sayHi(data.singlePerson.name)