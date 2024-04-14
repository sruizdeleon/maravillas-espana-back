const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    name: {type: String, required: false},
})

module.exports = mongoose.model("users", userSchema)