const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your event product name!"],
    },
    description: {
        type: String,
        required: [true, "Please enter your event product description!"],
    },
    category: {
        type: String,
        required: [true, "Please enter your event product category!"],
    },
    material: {
        type: String,
        required: [true, "Please enter materials for the event product!"],
    },
    thickness: {
        type: String,
    },
    color: {
        type: String
    },
    tags: {
        type: String,
    },
    originalPrice: {
        type: Number,
    },
    discountPrice: {
        type: Number,
        required: [true, "Please enter your product price!"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter your product stock!"],
    },
    images: [
        {
            type: String,
        }
    ],
    start_Date: {
        type: Date,
        required: true
    },
    Finish_Date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: "Running",
    },
  // reviews: [
  //   {
  //     user: {
  //       type: Object,
  //     },
  //     rating: {
  //       type: Number,
  //     },
  //     comment: {
  //       type: String,
  //     },
  //     productId: {
  //       type: String,
  //     },
  //     createdAt:{
  //       type: Date,
  //       default: Date.now(),
  //     }
  //   },
  // ],
  // ratings: {
  //   type: Number,
  // },
  garmentId: {
        type: String,
        required: true,
    },
    garment: {
        type: Object,
        required: true,
    },
    sold_out: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Event", eventSchema);