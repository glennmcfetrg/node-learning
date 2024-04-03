setInterval(() => {
    console.log('Hello World');
    }, 2000);
console.log('I will run first');

// The setInterval function is a global function that is not part of the window object like in the browser. 
//It is a global function that is available to us in Node.js. 
//The setInterval function takes two arguments: a callback function and a time in milliseconds. 
//The callback function is executed every time the time in milliseconds elapses. 
//In this case, the callback function is executed every 2000 milliseconds or 2 seconds