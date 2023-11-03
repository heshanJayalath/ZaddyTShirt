const express = require('express');
const path = require("path");
const Garment = require("../model/garment");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require('../utils/ErrorHandler');
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require('../utils/sendMail');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isGarment, isAdmin, isManager, isOwner } = require('../middleware/auth');
const sendGarmentToken = require('../utils/garmentToken');

router.post("/create-garment", upload.single("file"), async (req, res, next) => {
    try {
        const { username, email, password, brNumber, companyName, companyEmail, companyAddress, city, companyContact } = req.body;
        const garmentEmail = await Garment.findOne({ companyEmail });

        if (garmentEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    err.status(500).json({ message: "Error deleting file" })
                }
            });
            return next(new ErrorHandler("User already exists", 400));
        }
        const filename = req.file.filename;
        const fileUrl = path.join(filename);
        const garment = {
            username: username,
            email: email,
            password: password,
            avatar: fileUrl,
            brNumber: brNumber,
            companyName: companyName,
            companyEmail: companyEmail,
            companyAddress: companyAddress,
            city: city,
            companyContact: companyContact,
        };
        const activationToken = createActivationToken(garment);

        const activationUrl = `http://localhost:3000/garment/activation/${activationToken}`;
        try {
            await sendMail({
                email: garment.companyEmail,
                subject: "Activate your account",
                message: `Hello ${garment.username}, Please click on the link to activate your account : ${activationUrl}`
            })
            res.status(201).json({
                success: true,
                message: `please check your email:- ${garment.companyEmail} to activate your account`
            })

        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }


    } catch (err) {
        return next(new ErrorHandler(err.message, 400));
    }
});

// create actvation Token
const createActivationToken = (garment) => {
    return jwt.sign(garment, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });
}

// activate garment
router.post("/activation", catchAsyncErrors(async (req, res, next) => {
    try {
        const { activation_token } = req.body;

        const newGarment = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

        console.log("token:", newGarment)
        if (!newGarment) {
            return next(new ErrorHandler("Invalid token", 400));
        }
        const { username, email, password, avatar, brNumber, companyName, companyEmail, companyAddress, city, companyContact } = newGarment;
        // validate
        let garment = await Garment.findOne({ companyEmail });

        if (garment) {
            return next(new ErrorHandler("User already exists", 400));
        }

        garment = await Garment.create({
            username,
            email,
            password,
            avatar,
            brNumber,
            companyName,
            companyEmail,
            companyAddress,
            city,
            companyContact
        });
        sendGarmentToken(garment, 201, res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));

// Login garment
router.post("/login-garment", catchAsyncErrors(async (req, res, next) => {
    try {
        const { companyEmail, password } = req.body;
        if (!companyEmail || !password) {
            return next(new ErrorHandler("Please provide the all fields", 400));
        }

        const garment = await Garment.findOne({ companyEmail }).select("+password");
        if (!garment) {
            return next(new ErrorHandler("User doesn't exists", 400));
        }

        const isPasswordValid = await garment.comparePassword(password);
        if (!isPasswordValid) {
            return next(new ErrorHandler("Please provide the correct information", 400));
        }
        sendGarmentToken(garment, 201, res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}));

// load garment
router.get("/getgarment", isGarment, catchAsyncErrors(async (req, res, next) => {
    try {
        const garment = await Garment.findById(req.garment.id);

        if (!garment) {
            return next(new ErrorHandler("Garment doesn't exists", 400));
        }

        res.status(200).json({
            success: true,
            garment,
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));


// logout garment
router.get("/logout", catchAsyncErrors(async (req, res, next) => {
    try {
        res.cookie("garment_token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(201).json({
            success: true,
            message: "Logout successful"
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}));

// get Garment info
router.get("/get-garment-info/:id", catchAsyncErrors(async (req, res, next) => {
    try {
        const garment = await Garment.findById(req.params.id);
        res.status(201).json({
            success: true,
            garment,
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));

// all garment --- for admin
router.get(
    "/admin-all-garments",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const garment = await Garment.find().sort({
                createdAt: -1,
            });
            // console.log("garment_backend:",garment);
            res.status(201).json({
                success: true,
                garment,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// delete Garment ---admin
router.delete(
    "/delete-garment/:id",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const garment = await Garment.findById(req.params.id);

            if (!garment) {
                return next(
                    new ErrorHandler("Garment is not available with this id", 400)
                );
            }

            await Garment.findByIdAndDelete(req.params.id);

            res.status(201).json({
                success: true,
                message: "Garment deleted successfully!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// all garment --- for manager
router.get(
    "/manager-all-garments",
    isAuthenticated,
    isManager("manager"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const garment = await Garment.find().sort({
                createdAt: -1,
            });
            res.status(201).json({
                success: true,
                garment,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// all garment --- for owner
router.get(
    "/owner-all-garments",
    isAuthenticated,
    isOwner("Owner"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const garment = await Garment.find().sort({
                createdAt: -1,
            });
            res.status(201).json({
                success: true,
                garment,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);


module.exports = router;