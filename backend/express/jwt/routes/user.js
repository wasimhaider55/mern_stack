const router = require("express").Router();
const { regValidation, loginValidation } = require("./validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");


router.get("/register", (req, res) => {
    
})
// REGISTERATION
router.post("/register", async (req, res) => {
    const { name, email, password, address, } = req.body;
    const { error } = regValidation(req.body);

    if (error) return res.send(error.details[0].message); // Gaurd clause

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    
    const existUser =  await User.findOne({email : email});
    if (existUser) return  res.status(400).send("Email is already registered!!!");

    const user = new User({
        name,
        email,
        password : hash,
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

})
router.post("/login", (req, res) => {

})
router.patch("/login", (req, res) => {

})
router.delete("/login", (req, res) => {

})


module.exports = router