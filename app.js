const Server = require('./server.js')
const port = (process.env.PORT || 8080)
//const app = Server.app()

const app = Server.app();
console.log(`Listening at http://localhost:${port}`)

