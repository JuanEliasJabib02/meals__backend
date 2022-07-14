const { catchAsync } = require("../utils/catchAsync.util");


const signUp = catchAsync(
    async (req,res,next) =>{

    }
) 

const login = catchAsync(
    async (req,res,next) =>{
        
    }
) 

const updateUser = catchAsync(  
    async (req,res,next) =>{
        //Only update name and email
        
    }
) 

const deleteUser = catchAsync(
    async (req,res,next) =>{
        
    }
) 


const getOrders = catchAsync(
    async (req,res,next) =>{
        
    }
) 

const getOrderById = catchAsync(
    async (req,res,next) =>{
        
    }
) 

module.exports = {signUp,login,updateUser,getOrders,getOrderById}