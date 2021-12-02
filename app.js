const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')



const productRoutes = require('./api/routes/productRoute')
const orderRoutes = require('./api/routes/orderRoute')
const userRoutes = require('./api/routes/userRoute')



// Middlewares
const {
  internalServerError,
  notFound
} = require('./api/middlewares/errorHandler')


app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     )
//     if(req.method === "OPTIONS"){
//         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
//         return res.status(200).json({})
//     }
//     next()
// })

// Routes which should handle requests
app.use("/products", productRoutes)
app.use("/orders", orderRoutes)
app.use("/user", userRoutes)


// Middlewares
app.use(notFound)
app.use(internalServerError)



module.exports = app;