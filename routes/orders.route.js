const express = require('express');


//CONTROLLERS
const { newOrder, getOrders, orderComplete, orderCancelled } = require('../controllers/order.controller');
//MIDDLEWARES
const { authentication } = require('../middleware/auth.middleware');
const { orderExist } = require('../middleware/orders.middlewares');

//ROUTER
const ordersRouter = express.Router();

//ENDPOINTS

ordersRouter.post('/',
    authentication,
    newOrder,
    
)

ordersRouter.get('/me',
    authentication,
    getOrders,
    
)

ordersRouter.patch('/:id',
    authentication,
    orderExist,
    orderComplete,
    
)

ordersRouter.delete('/:id',
    authentication,
    orderExist,
    orderCancelled
    
)

module.exports = {ordersRouter}