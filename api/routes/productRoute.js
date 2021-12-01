const express = require('express')
const { 
    getProducts, 
    getProduct, 
    updateProduct, 
    createProduct, 
    deleteProduct 
} = require('../controllers/productController')
const router = express.Router()
 

router
    .route('/')
        .get(getProducts)
        .put(updateProduct)
        .post(createProduct)
        .delete(deleteProduct)

router
    .route('/:productId')
        .get(getProduct)

module.exports = router