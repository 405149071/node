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
    // client.write("你好啊，来自服务器端")
    client.write(`
HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>这是来自服务器端端html</h1>
</body>
</html>
`)
    client.end()
})

//开始监听端口
server.listen(58888, function () {
    console.log("服务器开始监听58888端口")
})