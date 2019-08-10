//引入koa
var Koa = require("koa"),
    router = require("koa-router")(),
    views = require("koa-views"),
    bodyParser = require("koa-bodyparser"),
    static = require("koa-static")

var app = new Koa()

// koa -static 静态资源中间件
// npm install koa-static --save
// 2,引入 const static  require("koa-static")
// 3 配置中间件
//app.use(static('static'))

app.use(views("views", {
    extension: "ejs"
}))


// 配置中间件
// http://127.0.0.1/css/css.css 首先去static目录找，如果能找到则返回对应的文件，不能则继续next
app.use(static("static")) // 目录一个

// 配置post bodyparser的中间件
app.use(bodyParser())


router.get("/", async (ctx) => {
    ctx.body = "首页"
})

router.get("/news", async (ctx) => {
    // ctx.body = "这是一个新闻页面"
    await ctx.render("user")
})

router.post("/doAdd", async (ctx) => {
    // 获取post表单数据
    console.log(ctx.request.body)
    // 获取表单提交数据
    ctx.body = ctx.request.body
})

// 动态路由
router.get("/newscontent/:aid", async (ctx) => {
    console.log(ctx.params) //{ aid: '章三' }
    ctx.body = "详情页"
})


// 启动路由

app.use(router.routes()); //启动路由
app.use(router.allowedMethods()); // 可设置也可不设置，建议设置

app.listen(3000);