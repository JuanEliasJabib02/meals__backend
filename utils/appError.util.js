class AppError extends Error {
    constructor(message, statusCode) {
        super(message);  // Cuando heredamos una clase de otro constructor para poder usar sus atributos debemos invocarla con el metodo super
        
        this.message = message;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("5") ? 'fail' : 'error' ;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { AppError }