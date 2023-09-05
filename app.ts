import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { UserManager } from './classes/UserManager/UserManager';


const app = express();
const server = http.createServer(app);
export const socketIoServer = new Server(server);

server.listen(4000, () => {
    console.log('Server is listening on 4000 local port');
});