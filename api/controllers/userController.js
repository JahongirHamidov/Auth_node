const mongoose = require('mongoose')




const getUsers = async(req, res, next) => {
    req.status(200).json({
        message: "Get all users"
    })
} 

module.exports = {
    getUsers
}