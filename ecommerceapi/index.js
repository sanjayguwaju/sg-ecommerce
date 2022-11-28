const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

//Importing configuration from dotenv file
dotenv.config();

//Database connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connection Collection...");
}).catch((err) => {
    console.log(err);
})

app.use("/api/user", userRoute);

//Server Running in Port
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running ....")
})