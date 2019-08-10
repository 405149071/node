//引入koa
var Koa = require("koa")
var router = require("koa-router")()


var app = new Koa()
// var router = new Router()
// 配置路由（需要安装）
router.get("/", async (ctx) => {
    ctx.body = "首页"
}).get("/news", async (ctx) => {
    ctx.body = "这是一个新闻页面"
})

// 动态路由
router.get("/newscontent/:aid", async (ctx) => {
    // 获取get参数 
    // http://127.0.0.1:3000/newscontent?id=888&name=张三
    // 1） ctx.query 返回对象
    // 2)  ctx.querystring
    console.log(ctx.query) //{ id: '888', name: '张三' }

    console.log(ctx.querystring) //id=888&name=%E5%BC%A0%E4%B8%89

    // ctx.request  ctx.request.query
    // 动态路由
    // http://127.0.0.1:3000/newscontent/章三?id=888&name=%E5%BC%A0%E4%B8%89 
    console.log(ctx.params) //{ aid: '章三' }
    ctx.body = "详情页"
})


// 启动路由

app.use(router.routes()); //启动路由
app.use(router.allowedMethods()); // 可设置也可不设置，建议设置

app.listen(3000);