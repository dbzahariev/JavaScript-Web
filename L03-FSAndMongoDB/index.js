let http = require('http')
let fs = require('fs')

http
    .createServer((req, res) => {
        if (req.method === 'GET') {
            fs.readFile('./index.html', 'utf8', (err, data) => {
                if (err) {
                    console.log(err)
                    return
                }

                res.writeHead(200, {
                    'content-type': 'text/html'
                })
                res.write(data)
                res.end()
            })
        }
        else {
            console.log('Tenx!');
        }
    }).listen(1234)