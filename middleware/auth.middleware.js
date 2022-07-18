const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'})

//Models

const { User } = require('../models/users.model')

//Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');



const authentication = catchAsync(
    async(req,res,next) => {

        // Extraemos el token 
        let token = undefined;
    
        if( req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
           token = req.headers.authorization.split(' ')[1];
        }
    
        if(!token){
            return next( new AppError('Invalid Token'), 403);
        }

         // Validar si el token caduco
         const decoded = await jwt.verify(
            token,
            process.env.JWT_SIGN
        )
    
         /* console.log(decoded.id) */
     
         const userActive = await User.findOne( { where: { id : decoded.id}, status:"active"})
     
         if(!userActive) {
             return next(new AppError("The owner of this token dont exist anymore", 403))
         }
         req.userActive = userActive;
         next(); 
    }
)


const protectUserAccount = catchAsync(
    async (req,res,next) => {

         const { userActive, user } = req; // para obtener el usuario logeado
         console.log(userActive.id)
         console.log(user.id)

         if(userActive.id !== user.id){
            return next( new AppError ('Esta no es tu cuenta',403))
         }
        next();
    }
 )
module.exports = { authentication, protectUserAccount}