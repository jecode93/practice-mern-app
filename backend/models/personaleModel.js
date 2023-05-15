const mongoose = require("mongoose");

//Personal Schema
const personalSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    }
}, { timestamps: true })

//Personal model
const Personal = mongoose.model("Personal", personalSchema);

module.exports = Personal;