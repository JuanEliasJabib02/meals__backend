const express = require('express');
const { db } = require('./utils/database.util');

// Init express
const app = express();
app.use(express.json());

const { AppError } = require('./utils/appError.util')


//Controllers

const {globalErrorHandler} = require('./controllers/error.global.controller');

// Routers
const { usersRouter } = require('./routes/users.route');
const { restaurantsRouter } = require('./routes/restaurants.route');
const { mealsRouter } = require('./routes/meals.route');
const { ordersRouter } = require('./routes/orders.route');

// Endpoints

app.use('/api/v1/users', usersRouter );

app.use('/api/v1/restaurants', restaurantsRouter);

app.use('/api/v1/meals', mealsRouter)

app.use('/api/v1/orders', ordersRouter)

app.all('*',(req ,res ,next) => {
    next(new AppError (`${req.method} ${req.url} not found in this server`, 404))
     
 })

app.use(globalErrorHandler);

module.exports = { app }

