const path = require('path')
const express = require('express')


module.exports = {
  app: function () {
    var app = express();
	
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, 'public'));
    app.use('/public',publicPath);   
    app.get('/*', function (_, res) {res.sendFile(indexPath) });

   return app;
  }
}
