const express = require('express');
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require("dotenv").config({
        path: "backend/config/.env"
    })
}
// imports
const user = require("./controller/user");
const garment = require("./controller/garment");
const product = require('./controller/product');
const event = require('./controller/event');

app.use("/api/v2/user", user);
app.use("/api/v2/garment", garment);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;