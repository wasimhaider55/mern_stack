const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            min: 3,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 100
        },
        address: {
            type: String,
            min: 3,
            max: 200
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },);

module.exports = mongoose.model("User", UserSchema);