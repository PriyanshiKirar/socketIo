const express=require("express");
const app=express();

const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000,function(){
    console.log("connect");
});
app.get("/",function(req,res){
    res.send("heloow");
})
