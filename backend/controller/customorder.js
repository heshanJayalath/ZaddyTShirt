const express = require("express");
const router = express.Router();
const { isGarment, isAuthenticated, isAdmin, isManager } = require("../middleware/auth");
const Product = require("../model/product");
const Garment = require("../model/garment");
const Order = require("../model/order");
const CustomOrder = require("../model/customorder");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const User = require("../model/user");

// create product
router.post("/create-custom-order", upload.fields([{ name: "images", maxCount: 5 }]), catchAsyncErrors(async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const user = await User.findById(userId);
        if (!user) {
            return next(new ErrorHandler("User Id is invalid", 400));
        } else {
            const files = req.files['images'];
            const imageUrls = files.map((file) => `${file.filename}`);
            
            // console.log("model",modelFiles);
            const customData = req.body;
            customData.images = imageUrls;
            customData.user = user;
            customData.xxlcount = req.body.xxlcount; 
            customData.xlcount = req.body.xlcount;
            customData.lcount = req.body.lcount;
            customData.mcount = req.body.mcount;
            customData.scount = req.body.scount;
            customData.xscount = req.body.xscount;

            const customOrder = await CustomOrder.create(customData);

            res.status(201).json({
                success: true,
                customOrder,
            });
        }
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

module.exports = router;