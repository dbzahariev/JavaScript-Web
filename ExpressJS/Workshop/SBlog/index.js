const express = require('express')
const config = require('./server/settings')
const app = express()

let env = 'development'
require('./server/config/database')(config[env])
require('./server/config/express')(app, config[env])
require('./server/config/passport')()
require('./server/config/routes')(app)

app.listen(3000)
