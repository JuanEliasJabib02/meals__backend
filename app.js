const express = require('express');
const { db } = require('./utils/database.util');

// Init express
const app = express();
app.use(express.json());


//Controllers

const {globalErrorHandler} = require('./controllers/error.global.controller');

// Routers
const { usersRouter } = require('./routes/users.route')

// Endpoints

app.use('/api/v1/users', usersRouter );



app.use(globalErrorHandler);

module.exports = { app }

