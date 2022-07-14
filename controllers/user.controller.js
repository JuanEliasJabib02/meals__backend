//Libraries
const  bcrypt = require('bcryptjs'); // -- > Esta libreria funciona para encriptar la contraseña

//Models

const { User } = require('../models/users.model')

//Utils
const { AppError } = require('../utils/appError.util')
const { catchAsync } = require("../utils/catchAsync.util");


//Functions
const signUp = catchAsync(
    async (req,res,next) =>{
        console.log("singup")
        const { name, email, password } = req.body;
        //Encriptar pass
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashPassword
        })

        res.status(201).json({
            status:"succes",
            newUser
        })

        console.log(newUser);
         
    }
) 

const login = catchAsync(
    async (req,res,next) =>{

       const { email, password} = req.body;

       // validar email

       const correctEmail = await User.findOne({
            where: {
                email,
                status:"active"
            }
        
       })

       if(!correctEmail){
            return next( new AppError('Email is wrong', 400));
       }

       

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


const getOrdersByUser = catchAsync(
    async (req,res,next) =>{
        
    }
) 

const getOrderById = catchAsync(
    async (req,res,next) =>{
        
    }
) 

module.exports = {
    signUp,
     login,
    updateUser,
    deleteUser,
    getOrdersByUser,
     getOrderById
}