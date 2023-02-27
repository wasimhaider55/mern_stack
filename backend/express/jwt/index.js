const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
mongoose.set('strictQuery', false);
const userRoutes = require("./routes/user");
const app = express();


dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    (err) => {
        if (err) console.log(err)
        else console.log("connected to mongoDB");
    });


// middleware
app.use("/api/user", userRoutes);

app.listen(3001, () => {
    console.log("backend server is running");
})