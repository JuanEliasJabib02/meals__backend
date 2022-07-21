//Models
const { Review } = require("../models/reviews.mode.js");
//Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");



const reviewExist = catchAsync(
    async (req,res,next) => {

        const { id } = req.params;

        const review = await Review.findOne( { where: { id} })

        if(!review){
            return next( new AppError('review not found', 404))
        }

        req.review = review;
        next();
    }
)

module.exports = { reviewExist }