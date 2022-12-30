const dgram = require('dgram');
const client = new dgram.Socket('udp4');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port}> ${msg}`);
});

rl.addListener('line', line => {
    client.send(line, 8081,'localhost');
    console.log("--------")
});

client.bind(4001);