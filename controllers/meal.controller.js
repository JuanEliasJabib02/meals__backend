const { catchAsync } = require("../utils/catchAsync.util");


const newMeal = catchAsync(
    async (req,res,next) =>{
        

    }
) 

const getMeals = catchAsync(
    async (req,res,next) =>{
        // ONLY ACTIVES
    }
) 

const getMealById = catchAsync(  
    async (req,res,next) =>{
        //Only ACTIVES
        
    }
) 

const updateMeal = catchAsync(
    async (req,res,next) =>{
        //ONLY ADMIN CAN DO IT
        //name, price
        
    }
) 

const deleteMeal = catchAsync(
    async (req,res,next) =>{
        //ONLY ADMIN
        
    }
) 


module.exports = {
    newMeal,
    getMeals, 
    getMealById, 
    updateMeal, 
    deleteMeal
}

