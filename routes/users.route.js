const express = require('express')



//Controllers
const { signUp, login, updateUser, deleteUser, getOrdersByUser, getOrderById } = require('../controllers/user.controller');

//Middlewares
const { authentication, protectUserAccount } = require('../middleware/auth.middleware');
const { userExist } = require('../middleware/users.middleware');
const { userValidator } = require('../middleware/validators.middleware.js');


// Router
const usersRouter = express.Router();


// Endpoints



usersRouter.post('/signup', 
   userValidator,
    signUp
)

/**
 * @swagger
 * components:
 *  schemas:
 *    users:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        role:
 *          type: string
 *          required:
 *            name
 *            password
 *            email
 *            role
 *      example:
 *        name: juan elias
 *        email: juaneliasjabib02@gmail.com
 *        password: easypass1234
 *        role: admin

 */

/**
 * @swagger
 * /api/v1/users/signup:
 *  post:
 *    summary: New user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/users"
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                  status: "active"
 *                  id: 1
 *                  name: juan elias 
 *                  email: juaneliasjabib02@gmail.com
 *                  role: client
 *                  updatedAt: 2022-08-29T19:20:58.949Z
 *                  createdAt: 2022-08-29T19:20:58.949Z
 *                  
 *                       
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */


usersRouter.post('/login',
    login
)

/**
 * @swagger
 * /api/v1/users/login:
 *  post:
 *    summary: login
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/users"
 *    responses:
 *      200:
 *        description: login sucessfull
 */





usersRouter.patch('/:id',
    authentication,
    userExist,
    protectUserAccount,
    updateUser
)

usersRouter.delete('/:id',
    authentication,
    userExist,
    protectUserAccount,
    deleteUser
)

usersRouter.get('/orders',
    authentication,
    getOrdersByUser
    
)


usersRouter.get('/orders/:id',
    authentication,
    getOrderById
)





module.exports = { usersRouter }

