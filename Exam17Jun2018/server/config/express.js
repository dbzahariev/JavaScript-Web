const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const handlebars = require('express-handlebars')

module.exports = (app) => {
  app.engine('.hbs', handlebars({
    defaultLayout: 'main', // TODO: Ako smenish imeto na layout v /views/layouts/ smeni i tuk
    extname:'.hbs',
	// TODO: partialsDir:'/views/partials' ako go nqma e po default tazi papka
  }))
  app.set('view engine', '.hbs')
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user
    }

    next()
  })

  app.use(express.static('public')) // TODO: Tuk napishi kak ti se kazva publichnata ti papka (kydeto ti e css)

  console.log('Express ready!')
}
