const { app } = require("./app");
const { Order } = require("./models/orders.model");

//Models
const { Restaurant } = require("./models/restaurants.model");
const { Review } = require("./models/reviews.mode.js");
const { User } = require("./models/users.model");

//Utils
const {db} = require('./utils/database.util')



db.authenticate()
    .then(() => console.log("db authenticated"))
    .catch(err => console.log(err));
    // Relaciones
    User.hasMany(Review, {foreignKey:'userId'})
    Review.belongsTo(User);

    User.hasMany(Order, {foreignKey:'userId'})
    Order.belongsTo(User);

    Restaurant.hasMany(Review, {foreignKey:'restaurantId'})
    Review.belongsTo(Restaurant)

db.sync()
    .then(() => console.log("db sync"))
    .catch((err) => console.log(err));


app.listen(4000, () => {
    console.log("Express are working")
})