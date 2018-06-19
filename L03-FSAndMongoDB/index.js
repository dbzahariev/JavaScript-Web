<<<<<<< HEAD
let http = require('http')
let fs = require('fs')
=======
const mongose = require('mongoose')
const Cat = require('./models/Cat')

mongose
    .connect('mongodb://localhost:27017/cats')
    .then(() => {
        Cat.find({}).then(cats => {
            console.log(cats)
        })
        // Cat
        //     .find()
        //     .then(cats => console.log(cats))
    })

console.log('Done')

/*
const mongose = require('mongoose')

let Cat = mongose.model('Cat', {
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    color: {
        type: String
    }
})


let Owner = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    cats: [Cat.schema]
})

let Cat = mongose.model('cats',)


mongose
    .connect('mongodb://localhost:27017/cats')
    .then(() => {
        let Cats = new cats
    })








*/










/*let http = require('http')
let fs = require('fs')
let formidable = require('formidable')
>>>>>>> parent of 10b40b2... Add new files

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
<<<<<<< HEAD
        }
        else {
            console.log('Tenx!');
        }
    }).listen(1234)
=======
        } else {
            let form = new formidable.IncomingForm()

            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.log(err)
                }

                let file = files.upload
                let tempPath = file.path
                let fileName = file.name
                fs.rename(tempPath, './files/' + fileName, err => {
                    if (err) {
                        console.log(err)
                        return
                    }

                    res.write('Ok!')
                    res.end();
                })
            })
        }
    }).listen(1234)
    */
>>>>>>> parent of 10b40b2... Add new files
