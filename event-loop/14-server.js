const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    //BLOCKING CODE
    //this shows we prefer to use async code as this slow the whole site
    for (let index = 0; index < 1000; index++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${index} ${j}`)
      }
    }
    res.end('Here is our short history')
  }
  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to home</a>
    `)
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
