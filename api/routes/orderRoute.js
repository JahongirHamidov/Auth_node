const express = require('express');
const router = express.Router()
const { 
  getOrders, 
  createOrder, 
  getOrder, 
  deleteOrder, 
  updateOrder 
} = require('../controllers/orderController');


router
  .route('/')
    .get(getOrders)
    .post(createOrder)

router
  .route("/:orderId")
    .get(getOrder)
    .delete(deleteOrder)
    .put(updateOrder)

module.exports = router