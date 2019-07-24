const net = require('net');

let server = net.createServer();

server.on('connection',client =>{
    // clinet 指向客户端的对象，可写流，可写入数据，也是可读流
    console.log();

    client.on('data',chunk=>{
        console.log(chunk.toString('utf8'));
    })

    // 写入数据
    client.write('你好啊，来菹服务器端');
    client.end('结束链接');
})

server.listen('58888');