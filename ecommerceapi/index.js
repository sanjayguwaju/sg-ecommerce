console.log("Hello World 2")
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connection Collection...");
}).catch((err) => {
    console.log(err);
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running ....")
})