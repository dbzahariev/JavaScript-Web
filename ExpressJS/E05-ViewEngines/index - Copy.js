let express = require('express')
let app = express()
let fs = require('fs')
let handlebars = require('express-handlebars')
const path = require('path');

app.engine('.hbs', handlebars({
    extname: '.hbs'
}))
let dd = __dirname + '\static\images\expressjs-card.png'
let kk = __dirname
let cc = path.join(__dirname, '/static/images/expressjs-card.png')

app.set('view engine', '.hbs')

app.get('/viewAllBooks', (req, res) => {
    console.log('hi')
    res.render('viewAll', {
        books: [{
                bookname: `book1.png`
            },
            {
                bookname: `book2.png`
            }
        ]
    })
})

app.get('/', (req, res) => {
    res.render('index', {
        // imgURL: '../static/images/expressjs-card.png',
        // imgURL: path.join('app/libs/oauth', '/../ssl'),
        // imgURL: 'C:\Users\ramsess\Downloads\Projects\JavaScript-Web\E05-ViewEngines',
        // imgURL:  './static/images/expressjs-card.png',
        imgURL: cc,
        name: 'rame'
    })


    /*res.render('index', {
        person: [{
            name: 'Name1',
            age: 1
        },
        {
            name: 'Name2',
            age: 2
        },
        {
            name: 'Name3',
            age: 3
        }
        ]
    })
    */
}).listen(1234)