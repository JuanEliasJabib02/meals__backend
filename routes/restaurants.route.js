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




// Documentation

/**
 * @swagger
 * /api/v1/restaurants:
 *  post:
 *    summary: new restaurant
 *    tags: [restaurants]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/restaurants"
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                  status: "succes"
 *                  id: 1
 *                  name: Frisby 
 *                  address: calle 48c
 *                  rating: 5
 *                  updatedAt: 2022-08-29T19:20:58.949Z
 *                  createdAt: 2022-08-29T19:20:58.949Z
 *    security:
 *     - bearerAuth: []
 */

/**
 * @swagger
 * /api/v1/restaurants:
 *  get:
 *    summary: get open restaurants
 *    tags: [restaurants]
 *    responses:
 *      204:
 *        description: Success
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

/**
 * @swagger
 * /api/v1/restaurants/{id}:
 *  get:
 *    summary: get restaurant by id
 *    tags: [restaurants]
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *    responses:
 *      204:
 *        description: Success
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */


/**
 * @swagger
 * /api/v1/restaurants/{id}:
 *  patch:
 *    summary: update restaurant
 *    tags: [restaurants]
 */


/**
 * @swagger
 * /api/v1/restaurants/{id}:
 *  delete:
 *    summary: delete restaurant
 *    tags: [restaurants]
 */


/**
 * @swagger
 * /api/v1/restaurants/reviews/{id}:
 *  post:
 *    summary: add reviews to a restaurant
 *    tags: [restaurants]
 */


/**
 * @swagger
 * /api/v1/restaurants/reviews/{id}:
 *  patch:
 *    summary: update restaurant review
 *    tags: [restaurants]
 */



/**
 * @swagger
 * /api/v1/restaurants/reviews/{id}:
 *  delete:
 *    summary: delete review  
 *    tags: [restaurants]
 */








// Schemas
/**
 * @swagger
 * components:
 *  schemas:
 *    restaurants:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        address:
 *          type: string
 *        rating:
 *          type: integer
 *          required:
 *            name
 *            address
 *            rating
 *      example:
 *        name: Frisby
 *        address: calle 48c
 *        rating: 5
 */




