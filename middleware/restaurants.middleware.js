
//Models
const { Restaurant } = require("../models/restaurants.model");
const { Review } = require("../models/reviews.mode.js");

//Utils

const { AppError } = require('../utils/appError.util')
const { catchAsync } =require('../utils/catchAsync.util')




const restaurantExist = catchAsync(
    async (req,res,next) => {

        const { id } = req.params;

        const restaurant = await Restaurant.findOne(
        { 
            where: {id},
            where: {status:"open"},
            include:[{
                model:Review, // COMO TRAER SOLO LOS ACTIVOS
                attributes:["comment","rating","status"]
            }]
        })

        if(!restaurant){
            return next( new AppError('Restaurant not found', 404))
        }

        req.restaurant = restaurant; // para pasar el objeto restaurant por el midldeware
        next();
    }
)

module.exports = { restaurantExist }