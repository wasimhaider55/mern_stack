const express = require("express");
const PORT = process.env.PORT || 3001
const app = express();
app.get("/about" , (req,res) =>{
    res.send({
        "id":1,
        "name": "wasim"
    })
})

app.post("/about",(req,res) =>{
    res.send("we are at about post");
})

app.patch("/about",(req,res) =>{
    res.status(200).send();
})

app.delete("/about",(req,res) => {
    res.json({
        id : "1",
        message : "the product has been deleted"
    })
})



app.listen(PORT,() => console.log(`Running api on ${PORT}`));