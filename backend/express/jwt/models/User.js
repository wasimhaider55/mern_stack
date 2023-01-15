const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 100,
        required: true
    },
    email: {
        type: String,
        min: 3,
        max: 100,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 100,
        required: true
    },
    address: {
        type: String,
        min: 5,
        max: 100,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User", userSchema)