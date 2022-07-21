const { db, DataTypes } = require('../utils/database.util')


const Review = db.define('review',{
    id:{
        primaryKey:true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    userId:{ // Este valor funcionara como una foreight key
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    restaurantId:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    comment:{
        type: DataTypes.STRING,
		allowNull: false,
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active' 
    },
})

module.exports = { Review }