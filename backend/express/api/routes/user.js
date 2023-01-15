const userRoutes = require("express").Router();
const Joi = require("joi");
const {userSchema} = require("./validation_schema/schema");
const bcrypt = require("bcryptjs");


userRoutes.get("/", (req, res) => {
    res.send({
        message: "we are at user's home page"
    })

})

userRoutes.post("/", async (req, res) => {
    const { error } = userSchema(req.body)
    if(error) res.send(error.details[0].message);
    const salt = await  bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password,salt)

    res.status(200).send(hash);
    







    // // //  body
    // console.log(req.body.name)
    // console.log(req.body.id)
    // console.log(req.body.password)

    // // // headers 
    // // console.log(req.headers.secret_key)

    // // url
    // // console.log(req.query.id);

    // res.header("token" ,req.body.password).send();

})

userRoutes.delete("/", (req, res) => {

})

userRoutes.get("/cart", (req, res) => {
    res.send({
        message: "we are at user's cart"
    })
})

module.exports = userRoutes;