const express = require('express');
const { db } = require('./utils/database.util');

// Init express
const app = express();
app.use(express.json());





module.exports = { app }

