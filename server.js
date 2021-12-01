const http = require('http')
const app = require('./app')
const connectDb = require('./database/connectDb')



connectDb()

const port = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(port)