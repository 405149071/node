const fs = require("fs")
const path = require("path")

let filepath = path.join(__dirname, "../fs/a.pdf");
console.log(filepath)

// 创建可读流
let stream = fs.createReadStream(filepath)

// 给stream绑定事件
stream.on('open', function (fd) {
    console.log("管道建立并打开:fd:", fd)
})

let i = 0;
stream.on('data', function (trunk) {
    console.log('接受数据', i, '块：', trunk);
    i++;
})

stream.on("end", function () {
    console.log("数据读取完毕")
})

stream.on("error", function (err) {
    console.log(err)
})