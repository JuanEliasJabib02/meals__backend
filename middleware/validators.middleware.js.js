const {body,validationResult} = require('express-validator');

const  {AppError} = require('../utils/appError.util');


const checkResult = (req,res,next) => {

    const errors = validationResult(req);

    console.log(errors);
    /* si errors no esta vacio */
    if(!errors.isEmpty()){

        const errorMsgs = errors.array().map(err => err.msg); // Esta funcion regresa mi arreglo de errores   
        const message = errorMsgs.join('. ')
        return next(  new AppError(message, 500));
    }

    next();
    
    
}

const userValidator = [

    
         /* Con el body le indicamos los campos obligatorios del modelo que requerimos para ejecutar el endpoint 
            , miramos en el controlador lo que requerimos para crear el usuario */
         body('name')
            .notEmpty()//Este metodo nos permite indicar que este campo no puede estar vacio
                .withMessage('Can not be empty'),// Con este metodo le ponemos un mensaje a la condicion que mostrara en el  al cliente si no se cumple
        body('email')
            .isEmail() // Este metodo revisa que tenga lo necesario para ser un email
                .withMessage('Must provide a valid email'),
        body('password')
            .isLength({min:8})// para que el minimo de caracteres sea 8
                .withMessage('password must be at least 8 characters long') // A cada condicion le podemos poner un mensaje por si no se cumple una
            .isAlphanumeric() // Este metodo hace que tenga que tener numeros y letras
                .withMessage('password must contain letters and numbers'),             
        checkResult,  // Para que valide las condiciones del body con ayuda de Validation Result
    
       
]


const restaurantValidator = [
      
    body('name')
        .notEmpty().isString().isLength({min:2})
            .withMessage("Name can not be empty"),
    body('address')
        .notEmpty().isString().isLength({min:2})
            .withMessage("address can not be empty"),
    checkResult,
]




module.exports = {userValidator, restaurantValidator}