import server from "./src/app";

const porta: number = 3000;

server.listen(porta, () => console.log('Escutando porta: ' + porta));