const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

//Importing configuration from dotenv file
dotenv.config();

//Database connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connection Collection...");
}).catch((err) => {
    console.log(err);
})
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

//Server Running in Port
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running ....")
})