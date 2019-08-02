const express = require("express")
const path = require("path")

const app = express()

// 用static中间件
app.use(express.static(path.join(__dirname, "public")))

// 动态请求
app.get("/user/list", (req, res) => {
    res.send("abc")
    res.end()
})

console.log("aaaabb");

app.listen(59999, function () {
    console.log("http://127.0.0.1:59999")
})