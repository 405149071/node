const net = require("net")

// 创建服务器对象
let server = net.createServer()

server.on('connection', client => {
    // client 指向客户端的一个对象，可以通过它给客户端发送数据，可读可写流
    // 监听客户端，接收数据
    client.on('data', chunk => {
        console.log(chunk.toString('utf8'))
    })

    // 往客户端写入数据
    client.write("你好啊，来自服务器端")
    client.end("结束连接。。。")
})

//开始监听端口
server.listen(58888, )