const logger = require('./logger');
const http = require('http');
const path = require('path');
const os = require('os');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello world');
    }
    if(req.url === '/api') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('New Connection...');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);

logger.log(`Listening on port ...${port}`);
