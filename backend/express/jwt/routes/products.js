const router = require("express").Router();
const verityToken = require("./verifyToken");
const list = require("./list.json");



router.get("/" ,(req,res) =>{
        res.send(list);
    
    });


module.exports = router