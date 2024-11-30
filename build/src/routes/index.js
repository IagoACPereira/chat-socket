"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const express_1 = __importDefault(require("express"));
function routes(app) {
    app.use(express_1.default.static('./src/public'));
    app
        .get('/', (req, res) => {
        res.status(200).sendFile('./src/public/index.html');
    });
}
