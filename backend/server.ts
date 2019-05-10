import { Server } from 'http';
import debug = require("debug");
import app        from './app';

import http = require('http');


const normalizePort = (val: string) => {
    const port: number = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

// TODO: check type of error
const onError = (error: any) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind: string = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind: string = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};

const port: string | number | false = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server: Server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
