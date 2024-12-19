const mongoose=require("mongoose");

async function connecteddb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/sockett");
    console.log("conectedToDb work properly");
}
connecteddb();
module.exports=mongoose.connection;