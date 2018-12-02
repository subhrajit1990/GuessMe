const path = require('path')
const express = require('express')
var cors = require('cors');
var whitelist = ['https://myapplicationdata.herokuapp.com/'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};


module.exports = {
  app: function () {
    const app = express();
    app.use(cors(corsOptions));
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, 'public'));
    app.use('/public', publicPath);   
    app.get('/', function (_, res) { res.sendFile(indexPath) });
   return app;
  }
}
