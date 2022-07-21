
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
            newRestaurant

        })

    }
) 

const opensRestaurants = catchAsync(
    async (req,res,next) =>{
        // ONLY OPENS
       
        const restaurants = await Restaurant.findAll({
            where: {status:"open"}
        });

        res.status(200).json({
            status:"succes",
            restaurants
        })
    }
) 

const getRestaurantByid = catchAsync(
    async (req,res) => {
       const { restaurant } = req;
       
       res.status(200).json({
            status:"succes",
            restaurant
       })
    }
)

const updateRestaurant = catchAsync(  
    async (req,res,next) =>{
        //Only update name and address

        const { restaurant } = req;
        const { name, address} = req.body;

        await restaurant.update({
            name,
            address
        })

        res.status(204).json({
            status:"succes",
            restaurant
        })

    }
) 

const closeRestaurant = catchAsync(
    async (req,res,next) =>{
        //ONLY ADMIN CAN DO 

        const { restaurant } = req;

        await restaurant.update({
            status:"closed"
        })

        res.status(204).json({
            status:"sucess"
        })
        
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
    getRestaurantByid, 
    updateRestaurant,
    closeRestaurant,
    addReview,
    updateReview,
    deleteReview
}