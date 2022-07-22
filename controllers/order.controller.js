const e = require("express");
const { Meal } = require("../models/meals.model");
const { Order } = require("../models/orders.model");
const { Restaurant } = require("../models/restaurants.model");
const { User } = require("../models/users.model");
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
        
       const orders = await Order.findAll({
        
            where: {
                status:"active"
            },
            attributes:[
                "id",
                "userId",
                "quantity"
            ],

            include:[{
                model:User, // AVERIGUAR COMO MOSTRAR
            }],
            include:[{
                model:Meal,
                attributes:["name","price","status"],
                include:[{
                    model:Restaurant,
                    attributes:["name","address",]
                    
                }],
                
            }]
            
           
       });

       res.status(200).json({
            status:"succes",
            orders
       })
    }
) 

const orderComplete = catchAsync(  
    async (req,res,next) =>{

        const { order } =req;

        const complete = await order.update({
            status:"complete"
        })

        res.status(200).json({
            status:"succes",
        })
    }
) 

const orderCancelled = catchAsync(
    async (req,res,next) =>{

        
        const { order } =req;

        const deleted = await order.update({
            status:"delete"
        })

        res.status(200).json({
            status:"succes",
        })
        
    }
) 


module.exports = {
     newOrder, 
     getOrders, 
     orderComplete,
     orderCancelled
}