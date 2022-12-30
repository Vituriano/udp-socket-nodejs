const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port}> ${msg}`);
});

rl.addListener('line', line => {
    socket.send(line, 4001,'localhost');
    console.log("--------")
});

socket.bind(8081);