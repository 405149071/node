const http = require("http")
const path = require("path")
const fs = require("fs")

// 创建服务器端
let server = http.createServer()

// 监听客户端请求数据和响应报文
server.on('request', (req, res) => {
    // req 请求
    console.log(req.headers)
    console.log(req.url)
    console.log(req.method)
    // res 响应

    // res.write('hi, from http server')
    // res.end()
    // 响应一个网站（目录），根据不同文件类型返回不同的文件
    let conType = 'plain/text';

    let fileName = path.join(__dirname, 'dist/', req.url)

    switch (path.extname(fileName)) {
        case '.png':
            conType = 'image/png'
            break
        case '.jpg':
        case '.jpeg':
            conType = 'image/jpeg'
            break;
        case '.gif':
            conType = 'image/gif'
            break
        case '.html':
            conType = 'text/html'
            break
        case '.css':
            conType = 'text/css'
            break
        default:
            conType = 'text/plain'
    }
    // 设置响应文件的类型和状态码
    res.writeHeader(200, {
        'Content-Type': conType
    })

    let reader = fs.createReadStream(fileName)
    reader.pipe(res)

})

server.listen(58889, () => {
    console.log("服务器端开始监听端口58889，可以用浏览器打开http://127.0.0.1:58889", )
})