const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0/socket');
const userSchema=mongoose.Schema({
    user:String,
    email:String,
})
module.exports=mongoose.model("user",userSchema)