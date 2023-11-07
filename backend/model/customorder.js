const mongoose = require("mongoose");


const customorderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    garment: {
        type: Object,
    },
    material: {
        type: String,
        required: true,
    },
    productCount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    xscount: {
        type: Number,
        required: true,
    },
    scount: {
        type: Number,
        required: true,
    },
    mcount: {
        type: Number,
        required: true,
    },
    lcount: {
        type: Number,
        required: true,
    },
    xlcount: {
        type: Number,
        required: true,
    },
    xxlcount: {
        type: Number,
        required: true,
    },
    colour: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        }
    ],
    address: {
        type: Object,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Customorder", customorderSchema);