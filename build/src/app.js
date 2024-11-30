"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('Um usuário conectou: ' + socket.id);
    socket.on('mensagem', (msg) => {
        console.log('Mensagem: ' + msg);
        io.emit('mensagem', msg);
    });
    socket.on('disconnect', () => {
        console.log('Usuário desconectou!');
    });
});
(0, routes_1.routes)(app);
exports.default = server;
