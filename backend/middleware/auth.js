const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const Garment = require("../model/garment");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});

exports.isGarment = catchAsyncErrors(async (req, res, next) => {
    const { garment_token } = req.cookies;

    if (!garment_token) {
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(garment_token, process.env.JWT_SECRET_KEY);

    req.garment = await Garment.findById(decoded.id);

    next();
});

exports.isAdmin = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`${req.user.role} can not access this resources!`))
        };
        next();
    }
}

exports.isManager = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`${req.user.role} can not access this resources!`))
        };
        next();
    }
}