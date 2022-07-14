const { db , DataTypes } = require('../utils/database.util') // Importo la conexion de la base de datos para poder usarla


const Order = db.define('order', {
    id:{ 
        primaryKey: true, 
        unique:true,
        type: DataTypes.INTEGER,
        autoIncrement:true, 
        allowNull:false
    },
    mealId:{ // Este valor funcionara como una foreight key
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    userId:{ // Este valor funcionara como una foreight key
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    totalPrice:{ // Este valor funcionara como una foreight key
        type: DataTypes.NUMBER,
        allowNull:false,
    },
    quantity:{ // Este valor funcionara como una foreight key
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active' 
    },
})

module.exports = { Order }