//Libraries
const  bcrypt = require('bcryptjs'); // -- > Esta libreria funciona para encriptar la contraseña
const jwt = require('jsonwebtoken')
//Models

const { User } = require('../models/users.model')

//Utils
const { AppError } = require('../utils/appError.util')
const { catchAsync } = require("../utils/catchAsync.util");


//Functions
const signUp = catchAsync(
    async (req,res,next) =>{
        const { name, email, password, role } = req.body;
        //Encriptar pass
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            role,
        })

        res.status(201).json({
            status:"succes",
            newUser
        })

    }
) 

const login = catchAsync(
    async (req,res,next) =>{

       const { email, password} = req.body;

       // validar email

       const user = await User.findOne({
            where: {
                email,
                status:"active"
            }
        
       })

       if(!user){
            return next( new AppError('Email is wrong', 400));
       }

       const passOkay =  await bcrypt.compare(password, user.password)


         if(!passOkay) {
            return next( new AppError(' password fail', 400))
         }

         // Generate Token (Sirve como ticket de entrada)

         const token = jwt.sign(
            {id: user.id},
            process.env.JWT_SIGN,
            {
                expiresIn:"2d"
            }
         )

         res.status(200).json({
            status:"succes",
            token,
         })
        
    }
) 

const updateUser = catchAsync(  
    async (req,res,next) =>{
        console.log("actualizado")

        const { user } = req

        const {name, email} = req.body;
    
        const userEdited = await user.update({name, email })

       /*  console.log(userEdited) */
    
        res.status(204).json(
        {
            status:"sucess",
            userEdited,
        })
      

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