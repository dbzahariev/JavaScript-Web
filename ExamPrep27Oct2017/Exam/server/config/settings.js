const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    // TODO: Smeni imeto na bazata
    db: 'mongodb://localhost:27017/exam',
    // TODO: Smeni porta
    port: 1337
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
