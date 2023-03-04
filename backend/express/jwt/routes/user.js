const router = require("express").Router();
const { regValidation, loginValidation } = require("./validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken");




router.get("/register", verifyToken , (req, res) => {
    res.send("we are at register router, method GET")

})

// REGISTERATION
router.post("/register", async (req, res) => {
    const { name, email, password, address, } = req.body;
    const { error } = regValidation(req.body);

    if (error) return res.send(error.details[0].message); // Gaurd clause

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const existUser = await User.findOne({ email: email });
    if (existUser) return res.status(400).send("Email is already registered!!!");

    const user = new User({
        name,
        email,
        password: hash,
        address
    })
    try {
        const saveUser = await user.save();
        res.send(saveUser);

    } catch (error) {
        console.log(error);

    }
});
router.patch("/register", (req, res) => {

})
router.delete("/register", (req, res) => {

})



// LOGIN
router.get("/login", (req, res) => {

});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, email });
    if (!user) return res.status(400).send("Email not found!!");

    const compare = await bcrypt.compare(password, user.password);
    if (!compare) return res.status(400).send("Password is incorrect!!")


    const token = jwt.sign({email: user.email}, process.env.TOKEN_SECRET);
    res.header("token" , token).send();
    
    // res.send("logged in  successfully!");


})
router.patch("/login", (req, res) => {

})
router.delete("/login", (req, res) => {

})




module.exports = router