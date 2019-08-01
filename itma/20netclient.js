const net = require("net")

// client 连接服务器的客户端对象，可读可写流
let client = net.connect(58888, "127.0.0.1", () => {
    console.log("连接上了服务器端")
})

client.on('data', chunk => {
    console.log("来自服务器端的数据", chunk.toString('utf8'))
})

client.write("我是老吴，from 客户端")
client.end()