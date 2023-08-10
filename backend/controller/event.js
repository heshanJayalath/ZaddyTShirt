const express = require("express");
const router = express.Router();
const { isGarment, isAuthenticated } = require("../middleware/auth");
const Product = require("../model/product");
const Garment = require("../model/garment");
const Event = require("../model/event");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');

// create event
router.post("/create-event", upload.array("images"), catchAsyncErrors(async (req, res, next) => {
    try {
        const garmentId = req.body.garmentId;
        const garment = await Garment.findById(garmentId);
        if (!garment) {
            return next(new ErrorHandler("Garment Id is invalid", 400));
        } else {
            const files = req.files;
            const imageUrls = files.map((file) => `${file.filename}`);
            const eventData = req.body;
            eventData.images = imageUrls;
            eventData.garment = garment;

            const product = await Event.create(eventData);

            res.status(201).json({
                success: true,
                product,
            });
        }
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// getAll events of a garment
router.get("/get-all-events-garment/:id", catchAsyncErrors(async (req, res, next) => {
    try {
        const events = await Event.find({ garmentId: req.params.id })

        res.status(201).json({
            success: true,
            events,
        });

    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}));

// get all events
router.get("/get-all-events", async (req, res, next) => {
    try {
      const events = await Event.find();
      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  });

// delete events of a garment
router.delete("/delete-garment-event/:id", isGarment, catchAsyncErrors(async (req, res, next) => {
    try {
        const eventId = req.params.id;

        const eventData = await Event.findById(eventId);   

        eventData.images.forEach((imageUrl) => {
            const filename = imageUrl;
            const filePath = `uploads/${filename}`;

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });

        const event = await Event.findByIdAndDelete(eventId);

        if (!event) {
            return next(new ErrorHandler('events not found with this id!', 500));
        }

        res.status(201).json({
            success: true,
            message: "Event Deleted Successfully!"
        })
    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}))
module.exports = router;