const express = require('express')

//Controllers
const { signUp, login, updateUser, deleteUser, getOrdersByUser, getOrderById } = require('../controllers/user.controller');
const { authentication, protectUserAccount } = require('../middleware/auth.middleware');
const { userExist } = require('../middleware/users.middleware');


// Router
const usersRouter = express.Router();

// Endpoints

usersRouter.post('/signup', 
   /*  userValidator, */
    signUp
)

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

