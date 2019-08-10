//引入koa
var Koa = require("koa")
var router = require("koa-router")()

// ejs 模版引擎
// 1. npm install koa-views --save
// 2. npm install ejs --save
// 3. app.use(views(__dirname,{extension:"ejs"}))
// 4. await ctx.render("index")

var app = new Koa()

router.get("/", async (ctx) => {
    ctx.body = "首页"
})

router.get("/news", async (ctx) => {
    ctx.body = "这是一个新闻页面"
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