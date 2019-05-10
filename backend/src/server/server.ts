import http = require('http');
import { Server } from 'http';

const server: Server = http.createServer((req, res) => {
    res.end('Node server works');
});

server.listen(process.env.PORT || 3000);
