import { socketIoServer } from '../app';
import { UserManager } from '../classes/UserManager/UserManager';
import { SocketActions } from './types';

socketIoServer.on(SocketActions.connection, (socket) => {
    const userManager = new UserManager();
    userManager.addUser({ nick: 'nick'});
    socket.on(SocketActions.addUser, (msg) => {});
    socket.on(SocketActions.openDocument, (msg) => {});
    socket.on(SocketActions.disconnect, (msg) => {});
});

socketIoServer.on('create-station', (msg) => {});