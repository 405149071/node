const path = require("path")
const fs = require("fs")

let filePath = path.join(__dirname, "a.txt")
// 异步写入
fs.writeFile(filePath, "你好啊，我是xx", function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("正常写入")
})

// 同步写入
fs.writeFileSync(filePath, "你好啊。哦哦哦")