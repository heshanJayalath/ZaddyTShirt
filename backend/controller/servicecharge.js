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
// router.post("/create-service-payment", upload.fields([{ name: "images", maxCount: 5 }]), async (req, res, next) => {
//     try {

//         const garmentId = req.body.garmentId;
//         const garment = await Garment.findById(garmentId);

//         if (!garment) {
//             return next(new ErrorHandler("Gament Id is invalid", 400));
//         } else {
//             const imageUrls = req.files['images'].map((file) => file.filename);

//             const serviceChargeData = req.body;
//             serviceChargeData.images = imageUrls
//             serviceChargeData.fee = req.body.fee;
//             serviceChargeData.status = req.body.status;
//             serviceChargeData.garment = JSON.parse(req.body.garment);
//             serviceChargeData.name = req.body.garmentName;

//             const serviceCharge = await ServiceCharge.create(serviceChargeData);

//             res.status(201).json({
//                 success: true,
//                 serviceCharge,
//             })
//         }


//     } catch (error) {
//         return next(new ErrorHandler(error.message, 500));
//     }
// })

// create service charge 
router.post("/create-service-payment", upload.fields([{ name: "images", maxCount: 5 }]), async (req, res, next) => {
    try {

        const name = req.body.garmentName;
        const garment = await Garment.find({ name: name });

        if (!garment) {
            return next(new ErrorHandler("Garment is invalid", 400));
        } else {
            // const imageUrls = req.files['images'].map((file) => file.filename);

            const serviceChargeData = req.body;
            // serviceChargeData.images = imageUrls
            serviceChargeData.fee = req.body.fee;
            serviceChargeData.status = req.body.status;
            // serviceChargeData.garment = JSON.parse(req.body.garment);
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

// Get All service charges--garment
router.get(
    "/garment-all-service-charges",
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

// Get All service charges for garment
router.get(
    "/garment-all-service-charges/:id",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const id = req.params.id;
            const serviceCharges = await ServiceCharge.find({ name: id });
            console.log(serviceCharges);
            res.status(201).json({
                success: true,
                serviceCharges,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
)

router.put(
    "/update-service-charge-status/:id",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const serviceCharge = await ServiceCharge.findById(id)
            if (!serviceCharge) {
                return res.status(404).json({
                    message: "Service Charge not found!"
                });
            }

            serviceCharge.status = status;
            await serviceCharge.save();

            res.json({
                message: 'Service Charge Updated!'
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
)

router.put(
    "/update-service-payment/:id",
    upload.fields([{ name: "images", maxCount: 5 }]),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const serviceChargeId = req.params.id;

            const serviceChargeData = req.body;

            const files = req.files && req.files['images'];

            if (files) {
                const imageUrls = files.map((file) => `${file.filename}`);
                serviceChargeData.images = imageUrls;
            }

            // const files = req.files['images'];
            // const imageUrls = files.map((file) => `${file.filename}`);

            // serviceChargeData.images = imageUrls;
            // serviceChargeData.fee = req.body.fee;
            // serviceChargeData.status = req.body.status;
            // serviceChargeData.garment = JSON.parse(req.body.garment);
            // serviceChargeData.name = req.body.garmentName;
            serviceChargeData.fee = req.body.fee;
            serviceChargeData.status = req.body.status;
            serviceChargeData.garment = JSON.parse(req.body.garment);
            serviceChargeData.name = req.body.garmentName;

            // const serviceChargeGarment = JSON.parse(req.body.garment);
            // const {images, ...otherFields } = req.body
            // const updatedFields = req.body;
            const updatedServiceCharge = await ServiceCharge.findByIdAndUpdate(
                serviceChargeId,
                serviceChargeData,
                // { ...otherFields, images: req.files.map(file => file.path) },
                { new: true }
            )



            if (!updatedServiceCharge) {
                return res.status(404).json({ message: 'Service Charge not found' });
            }
            res.json({ message: 'Service Charge updated successfully', updatedServiceCharge });

        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
)


module.exports = router;