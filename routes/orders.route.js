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


// Documentation

/**
 * @swagger
 * /api/v1/orders:
 *  post:
 *    summary: new order
 *    tags: [orders]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/order"
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                  status: "active"
 *                  id: 1
 *                  mealId: 1
 *                  userId: 1
 *                  totalPrice: 40
 *                  quantity: 1
 *                  updatedAt: 2022-08-29T19:20:58.949Z
 *                  createdAt: 2022-08-29T19:20:58.949Z
 *    security:
 *     - bearerAuth: []
 */





//Schemas

/**
 * @swagger
 * components:
 *  schemas:
 *    order:
 *      type: object
 *      properties:
 *        mealId:
 *          type: integer
 *        quantity:
 *          type: int
 *          required:
 *            mealId
 *            quantity
 *      example:
 *        mealId: 1
 *        quantity: 2
 */