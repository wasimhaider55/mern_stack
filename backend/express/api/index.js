const express = require("express");
const profileRoutes = require("./routes/profile");
const userRoutes = require("./routes/user");
require("dotenv/config");

const PORT = process.env.PORT || 3001
const app = express();
app.use(express.json());


app.use("/api/user", userRoutes)
app.use("api/profile", profileRoutes)


app.listen(PORT, () => console.log(`Lestening on port ${PORT}`))