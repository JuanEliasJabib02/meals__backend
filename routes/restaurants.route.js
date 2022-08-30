const express = require('express');

// Controllers
const { newRestaurant, opensRestaurants, getRestaurantByid, updateRestaurant, closeRestaurant, addReview, updateReview, deleteReview } = require("../controllers/restaurant.controller");

//Middlewares
const { authentication, isAdmin,  } = require('../middleware/auth.middleware');
const { restaurantExist } = require('../middleware/restaurants.middleware');
const { reviewExist, reviewOwner } = require('../middleware/reviews.middleware');

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

restaurantsRouter.post('/reviews/:restaurantId',
  authentication,
  addReview
)


restaurantsRouter.patch('/reviews/:id',
  authentication,
  reviewExist,
  reviewOwner,
  updateReview
)

restaurantsRouter.delete('/reviews/:id',
  authentication,
  reviewExist,
  reviewOwner,
  deleteReview
)
module.exports = { restaurantsRouter }