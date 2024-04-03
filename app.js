const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
});

//request event hits the server when we go to localhost:5000 in the browser