const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
mongoose.set('strictQuery', false);
const userRoutes = require("./routes/user");
const products = require("./routes/products")
var cors = require("cors");
const app = express();

const corsOptions = {
    exposedHeaders: ['Content-Length' , 'token' , 'Authorization'],
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    (err) => {
        if (err) console.log(err)
        else console.log("connected to mongoDB");
    });


// middleware
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/products", products);

app.listen(3001, () => {
    console.log("backend server is running");
})