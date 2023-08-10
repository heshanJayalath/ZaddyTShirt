const express = require("express");
const router = express.Router();
const { isGarment, isAuthenticated } = require("../middleware/auth");
const Product = require("../model/product");
const Garment = require("../model/garment");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');

// create product
router.post("/create-product", upload.array("images"), catchAsyncErrors(async (req, res, next) => {
    try {
        const garmentId = req.body.garmentId;
        const garment = await Garment.findById(garmentId);
        if (!garment) {
            return next(new ErrorHandler("Garment Id is invalid", 400));
        } else {
            const files = req.files;
            const imageUrls = files.map((file) => `${file.filename}`);
            const productData = req.body;
            productData.images = imageUrls;
            productData.garment = garment;

            const product = await Product.create(productData);

            res.status(201).json({
                success: true,
                product,
            });
        }
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// getAll products of a garment
router.get("/get-all-products-garment/:id", catchAsyncErrors(async (req, res, next) => {
    try {
        const products = await Product.find({ garmentId: req.params.id })
        console.log("products: ", products);
        res.status(201).json({
            success: true,
            products,
        });

    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}));

// delete products of a garment
router.delete("/delete-garment-product/:id", isGarment, catchAsyncErrors(async (req, res, next) => {
    try {
        const productId = req.params.id;
        const productData = await Product.findById(productId);

        productData.images.forEach((imageUrl) => {
            const filename = imageUrl;
            const filePath = `uploads/${filename}`;

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        const product = await Product.findByIdAndDelete(productId);

        if (!product) {
            return next(new ErrorHandler('Product not found with this id!', 500));
        }
        res.status(201).json({
            success: true,
            message: "Product Deleted Successfully!"
        })
    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}));

// get all products
router.get(
    "/get-all-products",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 });

            res.status(201).json({
                success: true,
                products,
            });
        } catch (error) {
            return next(new ErrorHandler(error, 400));
        }
    })
);

module.exports = router;