import express, { Application } from "express";
import { routes } from "./routes";
import { createServer } from 'http';
import { Server } from 'socket.io';

const app: Application = express();
const server = createServer(app);
const io: Server = new Server(server);

io.on('connection', (socket) => {
  console.log('Um usuário conectou: ' + socket.id);

  socket.on('mensagem', (msg) => {
    console.log('Mensagem: ' + msg); 
    io.emit('mensagem', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectou!');
  })
}); 

routes(app);

export default server; 