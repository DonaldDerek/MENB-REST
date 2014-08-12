var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  dev: {
      db: 'mongodb://localhost/menb',
      root: rootPath,
      app: {
        name: 'MENB-REST-API-DEV'
      }
  },
  prod: {
      db: 'mongodb://',
      root: rootPath,
      app: {
        name: 'MENB-REST-API'
      }
  }
}
