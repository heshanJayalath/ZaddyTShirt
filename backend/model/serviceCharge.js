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
        required: true,
    },
    garment: {
        type: Object,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("ServiceCharge", servicechargeSchema);