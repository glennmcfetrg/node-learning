// In Node.js, all files are modules by default. We use 'require' to import them.
// We control what we share with other files using 'module.exports' and destructuring for multiple exports,
// or just 'module.exports' for single exports.

// 'sayHi' uses the single export from '5-utils.js'.
// 'names' uses the multiple exports from '4-names.js'.

// The following two functions use the alternate export from '6-alternateExport.js':
// - One function displays the first item in the array.
// - The other function displays the name of the single person object.

// The code inside the 'require' function is executed immediately when 'app.js' is run, 
// even though it is not called here. This is because it is being called in the '7-mindgrenade.js' file.
// This happens because the module is wrapped in a function, and when you import it, you invoke that function.
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternateExport')

require('./7-mindgrenade')

sayHi(names.glenn)
//sayHi(names.john)
//sayHi('Susan')
sayHi(data.items[1])
sayHi(data.singlePerson.name)
