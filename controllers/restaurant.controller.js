
//Models
const { Restaurant } = require("../models/restaurants.model");


//middlewares

//Utils
const { AppError } = require('../utils/appError.util')
const { catchAsync } = require("../utils/catchAsync.util");

const newRestaurant = catchAsync(
    async (req,res,next) =>{
        //Name , andress, rating
      
        const { name, address, rating } = req.body;

        console.log(name, address, rating)

        const newRestaurant =  await Restaurant.create({
            name,
            address,
            rating
        })

        res.status(201).json({
            status:"succes",

        })

        console.log(newRestaurant)

    }
) 

const opensRestaurants = catchAsync(
    async (req,res,next) =>{
        // ONLY OPENS
    }
) 



const updateRestaurant = catchAsync(  
    async (req,res,next) =>{
        //Only update name and address
        
    }
) 

const closeRestaurant = catchAsync(
    async (req,res,next) =>{
        //ONLY ADMIN CAN DO IT
        
    }
) 


const addReview = catchAsync(
    async (req,res,next) =>{
        // make a new review
            //restaurantid(send comment/rating ( req.body))
        
    }
) 

const updateReview = catchAsync(
    async (req,res,next) =>{

        // only the owner of the review can update that
            // e
        
    }
) 

const deleteReview = catchAsync(
    async (req,res,next) =>{

        // only the owner of the review can update that
            // e
        
    }
) 

module.exports = {
    newRestaurant, 
    opensRestaurants, 
    updateRestaurant,
    closeRestaurant,
    addReview,
    updateReview,
    deleteReview
}