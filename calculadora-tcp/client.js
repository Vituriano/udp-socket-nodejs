const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(4000, '127.0.0.1', () => {
    console.log(`Insira o calculo seguindo o formato: 5 + 6`);
    client.on('data', data => {
        console.log(data.toString());
    });

    rl.addListener('line', line => {
        client.write(line);
    });
})