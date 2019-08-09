var koa = require("koa")

var app = new koa()

// 配置路由（需要安装）

// 中间件
// express写法
// app.use(function (req, res) {
//     res.send("afafaf")
// })

app.use(async (ctx) => {
    ctx.body = "你好，hello koa"
})

app.listen(3000);