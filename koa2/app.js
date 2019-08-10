//引入koa
var Koa = require("koa"),
    router = require("koa-router")(),
    views = require("koa-views")

var app = new Koa()

app.use(views("views", {
    extension: "ejs"
}))

router.get("/", async (ctx) => {
    ctx.body = "首页"
})

router.get("/news", async (ctx) => {
    // ctx.body = "这是一个新闻页面"
    await ctx.render("user")
})

router.post("/doAdd", async (ctx) => {
    // 获取post表单数据

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