const router = require("express").Router();

router.get("/usertest", () => {
    console.log("usertest is successful");
});

module.exports = router