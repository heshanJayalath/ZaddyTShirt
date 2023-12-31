const mongoose = require("mongoose");


const servicechargeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fee: {
        type: Number,
        required: true,
    },
    images: [
        {
            type: String,
        }
    ],
    garmentId: {
        type: String,
    },
    garment: {
        type: Object,
    },
    status: {
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("ServiceCharge", servicechargeSchema);