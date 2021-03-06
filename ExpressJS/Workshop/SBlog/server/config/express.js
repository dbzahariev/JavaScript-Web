const express = require('express')
const handlebars = require('express-handlebars')

module.exports = (app) => {
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        defaultLayout: 'main'
    }))
    app.set('view engine', '.hbs')
    app.use(express.static('public'))
    console.log('Express ready!')
}
// index.js
require('./server/config/express')(app)