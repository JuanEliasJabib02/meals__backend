//Models
const { Meal } = require("../models/meals.model");
const { Restaurant } = require("../models/restaurants.model");

const { catchAsync } = require("../utils/catchAsync.util");


const newMeal = catchAsync(
    async (req,res,next) =>{
       
       const {name, price} = req.body;
       const { id } = req.params;

       const restaurant = await Restaurant.findOne({where:{id}})
       
       const newFood = await Meal.create({
            name,
            price,
            restaurantId: restaurant.id
       })

       res.status(201).json({
            status:"succes",
            newFood
       })

    }
) 

const getMeals = catchAsync(
    async (req,res,next) =>{
        
        const meals = await Meal.findAll({
            where: {status:"avalaible"},
            include:[{
                model:Restaurant,
            }]
        })

        res.status(200).json({
            status:"succes",
            meals,
        })
    }
) 

const getMealById = catchAsync(  
    async (req,res,next) =>{
        //Only ACTIVES
        
    }
) 

const updateMeal = catchAsync(
    async (req,res,next) =>{
        //ONLY ADMIN CAN DO IT
        //name, price
        
    }
) 

const deleteMeal = catchAsync(
    async (req,res,next) =>{
        //ONLY ADMIN
        
    }
) 


module.exports = {
    newMeal,
    getMeals, 
    getMealById, 
    updateMeal, 
    deleteMeal
}

