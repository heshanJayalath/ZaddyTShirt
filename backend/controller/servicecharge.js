const express = require("express");
const router = express.Router();
const { isGarment, isAuthenticated, isAdmin, isManager } = require("../middleware/auth");
const Product = require("../model/product");
const Garment = require("../model/garment");
const Order = require("../model/order");
const ServiceCharge = require('../model/serviceCharge');
const CustomOrder = require("../model/customorder");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const User = require("../model/user");

// create service charge 
router.post("/create-service-payment", upload.fields([{ name: "images", maxCount: 5 }]), async (req, res, next) => {
    try {

        const garmentId = req.body.garmentId;
        const garment = await Garment.findById(garmentId);

        if (!garment) {
            return next(new ErrorHandler("Gament Id is invalid", 400));
        } else {
            const imageUrls = req.files['images'].map((file) => file.filename);

            const serviceChargeData = req.body;
            serviceChargeData.images = imageUrls
            serviceChargeData.fee = req.body.fee;
            serviceChargeData.garment = JSON.parse(req.body.garment);
            serviceChargeData.name = req.body.garmentName;

            const serviceCharge = await ServiceCharge.create(serviceChargeData);

            res.status(201).json({
                success: true,
                serviceCharge,
            })
        }


    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
})

// Get All service charges
router.get(
    "/manager-all-service-charges",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const serviceCharges = await ServiceCharge.find().sort({
                deliveredAt: -1,
                createdAt: -1,
            });
            res.status(201).json({
                success: true,
                serviceCharges,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
)
module.exports = router;