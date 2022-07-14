 /* Esta funcion funciona como una envolvete para que aplique la logica en la funcion que la necesitemos
 y no tener que escribir  el try catch en todas */
 const catchAsync = (fn) => {
    // La funcion necesita estos argumento para funcionar
    return (req,res,next) => {
                    /* Podemos omitir el .then() y en el catch pedimos que mande el error */
        fn(req, res, next)
            .catch((err) => { // Esta catch es el que se encarga de atrapar cualquier error de funcion de controlador que le pasemos
                next(err);
            });
    }
 }

 module.exports = { catchAsync }