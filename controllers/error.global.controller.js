const globalErrorHandler =  (err,req ,res ,next) => { 
    const statusCode = err.statusCode || 500 // Reparando para que muestre el statusCode que es
    res.status(statusCode).json({
        // fail -> error del servidor
        // error -> el usuario fue el q ocasiono el error
        status:'fail',
        message:err.message,
        error:err,
        stack: err.stack,
    });
}

module.exports = {globalErrorHandler};