//引入koa
var Koa = require("koa")
var router = require("koa-router")()


var app = new Koa()
// 中间件 路由匹配前/路由匹配后
// 1）应用级中间件  路由级中间件 错误处理中间件 第三方中间件

// app.use() 写路由匹配具体路由，不写的话匹配所有路由
app.use(async (ctx, next) => {
    console.log("1. 这是路由1")
    await next(); // 当前路由匹配完继续向下匹配
    console.log("6 ,响应完成返回")
    //// 错误处理中间件  执行完路由代码最后走这里
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = "这是一个 404 页面1"
    } else {
        console.log(ctx.url)
    }
})

app.use(async (ctx, next) => {
    console.log("2. 这是路由2")
    await next(); // 当前路由匹配完继续向下匹配
    console.log("5 ,响应完成返回")
    //// 错误处理中间件  执行完路由代码最后走这里
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = "这是一个 404 页面2"
    } else {
        console.log(ctx.url)
    }
})

// 应用级中间件
router.get("/", async (ctx) => {
    ctx.body = "首页"
})



// 路由级别 , 
router.get("/news", async (ctx, next) => {
    console.log("3.新闻页")
    await next() // 当前路由匹配完继续向下匹配
})

router.get("/news", async (ctx) => {
    console.log("4.响应新闻页")
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