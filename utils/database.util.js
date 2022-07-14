const { Sequelize, DataTypes} = require('sequelize') // Con esto podemos exportar sequelize


const dotenv= require('dotenv') // Para importar la libreria dotenv y poder usar las variables de entorno

                /* LA LIBRERIA DOT ENV SIEMPRE BUSCA EN LA RAIZ */
dotenv.config({path:'./config.env'})


// Conectarnos a la base de datos
const db = new Sequelize({
    dialect:'postgres', //  El dialect es la base de datos a la cual nos vamos a conectar
    host:process.env.DB_HOST, // Es la direccion de donde se encuentra el servidor
    username:process.env.DB_USER,
    password:process.env.DB_PASS, // Aqui ponemos la contraseña cuando instalamos postgres
    port:process.env.DB_PORT,
    database:process.env.DB // Aqui le decimos a sequelize a que base de datos conectarse
})

module.exports = { db, DataTypes}