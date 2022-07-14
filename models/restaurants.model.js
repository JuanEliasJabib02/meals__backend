const { db , DataTypes } = require('../utils/database.util') // Importo la conexion de la base de datos para poder usarla

const Restaurant = db.define('restaurant', {
    id:{ 
        primaryKey: true, 
        unique:true,
        type: DataTypes.INTEGER,
        autoIncrement:true, 
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    address:{
        type: DataTypes.STRING,
        allowNull:false
    },
    rating:{
        type:DataTypes.NUMBER,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'open' 
    },
})

module.exports = { Restaurant }