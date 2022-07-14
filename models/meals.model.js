const { db , DataTypes } = require('../utils/database.util') // Importo la conexion de la base de datos para poder usarla


const Meal = db.define('meal', {
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
    price:{
        type: DataTypes.NUMBER
    },
    restaurantId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING ,
        allowNull: false,
        defaultValue:"disponible"
    }
})

module.exports = { Meal }