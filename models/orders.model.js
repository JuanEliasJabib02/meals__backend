const  {db, DataTypes} = require('../utils/database.util');

const Order = db.define('order',{
    id:{ 
        primaryKey: true, 
        unique:true,
        type: DataTypes.INTEGER,
        autoIncrement:true, 
        allowNull:false
    },
    userId:{ // Este valor funcionara como una foreight key
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    mealId:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    totalPrice:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:"active"
    }
    
})


module.exports = { Order }