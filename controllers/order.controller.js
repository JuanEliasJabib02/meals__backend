const { Meal } = require("../models/meals.model");
const { Order } = require("../models/orders.model");
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");


const newOrder = catchAsync(
    async (req,res,next) =>{  
        
        // TOTALPRICE = QUANTITY * PRICE
        const { userActive } =req;
        const { quantity, mealId } =req.body;
        
        const meal = await Meal.findOne({
            where: {id:mealId},
        })

        if(!meal){
            return next( new AppError('Meal not found', 404))
        }

        console.log(meal)
        const mealPrice = meal.price * quantity;

        console.log(meal.id)

        const order = await Order.create({
            mealId:meal.id,
            userId: userActive.id,
            totalPrice: mealPrice,
            quantity,
            
        })

        res.status(200).json({
            status:"succes",
            order
        })

       
     }
) 

const getOrders = catchAsync(
    async (req,res,next) =>{
        
       console.log("orders")
    }
) 

const orderComplete = catchAsync(  
    async (req,res,next) =>{
        //Only update name and email
        
    }
) 

const orderCancelled = catchAsync(
    async (req,res,next) =>{
        
    }
) 


module.exports = {
     newOrder, 
     getOrders, 
     orderComplete,
     orderCancelled
}