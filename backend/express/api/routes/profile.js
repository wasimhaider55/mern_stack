const profileRoutes = require("express").Router();

profileRoutes.get("/", (req, res) => {
    res.send({
        message: "we are at profile page"
    })

})

profileRoutes.post("/profile", (req, res) => {

})

module.exports = profileRoutes;