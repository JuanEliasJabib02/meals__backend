const express = require('express');

// Controllers
const { newRestaurant, opensRestaurants, getRestaurantByid, updateRestaurant, closeRestaurant } = require("../controllers/restaurant.controller");

//Middlewares
const { authentication, isAdmin } = require('../middleware/auth.middleware');
const { restaurantExist } = require('../middleware/restaurants.middleware');
const { restaurantValidator } = require('../middleware/validators.middleware.js');

// Router

const restaurantsRouter = express.Router();

// Endpoints

restaurantsRouter.post('',
  authentication,
  restaurantValidator,
  newRestaurant,
 )

restaurantsRouter.get('',
  opensRestaurants,
 )

 restaurantsRouter.get('/:id',
    restaurantExist,
    getRestaurantByid
 )

restaurantsRouter.patch('/:id',
    authentication,
    isAdmin,
    restaurantExist,
    restaurantValidator,
    updateRestaurant
)

restaurantsRouter.delete('/:id',
    authentication,
    isAdmin,
    restaurantExist,
    closeRestaurant
)



module.exports = { restaurantsRouter }