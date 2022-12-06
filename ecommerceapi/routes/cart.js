const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Product = require("../models/Product");
const Cart = require("../models/Cart");

//CREATE Products Where Admin can create the product
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Product(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});


//UPDATE Products Where Admin can update the product
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, {
            $set: req.body,
        },
            { new: true }
        );
        res.status(200).json(updatedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//DELETE CART Products Where Admin can delete the product by id

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Carts has been deleted ....");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER CART by id or usesname as well as  it can only make changes if  the user is admin and you can access the users PROFILE
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//         const cart = await Cart.findById(req.params.id);
//         res.status(200).json(cart);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// GET ALL CART PRODUCTS Where user can get all the products according to the category and sort by category
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
