//引入koa
var Koa = require("koa"),
    router = require("koa-router")(),
    views = require("koa-views")
// ejs 模版引擎
// 1. npm install koa-views --save
// 2. npm install ejs --save
// 3. var views  = require("koa-views")
// app.use(views(__dirname,{extension:"ejs"}))
// 4. await ctx.render("index")
//  ctx.state ={ //放在中间件
//     session:this.session,
//     title:'app'
// }

var app = new Koa()

// 配置第三方中间件 模版引擎
// app.use(views('views', {
//     // 第一种必须是.html结尾
//     map: {
//         html: "ejs"
//     }
// }))

app.use(views("views", {
    extension: "ejs"
}))

// 写一个中间件来配置公共的信息
app.use(async (ctx, next) => {
    ctx.state.userinfo = "章三奥" // 也可以对象
    await next(); //继续向下匹配
})

router.get("/", async (ctx) => {
    // ctx.body = "首页"
    await ctx.render("index", {
        title: "你好ejs"
    })
})

router.get("/news", async (ctx) => {

    // ctx.body = "这是一个新闻页面"
    let content = "<h2>绑定数据2</he>"
    let num = 123;
    await ctx.render("news", {
        list: ["1111", "2222", "3333"],
        content: content,
        num: num,
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