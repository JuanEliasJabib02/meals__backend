
//Models
const { Meal } = require("../models/meals.model");
const { Order } = require("../models/orders.model");
const { Restaurant } = require("../models/restaurants.model");


//Utils

const { AppError } = require('../utils/appError.util')
const { catchAsync } =require('../utils/catchAsync.util')




const orderExist = catchAsync(
    async (req,res,next) => {

        const { id } = req.params;

        const order = await Order.findOne(
        { 
            where: {id},
            where: {status:"active"},
            include:[{
                model:Meal,
                attributes:["name","price","status"],
                include:[{
                    model: Restaurant,
                    attributes:["name","address",]
                }]
            }]
        })

        if(!order){
            return next( new AppError('order not found', 404))
        }

        req.order = order; // para pasar el objeto restaurant por el midldeware
        next();
    }
)

module.exports = { orderExist }