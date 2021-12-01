const mongoose = require('mongoose')

// const Order = require('../models/orderModel')
// const Product = require('../models/productModel')


// const getOrders = async(req, res, next) => {
//   Order.find()
//     .select("product quantity _id")
//     .populate('product', 'name')
//     .exec()
//     .then(docs => {
//       res.status(200).json({
//         count: docs.length,
//         orders: docs.map(doc => {
//           return {
//             _id: doc._id,
//             product: doc.product,
//             quantity: doc.quantity,
//             request: {
//               type: "GET",
//               url: "http://localhost:3000/orders/" + doc._id
//             }
//           };
//         })
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// }

// const createOrder = async(req, res, next) => {
//   Product.findById(req.body.productId)
//     .then(product => {
//       if (!product) {
//         return res.status(404).json({
//           message: "Product not found"
//         });
//       }
//       const order = new Order({
//         _id: mongoose.Types.ObjectId(),
//         quantity: req.body.quantity,
//         product: req.body.productId
//       });
//       return order.save();
//     })
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: "Order stored",
//         createdOrder: {
//           _id: result._id,
//           product: result.product,
//           quantity: result.quantity
//         },
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/orders/" + result._id
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// }

// const getOrder = async(req, res, next) => {
//   Order.findById(req.params.orderId)
//     .populate('product')
//     .exec()
//     .then(order => {
//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found"
//         });
//       }
//       res.status(200).json({
//         order: order,
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/orders"
//         }
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// }

// const deleteOrder = async(req, res, next) => {
//   Order.remove({ _id: req.params.orderId })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//         message: "Order deleted",
//         request: {
//           type: "POST",
//           url: "http://localhost:3000/orders",
//           body: { productId: "ID", quantity: "Number" }
//         }
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// }


const getOrders = async(req, res, next ) => {
    res.status(200).json({
        message: 'GET all orders'
    })
}

const getOrder = async(req, res, next) => {
    res.status(200).json({
        message: "GET Order by id",
        orderId: req.params.orderId
    })
}

const createOrder = async(req, res, next ) => {
    const order = {
        productId: req.body.objectId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'CREATE order',
        newOrder: order
    })
}

const updateOrder = async(req, res, next) => {
    res.status(200).json({
        message: "PUT update Order by ID",
        orderId: req.params.orderId
    })
}
const deleteOrder = async(req, res, next ) => {
    res.status(200).json({
        message: 'Delete order by ID',
        orderId: req.params.orderId
    })
}


module.exports = {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrder

}