const { log } = require('console');
const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
        if(req.url === '/') {
            res.end('This is demo node project');
        }
        if(req.url === '/api') {
            res.write(JSON.stringify([1,2,3]));
            res.end();
        }
});

console.log("I am akash");
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});