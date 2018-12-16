const path = require('path')
const express = require('express')


module.exports = {
  app: function () {
   var app = express();
	


    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, 'public'));
 console.log("YES EXPRESSSSSSSSSSSSS ME ");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// 	app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

    app.use('/public',publicPath);   
    app.get('https://myapplicationdata.herokuapp.com/', function (req, res) {res.sendFile(indexPath) });

   return app;
  }
}
