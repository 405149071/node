//引入koa
var Koa = require("koa"),
    path = require("path"),
    router = require("koa-router")(),
    render = require('koa-art-template'),
    bodyParser = require("koa-bodyparser"),
    static = require("koa-static")


// art-template
// 1 安装
// npm install --save art-template
// npm install --save koa-art-template
// 2 .引入 
// const render = require("koa-art-template")
// 3. render(app,{root:path.join(__dirname,'view',
//  extname : '.art',
//  debug:process.env.NODE_ENV !== 'production')})

// 4 使用
// await ctx.render('user')

var app = new Koa()

// 配置模版引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})

// 配置中间件

// 配置post bodyparser的中间件
app.use(bodyParser())


router.get("/", async (ctx) => {
    // ctx.body = "首页"
    await ctx.render("index")
})

router.get("/news", async (ctx) => {
    // ctx.body = "这是一个新闻页面"
    let list = {
        name: "张三",
        h: "<h2>这是一个h2</h2>",
        num: 20,
        data: ["1111", "2222", "3333"],
    }

    await ctx.render("news", {
        list: list
    })
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