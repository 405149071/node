const fs = require("fs")
const path = require("path")

let srcfile = path.join(__dirname, "../fs/a.pdf");
let distfile = path.join(__dirname, "dist.pdf");

let rs = fs.createReadStream(srcfile, )
let ws = fs.createWriteStream(distfile)

rs.on('open', function (fd) {
    console.log("开始读取文件")
})

rs.on('close', function () {
    console.log("读取结束")
})

rs.on('data', function (trunk) {
    //缓冲区不能继续写了
    if (ws.write(trunk) === false) {
        // 可读流暂停一下
        rs.pause()
    }
})

ws.on('drain', function () {
    //可写流可以继续写入的时候
    rs.resume();
})