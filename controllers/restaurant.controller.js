
//Models
const { Restaurant } = require("../models/restaurants.model");
const { Review } = require("../models/reviews.mode.js");


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
            where: {status:"open"},
            include:[{
                model:Review,
                attributes:["comment","rating", "status","userId"]
            }]
           
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
        const { comment, rating } = req.body;
        const { restaurantId } = req.params;
        const { userActive } = req;

        const newReview = await Review.create({
            comment,
            rating,
            restaurantId,
            userId: userActive.id /* Para que se le ponga dinamico el id traigo el usuario de la sesion es el id logeado y ese es el mismo id del usuario que esta creando el review */
        })

        res.status(201).json({
            status:"succes",
            newReview
        })
        
    }
) 

const updateReview = catchAsync(
    async (req,res,next) =>{

        // only the owner of the review can update that
        
        const {review} = req;
        const {comment , rating }= req.body;
        

        const reviewEdited = await review.update({
            comment,
            rating
        })
        
        res.status(204).json({
            status:"succes",
            reviewEdited
        })
        
    }
) 

const deleteReview = catchAsync(
    async (req,res,next) =>{

        // only the owner of the review can update that
           
         /* Tecnica soft delete */
       const { review } = req; // Viene desde el middleware
        
       await review.update ({status:'disabled'});
   
       res.status(204).json({status:'sucess'});
        
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