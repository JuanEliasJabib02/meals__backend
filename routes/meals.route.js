const express = require('express')

//controllers
const { newMeal, getMeals, getMealById, updateMeal, deleteMeal } = require('../controllers/meal.controller');
const { authentication, isAdmin } = require('../middleware/auth.middleware');
const { mealValidator } = require('../middleware/validators.middleware.js');

//middlewares


//routes
const mealsRouter =  express.Router();

//endpoints


mealsRouter.post('/:id',
    authentication,
    mealValidator,
    newMeal
)

mealsRouter.get('/',
    getMeals
)

mealsRouter.get('/:id',
    getMealById
)

mealsRouter.patch('/:id',
    authentication,
    isAdmin,
    updateMeal
)

mealsRouter.delete('/:id',
    authentication,
    isAdmin,
    deleteMeal
)

module.exports = {mealsRouter}



// Documentation

/**
 * @swagger
 * /api/v1/meals/{id}:
 *  post:
 *    summary: new meal
 *    tags: [meals]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/meal"
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                  status: "succes"
 *                  id: 1
 *                  name: Pollo frito 
 *                  price: 20
 *                  updatedAt: 2022-08-29T19:20:58.949Z
 *                  createdAt: 2022-08-29T19:20:58.949Z
 *    security:
 *     - bearerAuth: []
 */


/**
 * @swagger
 * /api/v1/meals:
 *  get:
 *    summary: get meals 
 *    tags: [meals]
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
 * /api/v1/meals/{id}:
 *  get:
 *    summary: get meal by id
 *    tags: [meals]
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *    responses:
 *      200:
 *        description: Success
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */


/**
 * @swagger
 * /api/v1/meals/{id}:
 *  patch:
 *    summary: update meal
 *    tags: [meals]
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/meal"
 *    responses:
 *      200:
 *        description: Success
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 *    security:
 *     - bearerAuth: []
 */

/**
 * @swagger
 * /api/v1/meals/{id}:
 *  delete:
 *    summary: delete restaurant
 *    tags: [meals]
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
 *    security:
 *     - bearerAuth: []
 */




//Schemas

/**
 * @swagger
 * components:
 *  schemas:
 *    meal:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        price:
 *          type: string
 *          required:
 *            name
 *            price
 *      example:
 *        name: Pollo frito
 *        price: 20
 */