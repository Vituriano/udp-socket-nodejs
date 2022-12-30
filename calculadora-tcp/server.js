const net = require('net');

let opeation = {
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '+': (x, y) => x + y,
};

const handleConnection = socket => {
    console.log("----- Nova conexão -----");

    socket.on('data', data => {
        let expression = data.toString().split(' ');
        let operator = expression[1];
        let value1 = parseInt(expression[0]);
        let value2 = parseInt(expression[2]);

        let result = opeation[operator](value1, value2);

        socket.write(`Resultado = ${result.toString()}`);
    });

    socket.on('end', () => {
        console.log(" ----- Conexão perdida -----");
    });
}

const server = net.createServer(handleConnection);
server.listen(4000, "127.0.0.1");