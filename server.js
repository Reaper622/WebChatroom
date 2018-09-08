const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');


//路径映射
app.get('/login.html',(req,res) =>{
    res.sendFile( __dirname + '/views/login.html');
});
app.get('/client.html',(req,res)=>{
    res.sendFile(__dirname + '/views/client.html');
})
//静态文件
app.use(express.static(__dirname));
//当有用户连接进来时
io.on('connection',(socket)=> {
    console.log('a user connected!');

    //当用户断开时
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })


    //收到客户端发来的消息
    socket.on('message',(message)=>{
        //发送给客户端
        io.emit('message',message);
    })
});

const server = http.listen(4000,()=>{
    console.log('Server is running');
});