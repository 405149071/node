const http = require("http")

// 创建服务器端
let server = http.createServer()

// 监听客户端请求数据和响应报文
server.on('request', (req, res) => {
    // req 请求
    console.log(req.headers)
    console.log(req.url)
    console.log(req.method)
    // res 响应
    res.write('hi, from http server')
    res.end()
})

server.listen(58889, () => {
    console.log("服务器端开始监听端口58889，可以用浏览器打开http://127.0.0.1:58889", )
})