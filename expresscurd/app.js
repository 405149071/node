const express = require("express")
const path = require("path")
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

const art_express = require("express-art-template")

// 加载service文件
const userService = require("./service/userService.js")
// console.log(userService.getUsers());
const app = express()

// 设置接收中间件
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ // 默认把表单数据处理到req.body中
    extended: true
})); // for parsing application/x-www-form-urlencoded

// 创建upload对象，用于处理上传文件之类的form-data
var upload = multer(); // for parsing multipart/form-data

// 设置art-template
app.engine("art", art_express);

// 用static中间件
app.use(express.static(path.join(__dirname, "public")))

// 动态请求
app.get("/user/list", (req, res) => {
    // 原始数据输出方法
    // res.send("abc")
    // res.end()
    // 用模版引擎输出 基础数据
    // 默认从views文件夹下找模版文件，如果带目录 res.render("usrs/userlist.art",{})
    // res.render("userlist.art", {
    //     name: "zhangsan",
    //     title: "你好啊！",
    //     users: [{
    //         name: "laoda",
    //         id: 10001,
    //     }, {
    //         name: "laoer",
    //         id: 10002,
    //     }]
    // })

    // uses 数据从service层取得
    // res.render("userlist.art", {
    //     name: "zhangsan",
    //     title: "你好啊！",
    //     users: userService.getUsers()
    // })

    // 取分页数据
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    // console.log(page, size, "11111")
    const data = userService.getPageUsers(page, size);
    // console.log(data, "22222")
    res.render("users/userlist.art", {
        users: data.users
    })

})

// 添加用户
app.get("/user/add", (req, res) => {
    res.render("users/add.art");
})


app.post("/user/add", upload.array(), (req, res) => {
    // req的数据的三种方式
    // 1）req.query url中的参数
    // 2） req.param 路由中的
    // 3) req.body  获取表单的参数，默认参数没有，需要引入body-parse  form的enctype=urldecode的方式
    // 如果enctype=form-data的时候需要用multer中间件
    // res.send("ok")  // 给页面发送数据
    console.log("----------------req begin----------------")
    console.log(req.body); //同样
    console.dir(req.body); //同样
    console.dir("name=", req.body.name);
    console.log("----------------req end----------------")
    res.redirect("/user/list") // 跳转页面
})

app.listen(59999, function () {
    console.log("http://127.0.0.1:59999")
})