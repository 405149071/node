const fs = require("fs")
// // 同步读取文件 适合读取小文件
// var filecontent = fs.readFileSync(__filename, {
//     encoding: 'utf8', // 不设置的话会返回一个buffer数组
// })
// console.log(filecontent, )

// 异步方法 仅适用于小文件，大文件必须用流的方式读取
const path = require("path")
let indexfilepath = path.join(__dirname, "index.js")
console.log(indexfilepath);
var indexContent = fs.readFile(indexfilepath, {
    encoding: 'utf8'
}, (err, data) => {
    console.log("文件读取完毕，执行回调函数")
    if (err) {
        console.log("读取出现异常：" + err);
    }
    console.log(data)
})
console.log("主线程继续执行。。。。")