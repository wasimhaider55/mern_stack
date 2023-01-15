const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");


const PORT = process.env.PORT || 3001

const app = express();

mongoose.connect(`mongodb + srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fpw1dse.mongodb.net/?retryWrites=true&w=majority`,
    () => console.log("Connected with DB"));
app.use((express.json()));

app.use("/api/user/", userRoutes)

app.listen(PORT, () => {
    console.log(`Api server is running on  ${PORT}`);
})

