const http = require('http');
const port = 5000;
const url = require('url');
const fs = require('fs');


const server = http.createServer(frontController)

/**
 * 
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 */
function frontController(req, res) {
    const path = url.parse(req.url).pathname;

    console.log(path)
    if (path == '/' || path == '/index.html') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./error.html', (err, data) => {
            res.writeHead(404, {
                'content-type': 'text/html'
            })
            res.write(data);
            res.end();
        })
        return;
    }
}
server.listen(port);
console.log(`Lisening on port ${port}...`);