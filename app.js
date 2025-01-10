// const express=require("express");
// const app=express();

// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });
// app.get("/",function(req,res){
//   res.send("heloow");
// })
// server.listen(3000,function(){
//     console.log("server is worikng");
// });



// chating appp

require('dotenv');
const express = require("express");
const app = express();
const cookeiParser=require("cookie-parser");
app.set('view engine', "ejs");
const db=require("./config/db")
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {
  console.log("connect to  socket io");
console.log(socket.id);
app.use(cookeiParser());
  // secont step
  // server p mssage recieve krna on meansn resieve
  socket.on("message", msg => {
    console.log(msg);
    
    // third steps
    // masg ko send sever s 
    // io.emit("maasge", msg);   //is line s sabko msg send ho rha tha but jo 
    // msg send krta h usko msg n dikhna h issliye broadcast use krte h

    socket.broadcast.emit("maasge", msg);
  });
  // socket.on('disconnect', () => { /* … */ });
});

app.get("/", function (req, res) {
  res.render("index");
});
server.listen(3000, function () {
  console.log("server is worikng");
});
