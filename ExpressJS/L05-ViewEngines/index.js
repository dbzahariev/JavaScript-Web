let express = require('express')
let app = express()
let handlebars = require('express-handlebars')

app.engine('.hbs', handlebars({
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('index', {
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
}).listen(1234)