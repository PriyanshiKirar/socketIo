const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/socket');
const userSchema = mongoose.Schema({
    user: String,
    mobileNumber: Number,
    email: String,
    password: String,
    profileImage:String,
})
module.exports = mongoose.model("user", userSchema)