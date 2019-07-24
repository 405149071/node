const net = require("net")

let server = net.createServer();

server.on("connection",client =>{
    // 可读可写流，写入数据

    client.on('data',chunk=>{
        console.log(chunk.toString('utf-8'));
    })


    client.write('你好啊，来自服务器端')

    client.end('结束连接')


})

server.listen(58888);