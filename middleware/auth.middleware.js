const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { catchAsync } = require('../utils/catchAsync.util');

dotenv.config({path:'./config.env'})

const authentication = catchAsync(
    async(req,res,next) => {

    }
)


const protectUserAcc = catchAsync(
    async(req,res,next) => {
        
    }
)

module.exports = { authentication, protectUserAcc}