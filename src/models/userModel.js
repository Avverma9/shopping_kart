const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim:true
    },
    lname: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    profileImage: {
        type: String,
        required: true,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
    address: {
        type: String,
        required: true,
        trim:true
    }
}, { timestamps: true });

module.exports = mongoose.model('UserData', userSchema)
