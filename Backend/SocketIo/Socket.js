import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: `${process.env.CLIENT_URL}`,
        methods: ["GET","POST"]
    }
})   
export const getReciverSocketId = (reciverId) => {
    return userOnline[reciverId];
}



const userOnline = {}

io.on('connection',(socket)=>{
    
    
    const userId = socket.handshake.query.userId; //getting userId from client side

    if(userId != undefined){
        userOnline[userId] = socket.id;
    }
    io.emit('onlineUser',Object.keys(userOnline));//sending online user to all clients

    socket.on('disconnect',()=>{
        
        
        delete userOnline[userId];
        io.emit('onlineUser',Object.keys(userOnline));
    })
})


export {app ,io , server};