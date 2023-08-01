const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const garmentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"],
        select: false,
    },
    companyName: {
        type: String,
        required:[true, "Please enter Company Name!"]
    },
    brNumber:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default: "garment",
    },
    avatar: {
        type: String,
        required: true,
    },
    companyEmail:{
        type:String,
        required: true
    },
    companyAddress:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    companyContact:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});


//  Hash password
garmentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
garmentSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

// compare password
garmentSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Garment", garmentSchema);