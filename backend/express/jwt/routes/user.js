const router = require("express").Router();
const { regValidation, loginValidation } = require("./validation")
const User = require("../models/User");
const bycrypt = require("bcrypt");

router.get("/register", (req, res) => {

})

router.post("/register", async (req, res) => {
    const { name, email, password, address } = req.body;
    const { error } = regValidation(req.body);

    if (error) return res.send(error.details[0].message); // Guard Clause

    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password, salt);
    const findUser = await User.findOne({ email: req.body.email })
    if (findUser) return res.status(400).send("Email is already registered!")



    const user = new User({

        name,
        email,
        password: hash,
        address

    })

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router.patch("/register", (req, res) => {

})

router.delete("/register", (req, res) => {

})



router.get("/login", (req, res) => {

})
router.post("/login", (req, res) => {


})
router.patch("/login", (req, res) => {

})
router.delete("/login", (req, res) => {

})

module.exports = router;