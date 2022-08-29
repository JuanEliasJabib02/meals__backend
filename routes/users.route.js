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
   /*  userValidator, */
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
 * /api/users:
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
 *        description: new user created
 */


usersRouter.post('/login',
    login
)



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

