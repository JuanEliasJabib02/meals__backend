const express = require('express');


//CONTROLLERS
const { newOrder, getOrders, orderComplete, orderCancelled } = require('../controllers/order.controller');
//MIDDLEWARES
const { authentication } = require('../middleware/auth.middleware');

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

ordersRouter.patch('/',
    authentication,
    orderComplete,
    
)

ordersRouter.delete('/',
    authentication,
    orderCancelled
    
)

module.exports = {ordersRouter}