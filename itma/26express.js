// 1 安装express
// npm i -P express

//2 引入express
const express = require("express")

const path = require("path")
// express 完全兼容connect

let app = express()

// 兼容connect底层的最基础写法，
// app.use(function (req, res, next) {
//     console.log(1)
//     next();
// })

// app.use(function (req, res, next) {
//     console.log(2)
//     next();
// })


// app.use(function (req, res) {
//     console.log(3)
//     res.write("1234")
//     res.end()
// })

// 注册为宜内置的中间件 static
// 托管静态资源
app.use(express.static(path.join(__dirname, "dist")))

// 更高层的封装的写法
app.get("*", (req, res, next) => {
    console.log(req.param("id"))
    console.log(req.param("name"))

    res.send("1111");
    next()
})

app.get("/api", (req, res) => {
    console.log("/api")
    //res.send("-----")  整个next中只能有1个send
    res.end()
})

// app.post(post方法) app.all (所有类型的请求，get post)
app.listen(59977)