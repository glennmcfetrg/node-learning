const {readFile} = require('fs');

console.log('started first task');
// CHECK FILE PATH!!!!
//async function that offloads the reading of the file to the operating system
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        console.log('completed first task');
    });
console.log('starting next task');
