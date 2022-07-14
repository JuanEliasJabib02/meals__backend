const { catchAsync } = require("../utils/catchAsync.util");


const newOrder = catchAsync(
    async (req,res,next) =>{

    }
) 

const getOrders = catchAsync(
    async (req,res,next) =>{
        
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