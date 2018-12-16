const path = require('path')
const express = require('express')


module.exports = {
  app: function () {
   // var app = express();
	
	const router = express.Router();

    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, 'public'));
 console.log("YES EXPRESSSSSSSSSSSSS ME ");


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// 	app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

    router.use('/public',publicPath);   
    router.get('/', function (req, res) {res.sendFile(indexPath) });

   return router;
  }
}
