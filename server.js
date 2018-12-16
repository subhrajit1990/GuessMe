const path = require('path')
const express = require('express')


module.exports = {
  app: function () {
    var app = express();
	
	app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, 'public'));
    app.use('/public',publicPath);   
    app.get('/', function (_, res) {res.sendFile(indexPath) });

   return app;
  }
}
