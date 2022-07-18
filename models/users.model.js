const { db , DataTypes } = require('../utils/database.util') // Importo la conexion de la base de datos para poder usarla


const User = db.define('user', {
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
    email:{
        type: DataTypes.STRING, 
        allowNull:false, 
        unique:true 
    },
    password:{
        type: DataTypes.STRING, 
        allowNull:false 
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active' 
    },
    role:{
        type: DataTypes.STRING,
        defaultValue:"Client",
        allowNull:true
    }
})

module.exports = { User }