const mongoose = require('mongoose')
const {
    NODE_ENV,
    PORT,
    MONGO_URI 
} = require('../config/config')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true
        })
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB