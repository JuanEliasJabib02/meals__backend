
//Models
const { Restaurant } = require("../models/restaurants.model");

//Utils

const { AppError } = require('../utils/appError.util')
const { catchAsync } =require('../utils/catchAsync.util')


const restaurantExist = catchAsync(
    async (req,res,next) => {

        const { id } = req.params;

        const restaurant = await Restaurant.findOne( { where: { id} })

        if(!restaurant){
            return next( new AppError('Restaurant not found', 404))
        }

        req.restaurant = restaurant; // para pasar el objeto restaurant por el midldeware
        next();
    }
)

module.exports = { restaurantExist }