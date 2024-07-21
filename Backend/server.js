import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import appDbContext from './Db/appDbContext.js';
import authRoutes from './Routes/auth.routes.js';
import messageRoutes from './Routes/message.routes.js';
import userRoutes from './Routes/user.routes.js';

import {  app, server } from './SocketIo/Socket.js';


dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());//to parse json data / incoming request data with json payload
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));//to parse form data

app.use(cors( ));

app.use('/api/auth', authRoutes);
app.use('/api/messages',messageRoutes)
app.use('/api/user',userRoutes);

app.get('/', (req, res) => {
    res.send("Hello from express");
});

server.listen(PORT, () => {
    appDbContext();
    console.log(`Server is running on http://localhost:${PORT}`)
});

