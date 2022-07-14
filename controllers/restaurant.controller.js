const { catchAsync } = require("../utils/catchAsync.util");


const newRestaurant = catchAsync(
    async (req,res,next) =>{
        //Name , andress, rating

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