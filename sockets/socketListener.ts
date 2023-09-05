import { socketIoServer } from '../app';

socketIoServer.on('connection', (socket) => {
    socket.on('create-station', (msg) => {});
});

socketIoServer.on('create-station', (msg) => {});