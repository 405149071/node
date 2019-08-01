const http = require("http")
// 发送一个get请求
// http.get('http://www.baidu.com', res => {
//     res.on('data', trunk => {
//         console.log(trunk.toString("utf8"))
//     })
// })


// post 通用的httprequest对象发送请求
let request = http.request({
    protocol: 'http:',
    host: 'baidu.com',
    port: 80,
    method: 'post',
    timeout: 2000,
    path: '/'
}, res => {
    res.on("data", trunk => {
        console.log(trunk.toString("utf8"))
    })
})

request.end(); // 真正的发送请求