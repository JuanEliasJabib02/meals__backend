const express = require('express');
const cors = require('cors')

//Swagger

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const {swaggerSpec} = require("./utils/swagger.util")


// Init express
const app = express();
app.use(express.json())
app.use(cors());

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

app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.all('*',(req ,res ,next) => {
    next(new AppError (`${req.method} ${req.url} not found in this server`, 404))
     
 })

app.use(globalErrorHandler);

module.exports = { app }

