//引入koa
var Koa = require("koa")
var router = require("koa-router")()
var session = require("koa-session")

// cookie 
// ctx.cookies.set()
// ctx.cookies.get()
// 汉字的cookie有问题，不能设置，需要转码base64

// session
// 安装npm install koa-session --save
// 引入 const session = require("koa-session")
// 配置 app.keys =xxxxxx;好多配置
// 使用
// ctx.session.username = "张三"
// ctx.session.username
var app = new Koa()

app.keys = ['some secret hurr'];
// 配置session中间件
const CONFIG = {
    key: 'koa:sess',
    /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000, // 建议修改
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: true,
    /** (boolean) httpOnly or not (default true) */
    signed: true,
    /** (boolean) signed or not (default true) */
    rolling: true, // true，建议修改为true， 每次请求都更新时间
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, // 访问快到时间都时候更新时间
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
app.use(session(CONFIG, app));

router.get("/", async (ctx) => {
    // 读取session和cookie
    console.log(ctx.cookies.get("name"), "nnnnnnnnn")
    console.log(ctx.session.userinfo)
    ctx.body = "首页"
})

router.get("/login", async (ctx) => {
    ctx.cookies.set("name", "zss");
    ctx.session.userinfo = "张三";
    ctx.body = "登录成功"
})
router.get("/news", async (ctx) => {
    // 读取session
    console.log(ctx.session.userinfo)
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