//HTTP Module
const http = require('http')

//Initialize the server with http.createServer method
//The method takes a callback function with two arguments:
//1. The request object
//2. The response object
//The request object contains information about the request made by the client
//The response object contains methods to send a response to the client

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
    return
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
    return
  }
  res.end(`<h1>Opps!</h1>
  <a href="/">Back Home</a>`)
  //The write method is used to send a response to the client
  //res.write('Welcome to our home page');
  //The end method is used to end the response process
  //res.end();
})

server.listen(5000) //This will start the server on port 5000
//http://localhost:5000/ will display the message 'Welcome to our home page' in the browser
