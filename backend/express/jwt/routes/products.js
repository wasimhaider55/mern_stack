const router = require("express").Router();
const verifyToken = require("./verifyToken");
const list = require("./list.json");



router.get("/", (req, res) => {
    res.send(list);

});


module.exports = router