import { socketIoServer } from '../app';
import { createStationHandler } from './socketHandlers/createStationHandler';

socketIoServer.on('connection', (socket) => {
    socket.on('create-station', (msg) => createStationHandler(msg));
});

socketIoServer.on('create-station', (msg) => createStationHandler(msg));