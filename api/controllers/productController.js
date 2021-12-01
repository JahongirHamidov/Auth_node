const mongoose = require('mongoose')

const Product = require('../models/productModel')




const getProducts = async(req, res, next) => {
    const products = await Product.find({}).lean()
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
    next()
}

const getProduct = async(req, res, next) => {
    const id = req.params.productId
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered a special id',
            id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
}

const createProduct = async(req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'new Product created',
        createdProduct: product
    })
}

const updateProduct = async(req, res, next) => {
    res.status(200).json({
        message: 'Product Updated'
    })
}
const deleteProduct = async (req, res, next) => {
    res.status(200).json({
        message: 'Product Deleted'
    })
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}