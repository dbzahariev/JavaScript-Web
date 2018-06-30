const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/index.html', controllers.home.index)

  app.get('/register.html', controllers.users.registerGet)
  app.post('/register.html', controllers.users.registerPost)
  app.get('/login.html', controllers.users.loginGet)
  app.post('/login.html', controllers.users.loginPost)
  app.get('/logout.html', controllers.users.logout)
  app.post('/logout.html', controllers.users.logout)

  app.get('/create.html', auth.isAuthenticated, controllers.articles.createGet)
  app.get('/create', auth.isAuthenticated, controllers.articles.createGet)
  app.post('/create.html', auth.isAuthenticated, controllers.articles.createPost)
  app.post('/create', auth.isAuthenticated, controllers.articles.createPost)

  app.get('/all-articles.html', controllers.articles.showAllGet)

  app.get('/article/details/:id', controllers.articles.showOneGet)
  app.get('/article/edit/:id', controllers.articles.editOneGet)
  app.post('/article/edit/:id', controllers.articles.editOnePost)
  app.get('/article/history/:id', controllers.articles.historyGet)


  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}