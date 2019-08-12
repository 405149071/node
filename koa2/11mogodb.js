//引入koa
var Koa = require("koa")
var router = require("koa-router")()
const DB = require("./module/db.js")

var app = new Koa()

router.get("/", async (ctx) => {
    // 取得数据
    var r = await DB.find("user", {});
    console.log(r);
    ctx.body = "首页"
})

router.get("/news", async (ctx) => {
    ctx.body = "这是一个新闻页面"
})

router.get("/addnews", async (ctx) => {
    let r = await DB.insert("user", {
        "username": "赵7",
        "age": 22,
        "sex": "男"
    })
    console.log(r.result); // result: { n: 1, ok: 1 },  ok == 1 增加成功
    ctx.body = "add"
})

router.get("/editnews", async (ctx) => {
    let r = await DB.update("user", {
        "username": "赵7"
    }, {
        "username": "赵77"
    })
    console.log(r.result); // result: { n: 1, ok: 1 },  ok == 1 增加成功
    ctx.body = "edit"
})

router.get("/deletenews", async (ctx) => {
    let r = await DB.delete("user", {
        "username": "里流"
    })
    console.log(r.result); // result: { n: 1, ok: 1 },  ok == 1 增加成功
    ctx.body = "delete"
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