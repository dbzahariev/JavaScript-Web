const http = require("http");
const port = 1234;
const handlers = require("./handlers");

http.createServer((req, res) => {
    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(port);

console.log(`server is in port ${port}`);