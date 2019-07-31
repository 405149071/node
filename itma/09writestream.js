const fs = require("fs")
const path = require("path")


let afilePath = path.join(__dirname, "a.txt")

let ws = fs.createWriteStream(afilePath, {
    flags: 'a'
});

ws.on('open', function () {
    console.log("可写流打开")
})

ws.on('close', function () {
    console.log("可写流关闭")
})
// 写入数据
for (let i = 0; i < 100; i++) {
    ws.write("全栈很牛叉\r\n");
}
// 调用end方法，结束可写流
ws.end();