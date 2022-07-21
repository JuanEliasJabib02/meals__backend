const express = require('express')

//controllers
const { newMeal, getMeals, getMealById, updateMeal, deleteMeal } = require('../controllers/meal.controller');
const { authentication } = require('../middleware/auth.middleware');
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
    updateMeal
)

mealsRouter.delete('/:id',
    deleteMeal
)

module.exports = {mealsRouter}