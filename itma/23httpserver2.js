const http = require("http")

// 当发生request请求时候，自动调用回调函数
http.createServer(function (req, res) {
    // req 监听数据

    req.on('data', function (trunk) {
        console.log("数据", trunk)
    })

    console.log(req.headers, )
    console.log(req.url, )
    console.log(req.method, )

    res.write('1233333')
    res.end()

}).listen(58990, () => {
    console.log("服务器端监听端口58990", "请打开浏览器http://127.0.0.1:58990")
})