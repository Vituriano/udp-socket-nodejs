const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const { Buffer } = require('node:buffer');

let opeation = {
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '+': (x, y) => x + y,
};

socket.on('message', (msg, rinfo) => {
    let expression = msg.toString().split(' ');
    let operator = expression[1];
    let value1 = parseInt(expression[0]);
    let value2 = parseInt(expression[2]);

    let result = opeation[operator](value1, value2);

    const message = Buffer.from(`Resultado = ${result.toString()}`);
    socket.send(message, rinfo.port, rinfo.address);
});

socket.bind(8081);