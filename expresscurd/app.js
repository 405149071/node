const express = require("express")
const path = require("path")
const art_express = require("express-art-template")


const app = express()
// 设置art-template
app.engine("art", art_express);

// 用static中间件
app.use(express.static(path.join(__dirname, "public")))

// 动态请求
app.get("/user/list", (req, res) => {
    // 原始数据输出方法
    // res.send("abc")
    // res.end()
    // 用模版引擎输出 基础数据
    res.render("userlist.art", {
        name: "zhangsan",
        title: "你好啊！"
    })
})

console.log("aaaabb");

app.listen(59999, function () {
    console.log("http://127.0.0.1:59999")
})