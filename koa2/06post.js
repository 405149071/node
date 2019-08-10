//引入koa
var Koa = require("koa"),
    router = require("koa-router")(),
    views = require("koa-views"),
    bodyParser = require("koa-bodyparser")

var app = new Koa()


// 利用中间件 koa-bodyparser 中间件获取表单提交的数据
// 1 npm install koa-bodyparser --save
// 2. 引入
// 3 。 app.use(bodyParser)
// 4 . ctx.request.body

app.use(views("views", {
    extension: "ejs"
}))

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