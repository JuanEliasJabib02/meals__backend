const express = require('express');

// Controllers

const { newRestaurant, opensRestaurants } = require("../controllers/restaurant.controller");

const {  } = require("../controllers/user.controller");
const { authentication } = require('../middleware/auth.middleware');
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




module.exports = { restaurantsRouter }