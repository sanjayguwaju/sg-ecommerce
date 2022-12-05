const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");


//UPDATE methods has completed successfully where we can able to update the user data by verifyTokenAndAuthorization method
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {
            $set: req.body,
        },
            { new: true }
        );
        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Delete for delete the user data by verifyTokenAndAuthorization method with id

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Users has been deleted ....");
    } catch (err) {
        res.status(500).json(err);
    }
});
// GET USER by id and it can only make changes if  the user is admin

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

