import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDb from './DB/appDbContext.js';
import authRoutes from './Routes/auth.routes.js';
import messageRoutes from './Routes/message.routes.js';
import userRoutes from './Routes/user.routes.js';
import path from 'path';

import {  app, server } from './SocketIo/Socket.js';


dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());//to parse json data / incoming request data with json payload
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));//to parse form data

app.use(cors( ));

app.use('/api/auth', authRoutes);
app.use('/api/messages',messageRoutes)
app.use('/api/user',userRoutes);
app.use(express.static(path.join(__dirname, '/Frontend/dist')));

app.get('/', (req, res) => {
    res.send("Hello from express");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend' , 'dist', 'index.html'));
});

const startServer = async () => {
    try {
        await connectDb();

        server.listen(process.env.PORT || 5000, () => {
            console.log("Server started");
        });

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();