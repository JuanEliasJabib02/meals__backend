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

const reviewOwner = catchAsync(
    async (req,res,next) =>{    // Esta sirve para saber quien es el dueño del review
        
        const { userActive } = req;
        const { review } =req;
        
        if(review.userId !== userActive.id){
            return next( new AppError('This review belong to other user', 403))
        }
       
        next();
    }
)
module.exports = { reviewExist, reviewOwner}