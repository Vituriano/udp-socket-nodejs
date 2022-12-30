const dgram = require('dgram');
const client = new dgram.Socket('udp4');
const { Buffer } = require('node:buffer');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`Insira o calculo seguindo o formato: 5 + 6`);

client.on('message', (msg) => {
    console.log(msg.toString());
    console.log("--------")
});

rl.addListener('line', line => {
    const message = Buffer.from(line);
    client.send(message, 8081,'localhost');
});