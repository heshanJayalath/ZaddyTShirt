const express = require('express');
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require('../utils/ErrorHandler');
const fs = require("fs");
const jwt =require("jsonwebtoken");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    err.status(500).json({ message: "Error deleting file" })
                } else {
                    res.json({ message: "File deleted Successfully" });
                }
            })
            return next(new ErrorHandler("User already exists", 400));
        }
        const filename = req.file.filename;
        const fileUrl = path.join(filename);
        const user = {
            username: username,
            email: email,
            password: password,
            avatar: fileUrl,
        };

        const activationToken = createActivationToken(user);
    } catch (err) {
        return next(new ErrorHandler(error.message))
    }
});

// create activation Token
const createActivationToken = (user) =>{
    return jwt.sign(user,process.env.ACTIVATION_SECRET,{
        expiresIn:"5m",
    });
}

module.exports = router;