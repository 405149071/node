//引入koa
var Koa = require("koa")
var router = require("koa-router")()

// 安装
// npm install mongodb --save
// 2 引入 mongodb下的mongoclient
// var mongoclient = require("mongodb").MongoClient;
// 3 定义数据库连接的地址以及配置数据库
// koa 数据库的名称
// var url ="mongodb://localhost:27017/";
// var dbName = "koa"

//4. nodejs 连接数据库
// mongoClicent.connect(url,fun(err,client){

//})
//5 操作数据库

var MongoClient = require("mongodb").MongoClient

var dbURL = "mongodb://localhost:27017/"

var dbName = "test";

MongoClient.connect(dbURL, function (err, client) {
    if (err) {
        console.log(err);
        return;
    }

    var db = client.db(dbName);

    //add 数据
    db.collection("user").insertOne({
        'username': "里流",
        "age": 21
    }, function (err, result) {
        if (!err) {
            console.log("增加成功")
            client.close()
        }

    });

    // 查询数据
    var result = db.collection('user').find({});
    result.toArray((err, docs) => {
        console.log(docs);
    })

})

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