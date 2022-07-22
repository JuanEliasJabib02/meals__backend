const { app } = require("./app");


//Models
const { Restaurant } = require("./models/restaurants.model");
const { Review } = require("./models/reviews.mode.js");
const { Meal } = require("./models/meals.model");
const { Order } = require("./models/orders.model");
const { User } = require("./models/users.model");

//Utils
const {db} = require('./utils/database.util');
const { orderCancelled } = require("./controllers/order.controller");



db.authenticate()
    .then(() => console.log("db authenticated"))
    .catch(err => console.log(err));
    
    
    // Relaciones
    User.hasMany(Review, {foreignKey:'userId'})
    Review.belongsTo(User);

    User.hasMany(Order, {foreignKey:'userId'})
    Order.belongsTo(User);

    Restaurant.hasMany(Review, {foreignKey:'restaurantId'})
    Review.belongsTo(Restaurant);

    Restaurant.hasMany(Meal, {foreignKey:'restaurantId'})
    Meal.belongsTo(Restaurant)


    Meal.hasOne(Order, {foreignKey:'mealId'})
    Order.belongsTo(Meal)



db.sync()
    .then(() => console.log("db sync"))
    .catch((err) => console.log(err));


app.listen(4000, () => {
    console.log("Express are working")
})