const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/socket');
const userSchema = mongoose.Schema({
    user: String,
    mobile_no: Number,
    email: String,
    password: String,
    profileImage:String,
    address:String,
    otp:String,
    user_id:String,
})
module.exports = mongoose.model("user", userSchema)