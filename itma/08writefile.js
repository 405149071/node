const path = require("path")
const fs = require("fs")

let filePath = path.join(__dirname, "a.txt")
fs.writeFile(filePath, "你好啊，我是xx", function (err) {
    if (err) {
        console.log(err)
    }
})