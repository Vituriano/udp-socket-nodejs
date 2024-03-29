const dgram = require('dgram');
const client = new dgram.Socket('udp4');
const { Buffer } = require('node:buffer');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port}> ${msg}`);
});

rl.addListener('line', line => {
    const message = Buffer.from(line);
    client.send(message, 8081,'localhost');
    console.log("--------")
});

client.bind(4001);